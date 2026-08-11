package com.Weather.WeatherApi.Config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

@Configuration
public class RestClientConfig {

    @Bean
    public RestClient weatherRestClient(WeatherApiProperties weatherApiProperties) {
        return RestClient.builder()
                .baseUrl(weatherApiProperties.getUrl())
                .build();
    }
}