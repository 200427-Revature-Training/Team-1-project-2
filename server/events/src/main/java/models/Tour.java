package models;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Tour {
	@Id
	@GeneratedValue
	private int id;
	private String name;
	@ManyToOne
	private Band band;
	private Date date;
	
	public Tour(int id, String name, Band band, Date date) {
		super();
		this.id = id;
		this.name = name;
		this.band = band;
		this.date = date;
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

	public Band getBand() {
		return band;
	}

	public void setBand(Band band) {
		this.band = band;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Tour [id=" + id + ", name=" + name + ", band=" + band + ", date=" + date + "]";
	}
	
	

}
