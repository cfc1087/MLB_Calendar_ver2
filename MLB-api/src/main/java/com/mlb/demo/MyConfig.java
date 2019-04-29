package com.mlb.demo;

import java.time.LocalDate;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyConfig {

	
	
	@Bean
	public LocalDate getNow(){
		return  LocalDate.now();
	}
	
}
