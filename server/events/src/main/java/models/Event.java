package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Event {
	
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private String date;
	private String description;
	private byte image;
	private String locationName;
	private String locationCoords;
	
	public Event(int id, String name, String date, String description, byte image, String locationName,
			String locationCoords) {
		super();
		this.id = id;
		this.name = name;
		this.date = date;
		this.description = description;
		this.image = image;
		this.locationName = locationName;
		this.locationCoords = locationCoords;
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
	
	public String getDate() {
		return date;
	}
	
	public void setDate(String date) {
		this.date = date;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public byte getImage() {
		return image;
	}
	
	public void setImage(byte image) {
		this.image = image;
	}
	
	public String getLocationName() {
		return locationName;
	}
	
	public void setLocationName(String locationName) {
		this.locationName = locationName;
	}
	
	public String getLocationCoords() {
		return locationCoords;
	}
	
	public void setLocationCoords(String locationCoords) {
		this.locationCoords = locationCoords;
	}
	
	@Override
	public String toString() {
		return "Event [id=" + id + ", name=" + name + ", date=" + date + ", description=" + description + ", image="
				+ image + ", locationName=" + locationName + ", locationCoords=" + locationCoords + "]";
	}
	

}
