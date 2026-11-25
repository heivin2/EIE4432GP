/*
Student ID: 26015839D
Student Name: Chui Chun Hei
*/

DROP DATABASE IF EXISTS labdb;
CREATE DATABASE labdb;
USE labdb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  role VARCHAR(20) NOT NULL,
  enabled BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE concert(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  date DATE NOT NULL,
  location VARCHAR(100) NOT NULL,
  image_url VARCHAR(255),
  expired BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, password, role, enabled)
VALUES
  ('root', 'root1234', 'admin', TRUE),
  ('alice', 'alice1234', 'student', TRUE),
  ('bob', 'bob1234', 'student', FALSE);
INSERT INTO users (username, password, role, enabled)
VALUES ('26015839D_ChuiChunHei', '26015839D', 'student', TRUE);

INSERT INTO concert (name, date, location, image_url, expired)
VALUES
  ('The BIG WHOP OP', '2027-01-12', 'Hong Kong Coliseum', 'static\assets\Concert1.webp', FALSE),
  ('311', '2027-01-17', 'Hong Kong Coliseum', 'static\assets\Concert2.jpg', FALSE),
  ('The BIG WHOP OP', '2027-01-14', 'Hong Kong Coliseum', 'static\assets\Concert3.png', FALSE),
  ('The BIG WHOP OP', '2027-01-15', 'Hong Kong Coliseum', 'static\assets\concert4.jpg', FALSE);

SELECT * FROM users;
