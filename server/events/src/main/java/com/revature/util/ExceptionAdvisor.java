package com.revature.util;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;


@ControllerAdvice
@Component
public class ExceptionAdvisor implements InitializingBean {
	
	@ExceptionHandler(HttpClientErrorException.class)
	public ResponseEntity<String> httpExceptionHandler(HttpClientErrorException e) {
		return ResponseEntity
				.status(e.getStatusCode())
				.body(e.getMessage());
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		System.out.println("ExceptionAdvisor configured");
	}

}
