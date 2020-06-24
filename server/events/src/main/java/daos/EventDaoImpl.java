package daos;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;

import models.Event;

public class EventDaoImpl implements EventDao {

	SessionFactory sf;
	
	public EventDaoImpl() {
		super();
		sf = DaoUtilities.getSessionFactory();
	}

	@Override
	public List<Event> getAllEvents() {
		List<Event> events = new ArrayList<Event>();

		SessionFactory sf = null;

		try {
			sf = DaoUtilities.configureHibernate();
			Session session = sf.openSession();

			@SuppressWarnings("unchecked")
			Query<Event> res = session.createQuery("from Event");
			events = (ArrayList<Event>) res.list();
			session.close();
		} catch (Exception e) {
			System.out.println("Could not create connection!");
			e.printStackTrace();
		}
		return events;
	}

	@Override
	public void saveEvent(Event event) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public void patchEvent(Event event) throws Exception {
		// TODO Auto-generated method stub

	}
}
