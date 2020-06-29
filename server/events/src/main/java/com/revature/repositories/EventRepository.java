package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entities.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {


	

}
