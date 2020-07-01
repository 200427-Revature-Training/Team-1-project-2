package com.revature.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.Event;
import com.revature.services.EventService;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.PUT, RequestMethod.PATCH,
		RequestMethod.POST }, allowedHeaders = { "*" })
public class EventController {

	@Autowired
	EventService eventService;

	@GetMapping
	Collection<Event> getAllEvents() {
		return eventService.getAllEvents();
	}

	@PostMapping
	Event Event(@RequestBody Event event) {
		return eventService.save(event);
	}
	
	@GetMapping("/user/{id}")
	Collection<Event> getUserEventsAttended(@PathVariable int id) {
		return eventService.getUserEventsAttended(id);
	}
}
