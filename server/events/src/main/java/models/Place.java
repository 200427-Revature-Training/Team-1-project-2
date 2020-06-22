package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "places")
public class Place {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "zip_code")
	private int zipCode;
	private String state;
	private String city;
	
	@Column(name = "street_address")
	private String streetAddress;
	
	public Place(int id, int zipCode, String state, String city, String streetAddress) {
		super();
		this.id = id;
		this.zipCode = zipCode;
		this.state = state;
		this.city = city;
		this.streetAddress = streetAddress;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getZipCode() {
		return zipCode;
	}

	public void setZipCode(int zipCode) {
		this.zipCode = zipCode;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getStreetAddress() {
		return streetAddress;
	}

	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}

	@Override
	public String toString() {
		return "Place [id=" + id + ", zipCode=" + zipCode + ", state=" + state + ", city=" + city + ", streetAddress="
				+ streetAddress + "]";
	}
}
