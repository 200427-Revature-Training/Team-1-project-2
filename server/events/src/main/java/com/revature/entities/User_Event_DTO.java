package com.revature.entities;

import java.sql.Date;

public class User_Event_DTO {


		private int userID;

		private int event_id;
		private int id;
		private String name;
		private Date date;
		private String picture_url;
		private String description;
		private String featured_song;
		private String bands;
		public User_Event_DTO() {
			super();
			// TODO Auto-generated constructor stub
		}
		public User_Event_DTO(int userID, int event_id, int id, String name, Date date, String picture_url,
				String description, String featured_song, String bands) {
			super();
			this.userID = userID;
			this.event_id = event_id;
			this.id = id;
			this.name = name;
			this.date = date;
			this.picture_url = picture_url;
			this.description = description;
			this.featured_song = featured_song;
			this.bands = bands;
		}
		@Override
		public String toString() {
			return "User_Event_DTO [userID=" + userID + ", event_id=" + event_id + ", id=" + id + ", name=" + name
					+ ", date=" + date + ", picture_url=" + picture_url + ", description=" + description
					+ ", featured_song=" + featured_song + ", bands=" + bands + "]";
		}
		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((bands == null) ? 0 : bands.hashCode());
			result = prime * result + ((date == null) ? 0 : date.hashCode());
			result = prime * result + ((description == null) ? 0 : description.hashCode());
			result = prime * result + event_id;
			result = prime * result + ((featured_song == null) ? 0 : featured_song.hashCode());
			result = prime * result + id;
			result = prime * result + ((name == null) ? 0 : name.hashCode());
			result = prime * result + ((picture_url == null) ? 0 : picture_url.hashCode());
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
			User_Event_DTO other = (User_Event_DTO) obj;
			if (bands == null) {
				if (other.bands != null)
					return false;
			} else if (!bands.equals(other.bands))
				return false;
			if (date == null) {
				if (other.date != null)
					return false;
			} else if (!date.equals(other.date))
				return false;
			if (description == null) {
				if (other.description != null)
					return false;
			} else if (!description.equals(other.description))
				return false;
			if (event_id != other.event_id)
				return false;
			if (featured_song == null) {
				if (other.featured_song != null)
					return false;
			} else if (!featured_song.equals(other.featured_song))
				return false;
			if (id != other.id)
				return false;
			if (name == null) {
				if (other.name != null)
					return false;
			} else if (!name.equals(other.name))
				return false;
			if (picture_url == null) {
				if (other.picture_url != null)
					return false;
			} else if (!picture_url.equals(other.picture_url))
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
		public int getEvent_id() {
			return event_id;
		}
		public void setEvent_id(int event_id) {
			this.event_id = event_id;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public Date getDate() {
			return date;
		}
		public void setDate(Date date) {
			this.date = date;
		}
		public String getPicture_url() {
			return picture_url;
		}
		public void setPicture_url(String picture_url) {
			this.picture_url = picture_url;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getFeatured_song() {
			return featured_song;
		}
		public void setFeatured_song(String featured_song) {
			this.featured_song = featured_song;
		}
		public String getBands() {
			return bands;
		}
		public void setBands(String bands) {
			this.bands = bands;
		}
		
		

		
	
}
