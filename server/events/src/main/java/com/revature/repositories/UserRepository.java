package com.revature.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.revature.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	@Query("FROM User u WHERE :id = u.id")
	User getUserById(int id);
	
	
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
