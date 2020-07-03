package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entities.User_Event_Input;

@Repository
public interface UserEventRepository extends JpaRepository<User_Event_Input, Integer>  {

}
