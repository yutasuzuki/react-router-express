CREATE DATABASE palette_db;
USE palette_db;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  mail VARCHAR(50),
  password VARCHAR(20),
  token VARCHAR(50),
  device VARCHAR(20),
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE user_point (
  id INTEGER NOT NULL AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  company_id INTEGER NOT NULL,
  point INTEGER NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE companies (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(64) NOT NULL,
  mail VARCHAR(64),
  password VARCHAR(32),
  zipcode VARCHAR(8),
  address VARCHAR(64),
  tel varchar(32),
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME,
  PRIMARY KEY(id)
);
