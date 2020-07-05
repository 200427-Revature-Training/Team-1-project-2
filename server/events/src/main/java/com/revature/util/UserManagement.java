package com.revature.util;

import javax.validation.Valid;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.springframework.validation.annotation.Validated;

@Validated
public class UserManagement {
	
	public void createNewUser(@NotBlank String firstName,
								@NotBlank String userName,
								@NotBlank @Email String email,
								@NotBlank String password) {
		
		
	}

}
