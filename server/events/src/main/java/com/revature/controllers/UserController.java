package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.User;
import com.revature.services.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping
	public User saveFood(@RequestBody User user) {
		return userService.save(user);
	}

	@GetMapping
	public Page<User> getSports(Pageable pageable, @RequestParam(required = false) Integer id,
			@RequestParam(required = false) Integer minimumPlayers) {

		/*if (id != null) {
			return userService.getUsersById(pageable, id);
		} else if (minimumPlayers != null) {
			return userService.getSportsByMinimumPlayersLessThan(pageable, minimumPlayers);
		} else {*/
			return userService.getSports(pageable);
		//}
	}
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
