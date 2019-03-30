
DROP DATABASE IF EXISTS grass_is_greener_db;
CREATE DATABASE grass_is_greener_db;
USE grass_is_greener_db;

CREATE TABLE question(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
tag VARCHAR(25) NOT NULL,
category ENUM('activities', 'aesthetics', 'social'),
PRIMARY KEY (id)
);

CREATE TABLE answers(
id INTEGER(11) AUTO_INCREMENT NOT NULL,

user_name VARCHAR(15) NOT NULL,
zip_code VARCHAR(5) NOT NULL,
person_type ENUM('resident', 'visitor'),
answer BOOLEAN DEFAULT FALSE,
questionId INTEGER(11),
createdAt DATETIME, 
updatedAt DATETIME,
PRIMARY KEY (id)
);