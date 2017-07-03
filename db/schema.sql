CREATE DATABASE if not exists burgers_db;

USE burgers_db;

CREATE TABLE if not exists burgers (
	id INT(10) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN,
    date TIMESTAMP,
	PRIMARY KEY (id)    
);