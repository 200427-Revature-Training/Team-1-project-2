package com.revature.repositories;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.revature.entities.UserRole;

public interface UserRoleRepository extends JpaRepository<UserRole, Integer>  {

	@Query("FROM UserRole ur WHERE :id = ur.id")
	Page<UserRole> getUserRoleById(Pageable pageable, int id);
}
