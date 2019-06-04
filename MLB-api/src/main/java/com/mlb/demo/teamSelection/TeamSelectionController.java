package com.mlb.demo.teamSelection;



import java.io.IOException;
import java.time.Month;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mlb.demo.model.Dates;
import com.mlb.demo.model.TeamInfo;


@CrossOrigin
@RestController("/")
public class TeamSelectionController {

	@Autowired
	private TeamScheduleService tss;
	
@GetMapping("/api/{teamSelected}")//default get request with  LocalDate.now()
public Dates[] getDates(@PathVariable String teamSelected,
						@RequestParam(value="monthSelected",required=false)Month monthSelected) throws IOException {

		return tss.getDates(teamSelected, monthSelected);
}


	
	/*@GetMapping("/")
	public List<String> getTeamList(){
		System.out.println("GETTING TEAM LIST");
		return tss.getTeamList();
	}*/
@GetMapping("/")
	public List<TeamInfo> getTeamList(){
		System.out.println("GETTING TEAM LIST");
		return tss.getTeamListInfo();
	}
}
///"http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&teamId=147&season=2018&startDate=2018-06-01&endDate=2018-06-30" keep here for reference