package com.revature.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

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

	public Event getUserByID(int id) {

		return eventRepository.findById(id)
				.orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
	}
}
