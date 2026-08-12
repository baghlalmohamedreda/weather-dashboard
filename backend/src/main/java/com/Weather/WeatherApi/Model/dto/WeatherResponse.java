package com.Weather.WeatherApi.Model.dto;

import java.time.LocalTime;
import java.util.List;

public record WeatherResponse(
        String city,
        String country,
        CurrentConditions current,
        List<HourlyForecastItem> hourly,
        List<DailyForecastItem> daily
) {
    public record CurrentConditions(
            double temperatureCelsius,
            double feelsLikeCelsius,
            int humidity,
            double windSpeedKmh,
            int pressureHpa,
            String description,
            String icon,
            LocalTime sunrise,
            LocalTime sunset
    ){}
}
