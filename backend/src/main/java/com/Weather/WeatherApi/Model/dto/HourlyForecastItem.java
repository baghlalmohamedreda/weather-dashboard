package com.Weather.WeatherApi.Model.dto;


import java.time.LocalTime;

public record HourlyForecastItem(
        LocalTime time,
        double temperatureCelsius,
        String icon
) {
}
