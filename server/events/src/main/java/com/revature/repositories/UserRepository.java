package com.revature.repositories;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.revature.entities.User;


@Repository
public interface UserRepository extends JpaRepository<User, Integer>  {
	
	@Query("FROM User u WHERE :id = u.id")
	Page<User> getUserById(Pageable pageable, int id);
	
	
	/*
	@Autowired
	EntityManager em;
	
	public List<User> getAllUsers() {
		Session session = (Session) em.createQuery("from User", User.class).getResultList();
		return (List<User>) session;
	}
	
	@Transactional(propagation = Propagation.REQUIRED)
	public User save(User user) {
		Session session = em.unwrap(Session.class);
		session.save(user);
		return user;
	}
	
	public Optional<User> getUserById(int id) {
		Session session = em.unwrap(Session.class);
		User user = session.get(User.class, id);
		return Optional.ofNullable(user);
	}*/

}
