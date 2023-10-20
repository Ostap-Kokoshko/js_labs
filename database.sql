CREATE TABLE stadiums
(
    id          serial PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price       DECIMAL(10, 2) NOT NULL,
    type        VARCHAR(50) NOT NULL
);
