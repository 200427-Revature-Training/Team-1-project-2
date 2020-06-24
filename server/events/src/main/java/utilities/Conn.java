package utilities;

import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

import models.Band;
import models.Event;
import models.Song;
import models.Tour;
import models.User;
import models.UserRole;

public class Conn {
	/*
	private static SessionFactory sf;

	// private static CaveDao caveDao;
	// private static BearDao bearDao;

	public static SessionFactory getSessionFactory() {
		return sf;
	}
	
	*/

	static Logger logger = Logger.getRootLogger();
	
	protected SessionFactory configureHibernate() {
		// Create jdbc url from database URL
		String jdbcUrl = String.format("jdbc:postgresql://%s:5432/postgres", 
				System.getenv("TEAM1_DB_URL"));

		// Create configuration instance
		Configuration configuration = new Configuration()
				.configure()
				.setProperty("hibernate.connection.username", System.getenv("TEAM1_DB_ROLE"))
				.setProperty("hibernate.connection.url", jdbcUrl)
				.setProperty("hibernate.connection.password", System.getenv("TEAM1_DB_PASS"))
				.addAnnotatedClass(User.class)
				.addAnnotatedClass(UserRole.class)
				.addAnnotatedClass(Event.class)
				.addAnnotatedClass(Song.class)
				.addAnnotatedClass(Tour.class)
				.addAnnotatedClass(Band.class);

		// Use configuration to create serviceRegistry
		ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
				.applySettings(configuration.getProperties()).build();

		// Use configuration to create sessionFactory, passing in serviceRegistry
		SessionFactory sessionFactory = configuration.buildSessionFactory(serviceRegistry);
		return sessionFactory;
	}

}
