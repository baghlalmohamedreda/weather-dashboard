package com.Weather.WeatherApi.Model.dto;


import java.time.LocalDate;

public record DailyForecastItem(
        LocalDate date,
        double minTemperatureCelsius,
        double maxTemperatureCelsius,
        int rainProbabilityPercent,
        String icon
) {
}
