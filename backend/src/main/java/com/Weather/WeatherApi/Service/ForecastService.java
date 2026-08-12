package com.Weather.WeatherApi.Service;

import com.Weather.WeatherApi.Config.WeatherApiProperties;
import com.Weather.WeatherApi.Exception.CityNotFoundException;
import com.Weather.WeatherApi.Model.ForecastApiResponse;
import com.Weather.WeatherApi.Model.dto.DailyForecastItem;
import com.Weather.WeatherApi.Model.dto.HourlyForecastItem;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClient;


import java.time.Instant;
import java.time.LocalDate;

import java.time.ZoneId;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ForecastService {

    private static final int HOURLY_ITEMS_LIMIT = 8; // next 24h, in 3h steps

    private final RestClient forecastRestClient;
    private final WeatherApiProperties weatherApiProperties;

    public ForecastService(RestClient forecastRestClient, WeatherApiProperties weatherApiProperties) {
        this.forecastRestClient = forecastRestClient;
        this.weatherApiProperties = weatherApiProperties;
    }

    public ForecastApiResponse fetchRawForecast(String city) {
        try {
            return forecastRestClient.get()
                    .uri(uriBuilder -> uriBuilder
                            .queryParam("q", city)
                            .queryParam("appid", weatherApiProperties.getKey())
                            .queryParam("units", "metric")
                            .build())
                    .retrieve()
                    .body(ForecastApiResponse.class);
        } catch (HttpClientErrorException.NotFound ex) {
            throw new CityNotFoundException(city);
        }
    }

    public List<HourlyForecastItem> buildHourlyForecast(ForecastApiResponse raw) {
        ZoneId zone = ZoneId.systemDefault();
        return raw.list().stream()
                .limit(HOURLY_ITEMS_LIMIT)
                .map(entry -> new HourlyForecastItem(
                        Instant.ofEpochSecond(entry.dt()).atZone(zone).toLocalTime(),
                        entry.main().temp(),
                        entry.weather()[0].icon()
                ))
                .collect(Collectors.toList());
    }

    public List<DailyForecastItem> buildDailyForecast(ForecastApiResponse raw) {
        ZoneId zone = ZoneId.systemDefault();

        Map<LocalDate, List<ForecastApiResponse.ForecastEntry>> groupedByDay = raw.list().stream()
                .collect(Collectors.groupingBy(
                        entry -> Instant.ofEpochSecond(entry.dt()).atZone(zone).toLocalDate()
                ));

        return groupedByDay.entrySet().stream()
                .map(dayEntry -> summarizeDay(dayEntry.getKey(), dayEntry.getValue()))
                .sorted(Comparator.comparing(DailyForecastItem::date))
                .collect(Collectors.toList());
    }

    private DailyForecastItem summarizeDay(LocalDate date, List<ForecastApiResponse.ForecastEntry> entries) {
        double minTemp = entries.stream()
                .mapToDouble(e -> e.main().temp())
                .min()
                .orElseThrow();

        double maxTemp = entries.stream()
                .mapToDouble(e -> e.main().temp())
                .max()
                .orElseThrow();

        double maxPop = entries.stream()
                .mapToDouble(ForecastApiResponse.ForecastEntry::pop)
                .max()
                .orElseThrow();

        String representativeIcon = pickMiddayIcon(entries);

        return new DailyForecastItem(
                date,
                minTemp,
                maxTemp,
                (int) Math.round(maxPop * 100),
                representativeIcon
        );
    }

    private String pickMiddayIcon(List<ForecastApiResponse.ForecastEntry> entries) {
        return entries.stream()
                .filter(e -> e.dt_txt().contains("12:00:00"))
                .findFirst()
                .map(e -> e.weather()[0].icon())
                .orElse(entries.get(entries.size() / 2).weather()[0].icon());
    }
}