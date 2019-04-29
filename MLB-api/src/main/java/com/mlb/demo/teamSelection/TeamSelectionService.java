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
public class TeamSelectionService {

	private String url;
	private int teamId = 147;
	@Autowired
	private LocalDate date;

	private Dates[] dates;
	
	public TeamSelectionService() {
		LocalDate.now();
	}

	public void getJSON() throws IOException {
		//keep for reference
		// ="http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&teamId=147&season=2018&startDate=2018-06-01&endDate=2018-06-30";
		
		url = "http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1";
		String teamId = "&teamId=" + 147;
		String seasonYear = "&season=" + date.getYear();
		String startDate = "&startDate=" + date.getYear() + "-" + date.getMonthValue() + "-01";
		String endDate = "&endDate=" + date.getYear() + "-" + date.getMonthValue() + "-" + date.lengthOfMonth();
		url += teamId+seasonYear + startDate + endDate;

		Gson gson = new GsonBuilder().registerTypeAdapter(Dates[].class, new MyDeserializer()).setPrettyPrinting().create();
		dates = gson.fromJson(readURL.readURLString(url), Dates[].class);
	}

	public Dates[] getDates() throws IOException {
		this.getJSON();
		return dates;
	}

	/*
	 * public int getTeamId() { //this.teamId = pass selected value; }
	 */
}
