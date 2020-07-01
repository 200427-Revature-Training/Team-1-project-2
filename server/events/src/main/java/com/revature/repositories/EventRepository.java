package com.revature.repositories;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.entities.Event;
import com.revature.entities.User_Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {

	@Query("FROM User_Event WHERE user_id = ?1")
	Collection<User_Event> getUserEventsAttended(int id);
	
}
