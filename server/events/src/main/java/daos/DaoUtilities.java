package daos;

import java.sql.SQLException;

import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.cfg.Configuration;
//import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;

import models.Band;
import models.Event;
import models.Song;
import models.Tour;
import models.User;
import models.UserRole;


public class DaoUtilities {
	
	// static Logger logger = Logger.getRootLogger();

	private static ServiceRegistry reg = null;
	private static SessionFactory sf = null;
	
	private static UserDaoImpl userDaoImpl;


	public static synchronized UserDao getUserDao() {
		if(userDaoImpl == null) {
			userDaoImpl = new UserDaoImpl();
		}
		return userDaoImpl;
	}

	static synchronized SessionFactory configureHibernate() throws SQLException {
		if (reg == null || sf == null) {
			try {

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


				reg = new StandardServiceRegistryBuilder()
						.applySettings(configuration.getProperties()).build();
				sf = configuration.buildSessionFactory(reg);

			} catch (Exception e) {
				System.out.println("There was an error with the registry configuration.");
				e.printStackTrace();
			}
		}
		return (SessionFactory) reg;
	}
}
