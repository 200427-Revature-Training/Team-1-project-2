package com.revature.services;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import com.revature.entities.Event;
import com.revature.entities.User;
import com.revature.entities.User_Event;
import com.revature.entities.User_First_Last_Dto;
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

	public void saveUserEvent(User_Event ue) {
		userEventRepository.save(ue);
	}

	public Collection<Event> getUserEventsAttended(int id) {
		Collection <Event> events = eventRepository.getUserEventsAttended(id);
		return events;
	}
		/*
		Collection<User_Event> list = userEventRepository.findAll();
		System.out.println(list);
		Collection<User_Event> list2 = new ArrayList<User_Event>();
		for (User_Event ue : list) {
			if (ue.getUserID() == id)
				list2.add(ue);
		}
		System.out.println(list2);
		//Collection<Event> list = userEventRepository.getUserEventsAttended(id);
		Collection<Event> events = new ArrayList<Event>();
		for (User_Event ue : list2) {
			events.add(getEventByID(ue.getEventID()));
		Collection<Event> list2 = new ArrayList<Event>();
		Iterator<User_Event> iterator = list.iterator();
		while (iterator.hasNext()) {
			list2.add(new Event(iterator.next().getEvent()));
		}
		*/
		//return list;


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

	public void deleteUserEvent(User_Event ue) {
		userEventRepository.delete(ue);
		// TODO Auto-generated method stub
		
	}


}
