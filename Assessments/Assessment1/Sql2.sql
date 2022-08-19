drop table person;

create table person(
  ID int,
  email varchar(50),
  PRIMARY KEY(ID)
);

insert into person values(1,'john@example.com');
insert into person values(2,'bob@example.com');
insert into person values(3,'john@example.com');

DELETE FROM person WHERE ID NOT IN (SELECT MIN(ID) FROM person GROUP BY email);

SELECT * from person;