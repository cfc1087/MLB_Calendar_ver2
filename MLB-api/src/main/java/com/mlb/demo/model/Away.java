/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mlb.demo.model;

/**
 *
 * @author Christopher
 */
public class Away {

    private final Team team;

    public Away() {
        team = new Team();
    }

    public String getAwayTeam() {
        return team.getName();
    }

    @Override
    public String toString() {
        return team.toString();
    }
}
