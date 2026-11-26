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
  price DECIMAL(10, 2) NOT NULL,
  image_url VARCHAR(255),
  expired BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  gender VARCHAR(6) NOT NULL,
  language VARCHAR(100) NOT NULL
);

INSERT INTO users (username, password, role, enabled)
VALUES
  ('root', 'root1234', 'admin', TRUE),
  ('alice', 'alice1234', 'student', TRUE),
  ('bob', 'bob1234', 'student', FALSE);
INSERT INTO users (username, password, role, enabled)
VALUES ('26015839D_ChuiChunHei', '26015839D', 'student', TRUE);

INSERT INTO concert (name, date, location, price, image_url, expired, gender, language)
VALUES
  ('The BIG WHOP OP', '2027-01-12', 'Hong Kong Coliseum', 50.00, 'assets/Concert1.webp', FALSE, 'Male', 'Chinese'),
  ('311', '2027-01-17', 'Hong Kong Coliseum', 45.00, 'assets/Concert2.jpg', FALSE, 'Female', 'Chinese'),
  ('The BIG WHOP OP', '2027-01-14', 'Hong Kong Coliseum', 55.00, 'assets/Concert3.png', FALSE, 'Male', 'English'),
  ('The BIG WHOP OP', '2027-01-15', 'Hong Kong Coliseum', 60.00, 'assets/concert4.jpg', FALSE, 'Female', 'English');

SELECT * , DATE_FORMAT(STR_TO_DATE('2027-01-13T16:00:00.000Z', '%Y-%m-%dT%H:%i:%s.%fZ'), '%Y-%m-%d') AS date FROM concert
  