package daos;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;

import models.User;
import models.UserRole;

public class UserDaoImpl implements UserDao {

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
		List<UserRole> roles = new ArrayList<UserRole>();

		SessionFactory sf = null;

		try {
			sf = DaoUtilities.configureHibernate();
			Session session = sf.openSession();

			@SuppressWarnings("unchecked")
			Query<UserRole> res = session.createQuery("from UserRole");
			roles = (ArrayList<UserRole>) res.list();
		} catch (Exception e) {
			System.out.println("Could not create connection!");
			e.printStackTrace();
		}
		return roles;
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
