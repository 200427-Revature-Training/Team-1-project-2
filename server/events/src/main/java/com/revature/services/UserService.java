package com.revature.services;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import com.revature.entities.User;
import com.revature.entities.User_First_Last_Dto;
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

	public User update(User user) {
		// TODO Auto-generated method stub
		System.out.println(user);
		Optional<User> optU = userRepository.findById(user.getId());
		User u = optU.get();
		System.out.println(u);
		u.setBand(user.getBand());
		u.setBio(user.getBio());
		u.setCity(user.getCity());
		u.setEmail(user.getEmail());
		u.setFirstName(user.getFirstName());
		u.setGenre(user.getGenre());
		u.setLastName(user.getLastName());
		u.setPicture(user.getPicture());
		u.setSong(user.getSong());
		u.setState(user.getState());
		userRepository.save(u);
		
		return u;
	}

	public Collection<User_First_Last_Dto> getEventsUsers(int id) {
		Collection<User> uList = userRepository.getEventsUsers(id);
		Collection<User_First_Last_Dto> dto = new ArrayList<User_First_Last_Dto>();
		for(User u : uList) {
			User_First_Last_Dto uDto = new User_First_Last_Dto();
			uDto.setFirst_name(u.getFirstName());
			uDto.setLast_name(u.getLastName());
			dto.add(uDto);
		}
		
		return dto; 
	}
}
