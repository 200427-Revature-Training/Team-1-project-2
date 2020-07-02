package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.UserRole;
import com.revature.services.UserRoleService;

@RestController
@RequestMapping("/roles")
public class UserRoleController {
	
	@Autowired
	UserRoleService userRoleService;
	
	@GetMapping
	public List<UserRole> getAllUserRoles(@RequestParam(value="pageNo", defaultValue="0") Integer pageNo,
			@RequestParam(value="sortKey", defaultValue="role") String sortKey)
	{
		return userRoleService.getAllUserRoles(pageNo, sortKey);
	}

	@PostMapping
	public UserRole saveUserRole(@RequestBody UserRole userRole) {
		return userRoleService.save(userRole);
	}

}
