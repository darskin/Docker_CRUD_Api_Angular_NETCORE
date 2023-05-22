\connect storedb
CREATE TABLE Items
(
	Id serial PRIMARY KEY,
	Name VARCHAR (50) NOT NULL,
	Description VARCHAR (100) NOT NULL,
	Price DECIMAL NOT NULL
);
ALTER TABLE "item" OWNER TO root;
Insert into item(name,description,price) values( 'Title 1','Description 1',550);
