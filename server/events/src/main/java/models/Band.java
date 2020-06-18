package models;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Band {
	
	@Id
	@GeneratedValue
	private int id;
	private String name;
	@OneToMany
	private User[] members;
	private byte image;
	@OneToMany
	private Song[] songlist;
	@OneToMany(mappedBy = "band")
	private Tour[] eventlist;
	
	protected Band() {
	}

	public Band(int id, String name, User[] members, byte image, Song[] songlist, Tour[] eventlist) {
		super();
		this.id = id;
		this.name = name;
		this.members = members;
		this.image = image;
		this.songlist = songlist;
		this.eventlist = eventlist;
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

	public User[] getMembers() {
		return members;
	}

	public void setMembers(User[] members) {
		this.members = members;
	}

	public byte getImage() {
		return image;
	}

	public void setImage(byte image) {
		this.image = image;
	}

	public Song[] getSonglist() {
		return songlist;
	}

	public void setSonglist(Song[] songlist) {
		this.songlist = songlist;
	}

	public Tour[] getEventlist() {
		return eventlist;
	}

	public void setEventlist(Tour[] eventlist) {
		this.eventlist = eventlist;
	}

	@Override
	public String toString() {
		return "Band [id=" + id + ", name=" + name + ", members=" + Arrays.toString(members) + ", image=" + image + "]";
	}
	
	
	

}
