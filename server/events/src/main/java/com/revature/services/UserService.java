package com.revature.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import com.revature.entities.User;
import com.revature.repositories.UserRepository;


@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public Collection<User> getAllUsers(){
		return userRepository.findAll();
	}
	public Page<User> getSports(Pageable pageable) {
		return userRepository.findAll(pageable);
	}
	
	public User save(User user) {
		return userRepository.save(user);
	}

	public User getUserById(int id) {
		return userRepository.findById(id)
				.orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
	}
	
	

}
