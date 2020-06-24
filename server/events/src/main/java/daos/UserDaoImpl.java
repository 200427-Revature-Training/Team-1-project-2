package daos;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;

import models.User;
import models.UserRole;

public class UserDaoImpl implements UserDao {
	
	SessionFactory sf;
	
	public UserDaoImpl() {
		super();
		sf = DaoUtilities.getSessionFactory();
	}

	@Override
	public List<User> getAllUsers() {
		List<User> users = new ArrayList<User>();

		SessionFactory sf = null;

		try {
			sf = DaoUtilities.configureHibernate();
			Session session = sf.openSession();

			@SuppressWarnings("unchecked")
			Query<User> res = session.createQuery("from User");
			users = (ArrayList<User>) res.list();
			session.close();
		} catch (Exception e) {
			System.out.println("Could not create connection!");
			e.printStackTrace();
		}
		return users;
	}

	@Override
	public List<UserRole> getAllRoles() {
		try {
			sf = DaoUtilities.configureHibernate();
		} catch (Exception e) {
			System.out.println("Could not create connection!");
			e.printStackTrace();
		}
		List<UserRole> roles = new ArrayList<UserRole>();
		try(Session session = sf.openSession()) {
			String hql = "FROM UserRole";
			Query<UserRole> query = session.createQuery(hql, UserRole.class);
			roles = query.getResultList();
			return roles;
		} 
	}

	@Override
	public void saveUser(User userToSave) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public void patchUser(User userToPatch) throws Exception {
		// TODO Auto-generated method stub

	}
}
