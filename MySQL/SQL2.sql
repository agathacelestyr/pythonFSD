use ecom_store;
SELECT * from customer;
insert into customer(customer_name,customer_contact) values("Arun", 12345), 
("Benny",98756), ("Ravi",56823), ("Rohan", 12543), ("Sekar", 25634);
insert into product(product_name) values("pen"),("pencil"),("Eraser"), ("wires"), ("cord");

create table orders (id tinyint(2),
	customer_id varchar(10),
	product_id varchar(20),
    primary key(id));
    
    insert into order (customer_id,product_id) values 