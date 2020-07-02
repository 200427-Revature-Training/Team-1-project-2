package com.revature.repositories;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.entities.Event;
import com.revature.entities.User_Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {

	@Query(value = "select * FROM  events.user_event ue JOIN events.events e ON ue.event_id = e.id WHERE ue.user_id = 17;",
			nativeQuery=true)
	Collection<User_Event> getUserEventsAttended(int id);
	
}
