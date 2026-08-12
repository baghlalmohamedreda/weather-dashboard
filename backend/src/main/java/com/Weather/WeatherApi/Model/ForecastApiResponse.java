package com.Weather.WeatherApi.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public record ForecastApiResponse(
        City city,
        List<ForecastEntry> list
) {
    @JsonIgnoreProperties(ignoreUnknown = true)
    public record City(
            String name,
            String country
    ){}

    @JsonIgnoreProperties(ignoreUnknown = true)
    public record ForecastEntry(
            long dt,
            String dt_txt,
            Main main,
            Weather[] weather,
            double pop
    ){}
    @JsonIgnoreProperties(ignoreUnknown = true)
    public record Main(
            double temp
    ){}
    @JsonIgnoreProperties(ignoreUnknown = true)
    public record Weather(
         String description,
         String icon
    ){}
}
