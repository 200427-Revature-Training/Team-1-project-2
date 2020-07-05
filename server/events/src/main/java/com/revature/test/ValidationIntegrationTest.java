package com.revature.test;




import static org.junit.Assert.assertEquals;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.junit.Before;
import org.junit.Test;

import com.revature.entities.User;


public class ValidationIntegrationTest {
	private Validator validator;

    @Before
    public void setup() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        validator = factory.getValidator();
    }
    
    private User createUser() {
        User user = new User();
        user.setFirstName("test2");
        user.setUserName("test2");
        user.setEmail("test2@email.com");
        user.setPassword("password");
        return user;
    }
    
    @Test
    public void givenBlankFirstName_firstNameValidationFails() {
        User user = createUser();
        user.setFirstName(" ");
        Set<ConstraintViolation<User>> violations = validator.validate(user);
        assertEquals(1, violations.size());
    }
    
    @Test
    public void givenBlankUserName_userNameValidationFails() {
        User user = createUser();
        user.setUserName(" ");;
        Set<ConstraintViolation<User>> violations = validator.validate(user);
        assertEquals(1, violations.size());
    }
    
    @Test
    public void givenBlankPassword_passwordValidationFails() {
        User user = createUser();
        user.setPassword(" ");;
        Set<ConstraintViolation<User>> violations = validator.validate(user);
        assertEquals(1, violations.size());
    }
    
    @Test
    public void givenInvalidEmail_thenValidationFails() {
        User user = createUser();
        user.setEmail("john");
        
        Set<ConstraintViolation<User>> violations = validator.validate(user);
        assertEquals(1, violations.size());
    }

}
