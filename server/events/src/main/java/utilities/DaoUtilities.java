package utilities;

import java.sql.SQLException;

import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.service.ServiceRegistry;

import daos.UserDao;
import daos.UserDaoImpl;

import org.hibernate.cfg.Configuration;
import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;

import models.Band;
import models.Event;
import models.Place;
import models.Song;
import models.User;
import models.UserRole;


public class DaoUtilities {
	
	static Logger logger = Logger.getRootLogger();

	private static ServiceRegistry reg;
	private SessionFactory sf;
	
	private static UserDaoImpl userDaoImpl;
	
	public SessionFactory getSessionFactory() {
		return sf;
	}


	public static synchronized UserDao getUserDao() {
		if(userDaoImpl == null) {
			userDaoImpl = new UserDaoImpl();
		}
		return userDaoImpl;
	}

	public SessionFactory configureHibernate() throws SQLException {
		if (reg == null || sf == null) {
			try {
				sf = this.getSessionFactory();
				// String jdbcUrl = String.format("jdbc:postgresql://%s:5432/postgres",System.getenv("TEAM1_DB_URL"));

				String jdbcUrl = String.format("jdbc:postgresql://%s:5432/yukajuco",System.getenv("YUKAJUCO_URL"));
				
				Configuration configuration = new Configuration()
						.configure()
						//.setProperty("hibernate.connection.username", System.getenv("TEAM1_DB_ROLE"))
						.setProperty("hibernate.connection.url", jdbcUrl)
						// change "" to system env variable
						//.setProperty("hibernate.connection.password", System.getenv("TEAM1_DB_PASS"))
						.setProperty("hibernate.connection.username", System.getenv("YUKAJUCO_U"))
						.setProperty("hibernate.connection.password", System.getenv("YUKAJUCO_P"))
						.addAnnotatedClass(User.class)
						.addAnnotatedClass(Band.class)
						.addAnnotatedClass(Event.class)
						.addAnnotatedClass(Place.class)
						.addAnnotatedClass(Song.class)
						.addAnnotatedClass(UserRole.class);

				reg = new StandardServiceRegistryBuilder()
						.applySettings(configuration.getProperties()).build();
				sf = configuration.buildSessionFactory(reg);
			} catch (Exception e) {
				System.out.println("There was an error with the registry configuration.");
				e.printStackTrace();
			}
		}
		return sf;
	}
}