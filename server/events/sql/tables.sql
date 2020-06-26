
--- ####################################################
--- ####     #######   DROP ALL TABLES #################
/*
DROP TABLE IF EXISTS events.users cascade;
DROP TABLE IF EXISTS events.user_roles cascade;
DROP TABLE IF EXISTS events.songs cascade;
DROP TABLE IF EXISTS events.events cascade;
DROP TABLE IF EXISTS events.bands cascade;
DROP TABLE IF EXISTS events.band_event cascade;
DROP TABLE IF EXISTS events.genres cascade;
DROP TABLE IF EXISTS events.places cascade;
*/

/* ####################################################
 * ###################  CREATE TABLES #################
 */

CREATE TABLE events.genres (
	id serial NOT NULL,
	genre varchar(30) NULL,
	CONSTRAINT genres_pkey PRIMARY KEY (id)
);

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
	picture_url varchar(500) NULL,
	genre_id int4 NULL,
	featured_song varchar(500) NULL,
	CONSTRAINT bands_pkey PRIMARY KEY (id),
	FOREIGN KEY (genre_id) REFERENCES events.genres(id)
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
	favorite_song varchar(500) NULL,
	place_id int4 NULL,
	CONSTRAINT users_pkey PRIMARY KEY (id),
	FOREIGN KEY (role_id) REFERENCES events.user_roles(id),
	FOREIGN KEY (band_id) REFERENCES events.bands(id),
	FOREIGN KEY (place_id) REFERENCES events.places(id)
);



/* ######################################################
 * ######### QUERIES
 */
SELECT * FROM events.users u 
SELECT * FROM events.user_roles ur 


/* ######################################################
 * ######### DUMMY DATA
 * ######################################################
 */
INSERT INTO events.user_roles ("role") VALUES 
('fan')
,('band member')
,('manager')
,('admin')
;

INSERT INTO events.genres (genre) VALUES 
('Blues')
,('Jazz')
,('Rhythm and Blues')
,('Rock and Roll')
,('Country')
,('Rock')
,('Soul Music')
,('Dance Music')
,('Pop Music')
,('Children''s Music')
;

INSERT INTO events.songs (title,url) VALUES 
('Hotto Dogu song ft. Google Translate','https://www.youtube.com/watch?v=9mD-ZmWuFTQ')
,('I''m a Little Teapot','https://www.youtube.com/watch?v=B6en-O5yF0o')
,('i want it that way','https://www.youtube.com/watch?v=4fndeDfaWCg')
,('Bye Bye Bye','https://www.youtube.com/watch?v=Eo-KmOd3i7s&list=PL2SZp0S34HEJcLxaLkLhLkIEikLzyfVrN&index=1')
;

INSERT INTO events.places (zip_code,state,city,street_address) VALUES 
('83440','ID','Rexburg','248 South 3rd West')
,('33602','FL','Tampa','401 Channelside Dr')
;

INSERT INTO events.events ("name","date",picture_url,description,place_id) VALUES 
('Kid''s Concert','2020-07-10 18:00:00.000','https://i1.wp.com/nafme.org/wp-content/files/2014/12/kids-concert.jpg?ssl=1','Join Dinnerware and other musical groups as we celebrate kids around the world!',2)
;

INSERT INTO events.bands ("name",picture_url,genre_id) VALUES 
('Dinnerware','https://images.crateandbarrel.com/is/image/Crate/BreeTeapotSHF15/?$web_product_hero$&190411134841&wid=625&hei=625',9)
,('Backstreet Boys','https://backstreetboys.com/cdn-cgi/image/width=600,quality=75/https://static.wonderfulunion.net/groundctrl/clients/backstreetboys/media/03/11/images/assets/original.xM4tlqOUONL6xs_cS38uy1YTXjy7LAPuv0Fig03ZeNE.png',10)
,('Nsync','https://s1.r29static.com/bin/entry/17f/x,80/1946653/image.jpg',10)
;

INSERT INTO events.users (first_name,last_name,email,username,"password",picture_url,bio,role_id,band_id,favorite_song,place_id) VALUES 
('Ken','Renelt','ken@gmail.com','kRenelt','password','https://avatars2.githubusercontent.com/u/43582922?s=120&v=4','My name is Ken.',3,3,'',NULL)
,('Ryan','Clayton','ryan@gmail.com','Rclayton999','password','https://avatars2.githubusercontent.com/u/64425715?s=120&v=4','My name is Ryan.',4,NULL,'',NULL)
,('Milton','Reyes','Milton@gmail.com','milton-reyes','password','https://avatars3.githubusercontent.com/u/64162564?s=120&v=4','Mi nombre es Milton.',3,1,'',NULL)
,('Jordon','Hill','Hallstead2@gmail.com','Hallstead','password','https://avatars2.githubusercontent.com/u/38665384?s=460&v=4','I like hotdogs.',1,NULL,'',1)
,('Jackson','Hopkins','Jackson@gmail.com','mechawing','password','https://avatars2.githubusercontent.com/u/60560661?s=60&v=4','My name is Jackson.',2,1,'',NULL)
;

INSERT INTO events.band_event (band_id,event_id) VALUES 
(1,1)
,(2,1)
;
/* #######################################################
 * ############   ROLES & PERMISSIONS
 */
/** Creating roles */
/*

CREATE ROLE team1_events_admin LOGIN PASSWORD '';

GRANT SELECT, UPDATE, INSERT ON ALL TABLES IN SCHEMA events TO team1_events_admin;

GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA events TO team1_events_admin;

*/