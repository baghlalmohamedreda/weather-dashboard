package com.Weather.WeatherApi.Service;


import com.Weather.WeatherApi.Config.WeatherApiProperties;
import com.Weather.WeatherApi.Exception.CityNotFoundException;
import com.Weather.WeatherApi.Model.OpenWeatherResponse;
import com.Weather.WeatherApi.Model.dto.WeatherResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClient;

import java.time.Instant;
import java.time.LocalTime;
import java.time.ZoneId;

@Service
public class WeatherService {
    private final RestClient weatherRestClient;
    private final WeatherApiProperties weatherApiProperties;

    public WeatherService(RestClient weatherRestClient, WeatherApiProperties weatherApiProperties) {
        this.weatherRestClient = weatherRestClient;
        this.weatherApiProperties = weatherApiProperties;
    }

    public OpenWeatherResponse fetchRawWeather(String city) {
        try {
            return weatherRestClient.get()
                    .uri(uriBuilder -> uriBuilder
                            .queryParam("q", city)
                            .queryParam("appid", weatherApiProperties.getKey())
                            .queryParam("units", "metric")
                            .build())
                    .retrieve()
                    .body(OpenWeatherResponse.class);

        } catch (HttpClientErrorException.NotFound ex) {
            throw new CityNotFoundException(city);
        }
    }

    public WeatherResponse.CurrentConditions mapToCurrentConditions(OpenWeatherResponse raw) {
        OpenWeatherResponse.Weather primaryCondition = raw.weather()[0];
        ZoneId systemZone = ZoneId.systemDefault();

        return new WeatherResponse.CurrentConditions(
                raw.main().temp(),
                raw.main().feels_like(),
                raw.main().humidity(),
                convertMpsToKmh(raw.wind().speed()),
                raw.main().pressure(),
                primaryCondition.description(),
                primaryCondition.icon(),
                unixToLocalTime(raw.sys().sunrise(), systemZone),
                unixToLocalTime(raw.sys().sunset(), systemZone)
        );
    }

    private double convertMpsToKmh(double metersPerSecond) {
        return metersPerSecond * 3.6;
    }

    private LocalTime unixToLocalTime(long unixSeconds, ZoneId zoneId) {
        return Instant.ofEpochSecond(unixSeconds)
                .atZone(zoneId)
                .toLocalTime();
    }
}
