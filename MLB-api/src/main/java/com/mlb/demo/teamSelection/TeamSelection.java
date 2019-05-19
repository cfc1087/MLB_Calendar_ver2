/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mlb.demo.teamSelection;

import java.awt.Color;
import java.util.stream.Stream;

/**
 *
 * @author Christopher
 */
public enum TeamSelection {

    ARIZONADIAMONDBACKS("Arizona Diamondbacks", "ARI", 109, new Color(167,25,48)),
    ATLANTABRAVES("Atlanta Braves", "ATL", 144, new Color(12,35,64)),
    BALTIMOREORIOLES("Baltimore Orioles", "BAL", 110, new Color(252, 76, 2)),
    BOSTONREDSOX("Boston Red Sox", "BOS", 111, new Color(12, 35, 64)),
    CHICAGOCUBS("Chicago Cubs", "CHC", 112, new Color(0, 47, 108)),
    CHICAGOWHITESOX("Chicago White Sox", "CWS", 145, new Color(39, 37, 31)),
    CINCINNATIREDS("Cincinnati Reds", "CIN", 113, new Color(213, 0, 50)),
    CLEVELANDINDIANS("Cleveland Indians", "CLE", 114, new Color(12, 35, 64)),
    COLORADOROCKIES("Colorado Rockies", "COL", 115, new Color(51, 0, 114)),
    DETROITTIGERS("Detroit Tigers", "DET", 116, new Color(12, 35, 64)),
    HOUSTONASTROS("Houston Astros", "HOU", 117, new Color(0, 45, 98)),
    KANSASCITYROYALS("Kansas City Royals", "KAN", 118, new Color(26, 71, 132)),
    LOSANGELESANGELS("Los Angeles Angels", "LAA", 108, new Color(186,0,33)),
    LOSANGELESDODGERS("Los Angeles Dodgers", "LAD", 119, new Color(0, 47, 119)),
    MIAMIMARLINS("Miami Marlins", "FLA", 146, new Color(237, 111, 46)),
    MILWAUKEEBREWERS("Milwaukee Brewers", "MIL", 158, new Color(19, 41, 75)),
    MINNESOTATWINS("Minnesota Twins", "MIN", 142, new Color(12, 35, 65)),
    NEWYORKMETS("New York Mets", "NYM", 121, new Color(0, 45, 114)),
    NEWYORKYANKEES("New York Yankees", "NYY", 147, new Color(12, 35, 64)),
    OAKLANDATHLETICS("Oakland Athletics", "OAK", 133, new Color(3, 70, 56)),
    PHILADELPHIAPHILLIES("Philadelphia Phillies", "PHI", 143, new Color(0, 48, 135)),
    PITTSBURGHPIRATES("Pittsburgh Pirates", "PIT", 134, new Color(39, 37, 31)),
    ST_LOUISCARDINALS("St. Louis Cardinals", "STL", 138, new Color(186, 12, 47)),
    SANDIEGOPADRES("San Diego Padres", "SD", 135, new Color(4, 30, 66)),
    SANFRANCISCOGIANTS("San Francisco Giants", "SF", 137, new Color(39, 37, 31)),
    SEATTLEMARINERS("Seattle Mariners", "SEA", 136, new Color(12, 35, 64)),
    TAMPABAYRAYS("Tampa Bay Rays", "TB", 139, new Color(9, 44, 92)),
    TEXASRANGERS("Texas Rangers", "TEX", 140, new Color(0, 45, 114)),
    TORONTOBLUEJAYS("Toronto Blue Jays", "TOR", 141, new Color(29, 45, 92)),
    WASHINGTONNATIONALS("Washington Nationals", "WAS", 120, new Color(186, 18, 43));

    private final String name;
    private final String abbr;
    private final int id;
    private final Color color;

    private TeamSelection(String name, String abbr, int id, Color color) {
        this.name = name;
        this.abbr = abbr;
        this.id = id;
        this.color = color;
    }
   


	public String getName() {
        return name;
    }

    public String getAbbr() {
        return abbr;
    }

    public int getId() {
        return id;
    }

    public Color getColor() {
        return color;
    }
    public String getRGB() {
    	String rgb = "";
    	int red = this.color.getRed();
    	int green = this.color.getGreen();
    	int blue = this.color.getBlue();
    	rgb +="rgb("+red+","+green+","+blue+")";
    	return rgb;
    }
    public static Stream<TeamSelection>stream(){
    	return Stream.of(TeamSelection.values());
    }
}
