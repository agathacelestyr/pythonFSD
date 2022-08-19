create table employee(
id int,
  name varchar(20),
  salary int,
  managerId int,
  PRIMARY KEY(id)
);

insert into employee values(1,'Joe',70000,3),(2,'Henry',80000,4),(3,'Sam',60000,''),(4,'Max',90000,'');

SELECT e1.name FROM employee e1 JOIN employee e2 ON e1.managerId = e2.Id WHERE e1.salary > e2.salary;

