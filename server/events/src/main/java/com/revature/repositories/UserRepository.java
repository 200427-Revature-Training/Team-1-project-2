package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.revature.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	@Query("FROM User u WHERE :id = u.id")
	User getUserById(int id);

}
