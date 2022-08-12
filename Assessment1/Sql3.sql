create table world(
  name varchar(50),
  continent varchar(50),
  area int,
  population int,
  gdp int,
  PRIMARY KEY(name)
);

insert into world values('Afghanistan','Asia',652230,25500100,20343000000);
insert into world values('Albania','Europe',28748,2831741,12960000000);
insert into world values('Algeria','Africa',2381741,371000000,188681000000);
insert into world values('Andorra','Europe',468,78115,3712000000);
insert into world values('Angola','Africa',1246700,20609294,100990000000);

select name,population,area from world where (area > 3000000) or (population >= 25000000);