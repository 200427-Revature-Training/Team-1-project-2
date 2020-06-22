package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import javax.persistence.Column;

import org.hibernate.annotations.Check;

@Entity
@Table(name = "bands")
@Check(constraints = "char_length(location) > 0")
public class Band {
	
	@Id
	@GeneratedValue
	private int id;
	private String name;
	
	@Column(name = "picture_url")
	private String picture;
	private String genre;
	
	@JoinColumn(name = "id")
	@Column(name = "featured_song_id")
	private int featuredSongId;
	
	public Band(int id, String name, String picture, String genre, int featuredSongId) {
		super();
		this.id = id;
		this.name = name;
		
		
		this.picture = picture;
		this.genre = genre;
		
		
		this.featuredSongId = featuredSongId;
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

	//public Song getFeaturedSongId() {
	//	return featuredSongId;
	//}

	public void setFeaturedSongId(int featuredSongId) {
		this.featuredSongId = featuredSongId;
	}

	@Override
	public String toString() {
		return "Band [id=" + id + ", name=" + name + ", picture=" + picture + ", genre=" + genre + ", featuredSongId="
				+ featuredSongId + "]";
	}
}
