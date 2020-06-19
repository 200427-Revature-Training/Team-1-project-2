package utilities;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

import javax.persistence.PersistenceException;

import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;
import org.hibernate.service.ServiceRegistry;

import models.Band;
import models.Event;
import models.Song;
import models.Tour;
import models.User;
import models.UserRole;


public class Launcher {
	private static SessionFactory sf;

	// private static CaveDao caveDao;
	// private static BearDao bearDao;

	public static SessionFactory getSessionFactory() {
		return sf;
	}

	static Logger logger = Logger.getRootLogger();
	
	static SessionFactory configureHibernate() {
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


	public static void main(String[] args) {
		sf = configureHibernate();

		try {
			// runQueryDemo();
		} catch(PersistenceException e) {
			e.printStackTrace();
			sf.close();
		}

	}
}
