package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entities.User_Event;

@Repository
public interface UserEventRepository extends JpaRepository<User_Event, Integer>  {
	/*
	@Query("FROM User_Event ue WHERE : ue.user_id = ?1")
	Collection<User_Event> getUserEventsAttended(int id);*/
}
