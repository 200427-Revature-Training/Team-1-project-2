package com.revature.repositories;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.entities.User;
import com.revature.entities.User_First_Last_Dto;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	@Query("FROM User u WHERE :id = u.id")
	User getUserById(int id);
	
	@Query("From User u WHERE :username = u.userName")
	User login(String username);

	//@Query(value="select u.first_name ,u.last_name from events.user_event ue JOIN events.users u ON ue.user_id = u.id WHERE ue.event_id  = ?1", nativeQuery=true)
	@Query(value="select u.id ,u.first_name, u.last_name,u.email,u.username,u.password, u.picture_url,u.bio ,u.role_id,u.favorite_band,u.favorite_song,u.city  ,u.favorite_genre    ,u.state  from events.user_event ue JOIN events.users u ON ue.user_id = u.id WHERE ue.event_id  = ?1" ,nativeQuery=true)
	Collection<User> getEventsUsers(int id);
}
