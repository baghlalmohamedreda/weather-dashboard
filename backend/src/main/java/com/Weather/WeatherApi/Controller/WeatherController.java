package com.Weather.WeatherApi.Controller;

import com.Weather.WeatherApi.Model.ForecastApiResponse;
import com.Weather.WeatherApi.Model.OpenWeatherResponse;
import com.Weather.WeatherApi.Model.dto.WeatherResponse;
import com.Weather.WeatherApi.Service.ForecastService;
import com.Weather.WeatherApi.Service.WeatherService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "http://localhost:5173")
public class WeatherController {

    private final WeatherService weatherService;
    private final ForecastService forecastService;


    public WeatherController(WeatherService weatherService,ForecastService forecastService) {
        this.weatherService = weatherService;
        this.forecastService = forecastService;
    }

    @GetMapping
    public WeatherResponse getWeather(@RequestParam String city){
        OpenWeatherResponse rawCurrent = weatherService.fetchRawWeather(city);
        ForecastApiResponse rawForecast = forecastService.fetchRawForecast(city);

        return new WeatherResponse(
                rawCurrent.name(),
                rawCurrent.sys().country(),
                weatherService.mapToCurrentConditions(rawCurrent),
                forecastService.buildHourlyForecast(rawForecast),
                forecastService.buildDailyForecast(rawForecast)
        );
    }
}