CREATE TABLE cakes(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price decimal NOT NULL, 
    image TEXT NOT NULL,
    description TEXT
);

CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    phone TEXT NOT NULL
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    totalPrice decimal NOT NULL,
    quantity BIGINT NOT NULL,
    "clientId" INTEGER REFERENCES clients(id),
    "cakeId" INTEGER REFERENCES cakes(id),
    "createdAt" TIMESTAMP DEFAULT NOW()
);