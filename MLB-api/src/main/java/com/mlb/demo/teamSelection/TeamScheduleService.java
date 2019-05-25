package com.mlb.demo.teamSelection;


import java.io.IOException;
import java.time.Month;
import java.util.ArrayList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mlb.demo.model.Dates;
import com.mlb.demo.model.TeamInfo;



@Service
public class TeamScheduleService {

	@Autowired
	private JsonService jService;

	
	private int teamId;
	public TeamScheduleService() {

	}

	public Dates[] getDates(String teamSelected ,Month monthSelected) throws IOException {
	
	System.out.println("******************");
	System.out.println("GETTING TEAM ID");
	System.out.println("******************");
		this.teamId = getTeamId(teamSelected);
		
		return jService.getJSON(teamId);
		 
	}

	private int getTeamId(String teamSelected) {
		
		String teamEnum = teamSelected.replace('.', '_').replaceAll(" ", "").toUpperCase();
		
		return TeamSelection.valueOf(teamEnum).getId();
	}

	public List<String> getTeamList() {
		List<String> teamList = new ArrayList<String>();
		TeamSelection.stream().forEach(t -> teamList.add(t.getName()));
		
		return teamList;
	}
	public List<TeamInfo> getTeamListInfo() {
		List<TeamInfo> teamList = new ArrayList<TeamInfo>();
		TeamSelection.stream().forEach(t -> teamList.add(new TeamInfo(t.getName(),t.getRGB())));
		
		return teamList;
	}
	
}
