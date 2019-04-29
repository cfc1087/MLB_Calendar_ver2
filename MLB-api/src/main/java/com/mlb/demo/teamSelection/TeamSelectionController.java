package com.mlb.demo.teamSelection;


import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mlb.demo.model.Dates;
@CrossOrigin
@RestController
public class TeamSelectionController {

	@Autowired
	private TeamSelectionService tss;
	
@GetMapping()
public Dates[] test() throws IOException {
	System.out.println("GET REQUEST");
	return tss.getDates();
}
	
}
