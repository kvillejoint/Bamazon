CREATE DATABASE Bamazon_DB;

USE Bamazon_DB;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(100) NULL,
	department_name VARCHAR(100) NULL,
	price DECIMAL (10,2) NULL,
    stock_quantity INTEGER NULL,
    PRIMARY KEY (item_id)
);
-- mock data to begin customer functions
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("flat screen tv", "Electronics", 1500.00, 75),
    ("smartphone", "Electronics", 250.99, 30),
    ("couch", "Furniture", 800.00, 4),
    ("bed frame", "Furniture", 150.75, 13),
    ("blender", "Cookware", 75.25, 20),
    ("curtains", "Electronics", 210.00, 75),
    ("car seat", "Children", 310.00, 15),
    ("plates", "Cookware", 32.99, 6),
    ("tires", "Auto", 400.00, 3),
	("video game", "Electronics", 69.99, 40)


-- Table for Supervisor View
-- CREATE TABLE departments (
-- department_id	INTEGER NOT NULL,
-- department_name	VARCHAR(100) NULL,
-- over_head_costs INTEGER NOT NULL,
-- total_sales DECIMAL (10,2) NULL,
-- PRIMARY KEY(department_id)
-- )
