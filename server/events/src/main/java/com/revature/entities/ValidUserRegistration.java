package com.revature.entities;

import com.revature.test.ValidUserValidator;

import java.lang.annotation.Documented;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.lang.annotation.ElementType;

import javax.validation.Constraint;
import javax.validation.Payload;

@Constraint(validatedBy = ValidUserValidator.class)
@Retention(RetentionPolicy.RUNTIME)
@Target({ ElementType.METHOD, ElementType.CONSTRUCTOR })
@Documented
public @interface ValidUserRegistration {
	String message() default "End date must be after begin date "
			+ "and both must be in the future, room number must be bigger than 0";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};

}
