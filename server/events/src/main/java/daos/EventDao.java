package daos;

import java.util.List;

import models.Event;


public interface EventDao {
	public List<Event> getAllEvents();
	
	void saveEvent(Event event) throws Exception;
	void patchEvent(Event event) throws Exception;
}
