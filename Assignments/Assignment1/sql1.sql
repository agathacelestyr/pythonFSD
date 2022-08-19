create table person(
personId int,
  lastName varchar(20),
  firstName varchar(20),
  PRIMARY KEY(personId)
);

create table address(
addressId int,
  personId int,
  city varchar(20),
  state varchar(20),
  PRIMARY KEY(addressId)
);

insert into person values(101,'Varghese','Joe'),(102,'Varghese','Maria'),(103,'Robert','John');

insert into address values(201,101,'Trichy','TamilNadu'),(202,102,'Bangalore','Karnataka'),(203,103,'Darjeeling','West Bengal');

select person.firstName,person.lastName,address.city,address.state 
from person 
LEFT JOIN address
on person.personId = address.personID;