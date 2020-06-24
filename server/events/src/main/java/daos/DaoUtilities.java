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

	private static ServiceRegistry reg = null;
	private static SessionFactory sf = null;
	
	private static UserDaoImpl userDaoImpl;


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
				

				//System.out.println(jdbcUrl);
				System.out.println(reg);
				System.out.println(sf);
				// Create configuration instance
				Configuration configuration = new Configuration()
						.configure()
						.setProperty("hibernate.connection.username", "postgres")
						.setProperty("hibernate.connection.url", "localhost")
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
