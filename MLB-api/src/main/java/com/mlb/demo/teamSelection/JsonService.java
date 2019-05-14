package com.mlb.demo.teamSelection;

import java.io.IOException;
import java.time.LocalDate;
import java.time.Month;

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
	private int teamId;

	

	public void setTeamId(int teamId) {
		this.teamId = teamId;
	}

	public Dates[] getJSON(int teamId, Month monthSelected) throws IOException {
		
		if (monthSelected != null) {
			date = LocalDate.of(2019, monthSelected, 1);
		}

		// keep for reference
		// ="http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&teamId=147&season=2018&startDate=2018-06-01&endDate=2018-06-30";

		url = "http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1";
		String teamIdURI = "&teamId=" + teamId;
		String seasonYearURI = "&season=" + date.getYear();
		String startDateURI = "&startDate=" + date.getYear() + "-" + date.getMonthValue() + "-01";
		String endDateURI = "&endDate=" + date.getYear() + "-" + date.getMonthValue() + "-" + date.lengthOfMonth();
		url += teamIdURI + seasonYearURI + startDateURI + endDateURI;

		Gson gson = new GsonBuilder().registerTypeAdapter(Dates[].class, new MyDeserializer()).setPrettyPrinting()
				.create();
		return gson.fromJson(readURL.readURLString(url), Dates[].class);
	}

}
