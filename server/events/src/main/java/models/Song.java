package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "songs")
public class Song {
	@Id
	@GeneratedValue
	private int id;
	private String title;
	private String url;
	
	public Song(int id, String title, String url) {
		super();
		this.id = id;
		this.title = title;
		this.url = url;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public String toString() {
		return "Song [id=" + id + ", title=" + title + ", url=" + url + "]";
	}
}
