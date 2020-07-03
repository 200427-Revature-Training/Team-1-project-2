package com.revature.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name = "user_event", schema = "events")
@IdClass(User_Event_ID.class)
public class User_Event {
	@Id
	@Column(name = "user_id")
	private int userID;

	@Id
	@Column(name = "event_id")
	private int eventID;

	public User_Event() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User_Event(int userID, int eventID) {
		super();
		this.userID = userID;
		this.eventID = eventID;
	}

	@Override
	public String toString() {
		return "User_Event_Input [userID=" + userID + ", eventID=" + eventID + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + eventID;
		result = prime * result + userID;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User_Event other = (User_Event) obj;
		if (eventID != other.eventID)
			return false;
		if (userID != other.userID)
			return false;
		return true;
	}

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public int getEventID() {
		return eventID;
	}

	public void setEventID(int eventID) {
		this.eventID = eventID;
	}
}