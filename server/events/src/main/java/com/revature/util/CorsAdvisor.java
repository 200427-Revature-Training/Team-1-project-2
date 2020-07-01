package com.revature.util;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;

@ControllerAdvice
@Component
@CrossOrigin(allowedHeaders = {"content-type", "Authorization"})
public class CorsAdvisor {

}