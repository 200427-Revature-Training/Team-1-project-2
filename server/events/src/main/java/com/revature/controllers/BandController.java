package com.revature.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.Band;
import com.revature.services.BandService;

@RestController
@RequestMapping("/bands")
public class BandController {


	@Autowired
	BandService bandService;
	
	@GetMapping
	public Collection<Band> getAllBands(){
		return bandService.getAllBands();
	}

	@PostMapping
	public Band saveBand(@RequestBody Band band) {
		return bandService.save(band);
	}


	  @GetMapping("/{id}") public Band getBandById(@PathVariable int id) { 
		  return  bandService.getBandById(id);
	}
}
