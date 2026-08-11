package com.Weather.WeatherApi.Config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

import jakarta.validation.constraints.NotBlank;

@ConfigurationProperties(prefix = "weather.api")
@Validated
public class WeatherApiProperties {
    @NotBlank(message="weather.api.key must not be blank")
    private String key;

    @NotBlank(message = "weather.api.url must not be blank")
    private String url;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
