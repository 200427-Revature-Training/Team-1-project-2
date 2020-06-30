package com.revature.controllers;

import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.User;
import com.revature.services.UserService;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*", 
methods = {RequestMethod.GET, RequestMethod.PUT, 
			RequestMethod.PATCH, RequestMethod.POST},
allowedHeaders = {"*"})
public class UserController {

	@Autowired
	UserService userService;
	
	@GetMapping
	public Collection<User> getAllUsers(){
		return userService.getAllUsers();
	}

	@PostMapping
	public User saveUser(@RequestBody User user) {
		System.out.println(user);
		return userService.save(user);
	}

	@GetMapping("/{id}")
	public User getUserById(@PathVariable int id) { 
		  return  userService.getUserById(id); 
	}
	
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) {
		System.out.println(user);
		System.out.println("I am logging in usercontrol" + user.getUserName());
		//String username = user.getUserName();
		
		return userService.login(user);
	}
}
