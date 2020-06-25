/*package utilities;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.PersistenceException;


import org.hibernate.SessionFactory;

import daos.UserDao;
import daos.UserDaoImpl;
//import models.User;
import models.UserRole;

public class Launcher {
	
	//private static SessionFactory sf;

	//public static SessionFactory getSessionFactory() {
	//	return sf;
	//}
	

	
	public static void main(String[] args) throws SQLException {
		
		
		
		//List<User> users = new ArrayList<User>();
		List<UserRole> roles = new ArrayList<UserRole>();
		

		try {
			UserDao userDao = DaoUtilities.getUserDao();
			// UserDao userDao = new UserDaoImpl();
			// users = userDao.getAllUsers();
			roles = userDao.getAllRoles();
			
			for (UserRole ur : roles) {
				System.out.println(ur);
			}
			

			// runQueryDemo();
		} catch(PersistenceException e) {
			e.printStackTrace();
		}
	}
}*/
