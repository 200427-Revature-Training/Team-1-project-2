package com.revature.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.entities.Event;
import com.revature.repositories.EventRepository;

@Service
public class EventService {

	@Autowired
	EventRepository eventRepository;
	public Collection<Event> getAllEvents() {
		return eventRepository.findAll();
	}
	
	public Event save(Event event) {
		return eventRepository.save(event);
	}
}
