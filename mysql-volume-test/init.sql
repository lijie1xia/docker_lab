CREATE DATABASE IF NOT EXISTS demo;
USE demo;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50)
);

INSERT INTO users (name)
VALUES ('Jack'),
       ('Mary');