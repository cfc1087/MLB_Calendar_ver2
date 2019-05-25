package com.mlb.demo.teamSelection;

import java.io.IOException;
import java.time.LocalDate;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mlb.demo.model.Dates;
import com.mlb.demo.model.MyDeserializer;
import com.mlb.demo.model.readURL;

@Service
public class JsonService {

	@Autowired
	private LocalDate date;

	private String url;
	

	

	

	public Dates[] getJSON(int teamId) throws IOException {
	
		

		// keep for reference
		// ="http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&teamId=147&season=2018&startDate=2018-06-01&endDate=2018-06-30";

		url = "http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1";
		String teamIdURI = "&teamId=" + teamId;
		String seasonYearURI = "&season=" + date.getYear();
		String startDateURI = "&startDate=" + date.getYear() + "-01-01";
		String endDateURI = "&endDate=" + date.getYear() + "-12-31";
		url += teamIdURI + seasonYearURI + startDateURI + endDateURI;

		Gson gson = new GsonBuilder().registerTypeAdapter(Dates[].class, new MyDeserializer()).setPrettyPrinting()
				.create();
		//dates =gson.fromJson(readURL.readURLString(url), Dates[].class);
		//Gson g = new GsonBuilder().setPrettyPrinting().create();
		//System.out.println(g.toJson(dates));
		return gson.fromJson(readURL.readURLString(url), Dates[].class);
	}

}
