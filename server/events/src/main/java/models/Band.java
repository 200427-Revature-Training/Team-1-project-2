package models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Column;


@Entity
@Table(name = "bands")
public class Band {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	
	@Column(name = "picture_url")
	private String picture;
	private String genre;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "favorite_song_id")
	private Song song;

	public Band(int id, String name, String picture, String genre, Song song) {
		super();
		this.id = id;
		this.name = name;
		this.picture = picture;
		this.genre = genre;
		this.song = song;
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

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public Song getSong() {
		return song;
	}

	public void setSong(Song song) {
		this.song = song;
	}

	@Override
	public String toString() {
		return "Band [id=" + id + ", name=" + name + ", picture=" + picture + ", genre=" + genre + ", song=" + song
				+ "]";
	}	
}
