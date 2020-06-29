package com.revature.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import com.revature.entities.Band;
import com.revature.repositories.BandRepository;

@Service
public class BandService {
	@Autowired
	BandRepository bandRepository;
	
	public Collection<Band> getAllBands(){
		return bandRepository.findAll();
	}
	
	public Band save(Band band) {
		return bandRepository.save(band);
	}

	public Band getBandById(int id) {
		return bandRepository.findById(id)
				.orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
	}
	
	

}
