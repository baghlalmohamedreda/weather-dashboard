package com.Weather.WeatherApi.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@JsonIgnoreProperties(ignoreUnknown = true)
public record OpenWeatherResponse(
        String name,
        Main main,
        Weather[] weather,
        Wind wind,
        Sys sys
) {
    @JsonIgnoreProperties(ignoreUnknown = true)
    public record Main(
            double temp,
            double feels_like,
            int humidity,
            double temp_min,
            double temp_max,
            int pressure
    ) {}
    @JsonIgnoreProperties(ignoreUnknown = true)
    public record Weather(
            String main,
            String description,
            String icon
    ){}
    @JsonIgnoreProperties(ignoreUnknown = true)
    public record Wind(
            double speed
    ){}

    @JsonIgnoreProperties(ignoreUnknown = true)
    public record Sys(
            String country,
            long sunrise,
            long sunset
    ){}

}
