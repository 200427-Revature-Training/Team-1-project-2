package com.revature.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.Event;
import com.revature.entities.User_Event_Input;
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
	Event Event(@RequestBody Event concertEvent) {
		return eventService.save(concertEvent);
	}

	@GetMapping("/user/{id}")
	Collection<Event> getUserEventsAttended(@PathVariable int id) {
		return eventService.getUserEventsAttended(id);
	}
	
	@PostMapping("/user")
	void save(@RequestBody User_Event_Input ue) {
		eventService.saveUserEvent(ue);
		
	}

	@GetMapping("/{id}")
	public Event getEventById(@PathVariable int id) {
		return eventService.getEventByID(id);
	}
	
	@PutMapping
	public Event updateEvent(@RequestBody Event event)
	{
		return eventService.update(event);
	}
}
