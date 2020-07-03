package com.revature.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import com.revature.entities.Event;
import com.revature.entities.User_Event_Input;
import com.revature.entities.User_Event_DTO;
import com.revature.repositories.EventRepository;
import com.revature.repositories.UserEventRepository;

@Service
public class EventService {

	@Autowired
	EventRepository eventRepository;
	
	@Autowired
	UserEventRepository userEventRepository;

	public Collection<Event> getAllEvents() {
		return eventRepository.findAll();
	}

	public void saveUserEvent(User_Event_Input ue) {
		userEventRepository.save(ue);
	}

	public Collection<Event> getUserEventsAttended(int id) {
		Collection<Event> list = eventRepository.getUserEventsAttended(id);
		/*
		Collection<Event> list2 = new ArrayList<Event>();
		Iterator<User_Event> iterator = list.iterator();
		while (iterator.hasNext()) {
			list2.add(new Event(iterator.next().getEvent()));
		}
		*/
		return list;
	}

	public Event getEventByID(int id) {
		return eventRepository.findById(id).orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
	}
	
	public Event update(Event event) {
		if(event.getId() == 0) {
			throw new HttpClientErrorException(HttpStatus.BAD_REQUEST); 
		}
		return eventRepository.save(event);
	}

	public Event save(Event concertEvent) {
		return eventRepository.save(concertEvent);
	}
}
