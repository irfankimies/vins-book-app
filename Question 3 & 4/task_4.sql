-- Create table
CREATE TABLE fruit_price (
  id INT PRIMARY KEY,
  fruit_name VARCHAR(50),
  price INT
);

-- Insert data
INSERT INTO fruit_price (id, fruit_name, price) VALUES
(1, 'Pineapple', 20),
(2, 'Durian', 25),
(3, 'Others Fruit', 15);

-- Query to get prices for Pineapple, Durian, Apple, and Orange
SELECT
  requested_fruit AS fruit,
  COALESCE(fp.price, (SELECT price FROM fruit_price WHERE fruit_name = 'Others Fruit')) AS price
FROM (
  SELECT 'Pineapple' AS requested_fruit
  UNION ALL
  SELECT 'Durian'
  UNION ALL
  SELECT 'Apple'
  UNION ALL
  SELECT 'Orange'
) AS fruits
LEFT JOIN fruit_price fp
  ON fruits.requested_fruit = fp.fruit_name;
