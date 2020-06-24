package daos;

import java.sql.SQLException;

import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.cfg.Configuration;
//import org.apache.log4j.Logger;
import org.hibernate.SessionFactory;

import models.Band;
import models.Event;
import models.Place;
import models.Song;
import models.User;
import models.UserRole;


public class DaoUtilities {
	
	// static Logger logger = Logger.getRootLogger();

	private static ServiceRegistry reg;
	private static SessionFactory sf;
	
	private static UserDaoImpl userDaoImpl;
	
	public static SessionFactory getSessionFactory() {
		return sf;
	}


	public static synchronized UserDao getUserDao() {
		if(userDaoImpl == null) {
			userDaoImpl = new UserDaoImpl();
		}
		return userDaoImpl;
	}

	static SessionFactory configureHibernate() throws SQLException {
		if (reg == null || sf == null) {
			try {
				System.out.println("inside try catch");
				// Change the DB name from yukajuco to postgres
				String jdbcUrl = String.format("jdbc:postgresql://%s:5432/yukajuco",
						"localhost");

				System.out.println(jdbcUrl);
				System.out.println(reg);
				System.out.println(sf);
				// Create configuration instance
				Configuration configuration = new Configuration()
						.configure()
						// change postgres to system env variable
						.setProperty("hibernate.connection.username", "postgres")
						.setProperty("hibernate.connection.url", jdbcUrl)
						// change "" to system env variable
						.setProperty("hibernate.connection.password", "")
						.addAnnotatedClass(User.class)
						.addAnnotatedClass(Band.class)
						.addAnnotatedClass(Event.class)
						.addAnnotatedClass(Place.class)
						.addAnnotatedClass(Song.class)
						.addAnnotatedClass(UserRole.class);


				reg = new StandardServiceRegistryBuilder()
						.applySettings(configuration.getProperties()).build();
				System.out.println("REGISTRY!!!!!!!!!!!!!!!!!!!!");
				System.out.println(reg);
				sf = configuration.buildSessionFactory(reg);
				System.out.println("SESSION FACTORY!!!!!!!!!!!!!!!!!!!!");
				System.out.println(sf);
				return sf;
			} catch (Exception e) {
				System.out.println("There was an error with the registry configuration.");
				e.printStackTrace();
			}
		}
		return sf;
	}
}
