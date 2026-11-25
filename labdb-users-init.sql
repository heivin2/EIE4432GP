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

INSERT INTO users (username, password, role, enabled)
VALUES
  ('root', 'root1234', 'admin', TRUE),
  ('alice', 'alice1234', 'student', TRUE),
  ('bob', 'bob1234', 'student', FALSE);
INSERT INTO users (username, password, role, enabled)
VALUES ('26015839D_ChuiChunHei', '26015839D', 'student', TRUE);

SELECT * FROM users;
