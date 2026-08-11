package com.Weather.WeatherApi.Controller;

import com.Weather.WeatherApi.Model.dto.WeatherResponse;
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

    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping
    public WeatherResponse getCurrentWeather(@RequestParam String city) {
        return weatherService.getCurrentWeatherByCity(city);
    }
}