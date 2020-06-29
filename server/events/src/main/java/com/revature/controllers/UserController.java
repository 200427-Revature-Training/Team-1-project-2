package com.revature.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.User;
import com.revature.services.UserService;


@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	UserService userService;
	
	@GetMapping
	public Collection<User> getAllUsers(){
		return userService.getAllUsers();
	}

	@PostMapping
	public User saveUser(@RequestBody User user) {
		return userService.save(user);
	}


	  @GetMapping("/{id}") public User getUserById(@PathVariable int id) { 
		  return  userService.getUserById(id);
	}
	 
	//@GetMapping
	//public Page<User> getSports(Pageable pageable, @RequestParam(required = false) Integer id,
	//		@RequestParam(required = false) Integer minimumPlayers) {

/*
	@GetMapping
	public Page<User> getSports(Pageable pageable, @RequestParam(required = false) Integer id,
			@RequestParam(required = false) Integer minimumPlayers) {

		/*if (id != null) {
			return userService.getUsersById(pageable, id);
		} else if (minimumPlayers != null) {
			return userService.getSportsByMinimumPlayersLessThan(pageable, minimumPlayers);

		} else {*/
	//		return userService.getSports(pageable);
	//	} else {
		//	return userService.getSports(pageable);
		//}
	//}

	/*
	 * // GET food by ID
	 * 
	 * @GetMapping("/{id}") public User getUserById(@PathVariable int id) { return
	 * userService.getUserById(id); }
	 * 
	 * @GetMapping("") public List<User> getAllUsers() { return
	 * userService.getAllUsers(); }
	 */
}
