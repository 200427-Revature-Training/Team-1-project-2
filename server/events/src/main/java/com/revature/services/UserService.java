package com.revature.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	public User save(User user) {
		return userRepository.save(user);
	}

	public User getUserById(int id) {
		return userRepository.findById(id)
				.orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
	}
	
	public User login(User user) {
		String userName = user.getUserName();
		System.out.println("I am trying to log in");
		User tempUser = userRepository.login(userName);
		System.out.println(tempUser.getPassword() + " == " + user.getPassword());
		if(user.getPassword().equals(tempUser.getPassword()))
			return userRepository.login(userName);
		else
			return null;
				
	}
}
