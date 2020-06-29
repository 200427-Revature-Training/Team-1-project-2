package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.revature.entities.UserRole;
import com.revature.repositories.UserRoleRepository;

@Service
public class UserRoleService {
	@Autowired
	UserRoleRepository userRoleRepository;
	
	public UserRole save(UserRole userRole) {
		return userRoleRepository.save(userRole);
	}
	
	public List<UserRole> getAllUserRoles(Integer pageNo, String sortKey)
	{
		int noOfRecords = 20;
		Pageable page = PageRequest.of(pageNo, noOfRecords, Sort.by(sortKey));
		Page<UserRole> pagedResult = userRoleRepository.findAll(page);
		return pagedResult.getContent();
	}

}
