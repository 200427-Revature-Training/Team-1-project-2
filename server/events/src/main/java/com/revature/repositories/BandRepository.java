package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.entities.Band;

@Repository
public interface BandRepository extends JpaRepository<Band, Integer> {

	@Query("FROM Band b WHERE :id = b.id")
	Band getBandById(int id);
	
}
