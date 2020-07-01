package com.revature.services;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.entities.Event;
import com.revature.entities.User_Event;
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

	public Collection<Event> getUserEventsAttended(int id) {
		Collection<User_Event> list = eventRepository.getUserEventsAttended(id);
		Collection<Event> list2 = new ArrayList<Event>();
		Iterator<User_Event> iterator = list.iterator();
		while (iterator.hasNext()) {
			list2.add(new Event(iterator.next().getEvent()));
		}
		return list2;
	}
}
