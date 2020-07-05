package com.revature.test;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.revature.entities.User;
import com.revature.entities.ValidUserRegistration;

public class ValidUserValidator implements ConstraintValidator<ValidUserRegistration, User> {

	@Override
	public boolean isValid(User user, ConstraintValidatorContext context) {
		
		if(user == null ) {
			return true;
		}
		
		if(!(user instanceof User) ) {
			throw new IllegalArgumentException("Illegal method signature, "
					+"expected parameter of type User.");
		}
		
		if(user.getUserName()==null
				|| user.getFirstName()==null
				|| user.getEmail()==null
				|| user.getPassword()==null) {
			return false;
		}
		
		if(user.getUserName()==" "
				|| user.getFirstName()==" "
				|| user.getEmail()==" "
				|| user.getPassword()==" ") {
			return false;
		}
		
		return (user.getFirstName().length()>0
				&& user.getUserName().length()>0
				&& user.getEmail().length()>0
				&& user.getPassword().length()>0);

	}
}

