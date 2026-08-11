package com.Weather.WeatherApi.Model.dto;

import java.time.LocalTime;

public record WeatherResponse(
        String city,
        String country,
        double temperatureCelsius,
        double feelsLikeCelsius,
        int humidity,
        double windSpeedKmh,
        int pressureHpa,
        String description,
        String icon,
        LocalTime sunrise,
        LocalTime sunset
) {
}
