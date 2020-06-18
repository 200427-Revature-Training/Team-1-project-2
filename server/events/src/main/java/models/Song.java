package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Song {
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private String album;
	private String band;
	
	protected Song() {
	}

	public Song(int id, String name, String album, String band) {
		super();
		this.id = id;
		this.name = name;
		this.album = album;
		this.band = band;
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

	public String getAlbum() {
		return album;
	}

	public void setAlbum(String album) {
		this.album = album;
	}

	public String getBand() {
		return band;
	}

	public void setBand(String band) {
		this.band = band;
	}

	@Override
	public String toString() {
		return "Song [id=" + id + ", name=" + name + ", album=" + album + ", band=" + band + "]";
	}	

}
