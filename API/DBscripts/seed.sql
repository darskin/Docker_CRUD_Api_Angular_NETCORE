\connect storedb
CREATE TABLE "Item"
(
	Id serial PRIMARY KEY,
	Name VARCHAR (150) NOT NULL,
	Description VARCHAR (300) NOT NULL,
	Price DECIMAL NOT NULL,
	Creation_Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
ALTER TABLE "Item" OWNER TO root;
INSERT INTO "Item" (Name, Description, Price) VALUES ('Smartphone', 'High-end smartphone with advanced features.', 799.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Laptop', 'Powerful laptop for work and gaming.', 1299.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Headphones', 'Wireless headphones with noise cancellation.', 199.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Smart Watch', 'Fitness tracker and smartwatch with heart rate monitor.', 149.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Bluetooth Speaker', 'Portable speaker with high-quality sound.', 79.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Camera', 'Digital camera with professional-grade image quality.', 999.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Gaming Console', 'Latest gaming console for immersive gaming experiences.', 499.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Wireless Earbuds', 'True wireless earbuds with long battery life.', 149.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Tablet', 'Versatile tablet for work and entertainment.', 599.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Smart Home Hub', 'Central control for smart home devices.', 199.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Fitness Tracker', 'Activity tracker for monitoring health and fitness.', 79.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('External Hard Drive', 'High-capacity storage for backing up files.', 129.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Wireless Router', 'Fast and reliable wireless internet connection.', 99.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Virtual Reality Headset', 'Immersive virtual reality experience.', 299.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Smart Thermostat', 'Energy-efficient thermostat for home automation.', 129.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Drone', 'Remote-controlled aerial drone with camera.', 499.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Gaming Mouse', 'High-precision mouse for gaming.', 79.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Wireless Keyboard', 'Wireless keyboard for comfortable typing.', 49.99);
INSERT INTO "Item" (Name, Description, Price) VALUES ('Smart TV', 'Internet-enabled television with streaming services.', 999.99);