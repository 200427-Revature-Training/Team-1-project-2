
--- ####################################################
--- ####     #######   DROP ALL TABLES #################
/*
DROP TABLE IF EXISTS events.users cascade;
DROP TABLE IF EXISTS events.user_roles cascade;
DROP TABLE IF EXISTS events.songs cascade;
DROP TABLE IF EXISTS events.events cascade;
DROP TABLE IF EXISTS events.bands cascade;
DROP TABLE IF EXISTS events.band_event cascade;
*/

/* ####################################################
 * ###################  CREATE TABLES #################
 */
CREATE TABLE events.songs (
	id serial NOT NULL,
	title varchar(50) NULL,
	url varchar(255) NULL,
	CONSTRAINT songs_pkey PRIMARY KEY (id)
);

CREATE TABLE events.user_roles (
	id serial NOT NULL,
	role varchar(50) NULL,
	CONSTRAINT user_roles_pk PRIMARY KEY (id)
);

CREATE TABLE events.places (
	id serial NOT NULL,
	zip_code int4 NULL,
	state varchar(30) NULL,
	city varchar(50) NULL,
	street_address varchar(100) NULL,
	CONSTRAINT places_pkey PRIMARY KEY (id)
);

CREATE TABLE events.bands (
	id serial NOT NULL,
	name varchar(50) NULL,
	picture_url varchar(150) NULL,
	genre varchar(30) NULL,
	featured_song_id int4 NULL,
	CONSTRAINT bands_pkey PRIMARY KEY (id),
	FOREIGN KEY (featured_song_id) REFERENCES events.songs(id)
);

CREATE TABLE events.events (
	id serial NOT NULL,
	name varchar(50) NULL,
	date timestamp NULL,
	picture_url varchar(255) NULL,
	description varchar(255) NULL,
	place_id int4 NULL,
	CONSTRAINT events_pkey PRIMARY KEY (id),
	FOREIGN KEY (place_id) REFERENCES events.places(id)
);

CREATE TABLE events.band_event (
	band_id int4 NOT NULL,
	event_id int4 NOT NULL,
	CONSTRAINT band_event_pkey PRIMARY KEY (band_id, event_id),
	FOREIGN KEY (band_id) REFERENCES events.bands(id),
	FOREIGN KEY (event_id) REFERENCES events.events(id)
);

CREATE TABLE events.users (
	id serial NOT NULL,
	first_name varchar(50) NULL,
	last_name varchar(50) NULL,
	email varchar(50) NULL,
	username varchar(50) NULL,
	password varchar(150) NULL,
	picture_url varchar(255) NULL,
	bio varchar(255) NULL,
	role_id int4 NULL,
	band_id int4 NULL,
	favorite_song_id int4 NULL,
	place_id int4 NULL,
	CONSTRAINT users_pkey PRIMARY KEY (id),
	FOREIGN KEY (role_id) REFERENCES events.user_roles(id),
	FOREIGN KEY (favorite_song_id) REFERENCES events.songs(id),
	FOREIGN KEY (band_id) REFERENCES events.bands(id),
	FOREIGN KEY (place_id) REFERENCES events.places(id)
);



/* ######################################################
 * ######### QUERY AND DUMMY DATA
 */
SELECT * FROM users u 
SELECT * FROM user_roles ur 

/* #######################################################
 * ############   ROLES & PERMISSIONS
 */
/** Creating roles */
/*

CREATE ROLE role_variable LOGIN PASSWORD '';

GRANT SELECT, UPDATE, INSERT ON ALL TABLES IN SCHEMA events TO role_variable;

GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA events TO role_variable;

*/