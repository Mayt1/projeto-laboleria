CREATE TABLE cakes(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price BIGINT NOT NULL, ---TALVES DA ERRO AQUI tem q ser float
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
    totalPrice BIGINT NOT NULL, ---TALVES DA ERRO AQUI tem q ser float
    quantity BIGINT NOT NULL,
    "clientId" INTEGER REFERENCES clients(id),
    "cakeId" INTEGER REFERENCES cakes(id),
    "createdAt" TIMESTAMP DEFAULT NOW()
);