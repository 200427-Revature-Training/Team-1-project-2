package com.revature.repositories;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.entities.Event;
import com.revature.entities.User;
import com.revature.entities.User_First_Last_Dto;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {

	@Query(value = "select e.id,e.name , e.date,e.picture_url,e.description ,e.featured_song, e.bands,e.city,e.state from events.user_event ue JOIN events.events e ON ue.event_id = e.id WHERE ue.user_id  = ?1" ,
			nativeQuery=true)
	Collection<Event> getUserEventsAttended(int id);

	//@Query(value="select u.id ,u.first_name, u.last_name,u.email,u.username,u.password, u.picture_url,u.bio ,u.role_id,u.favorite_band,u.favorite_song,u.city  ,u.favorite_genre    ,u.state  from events.user_event ue JOIN events.users u ON ue.user_id = u.id WHERE ue.event_id  = ?1" ,nativeQuery=true)
	//@Query(value="select u.first_name ,u.last_name from events.user_event ue JOIN events.users u ON ue.user_id = u.id WHERE ue.event_id  = ?1", nativeQuery=true)
	//Collection<User_First_Last_Dto> getEventsUsers(int id);
	
}
