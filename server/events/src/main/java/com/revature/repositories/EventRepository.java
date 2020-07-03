package com.revature.repositories;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.entities.Event;
import com.revature.entities.User_Event_DTO;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {

	@Query(value = "select e.id,e.name , e.date,e.picture_url,e.description ,e.featured_song, e.bands,e.place_id from events.user_event ue JOIN events.events e ON ue.event_id = e.id WHERE ue.user_id  = ?1" ,
			nativeQuery=true)
	Collection<Event> getUserEventsAttended(int id);
	
}
