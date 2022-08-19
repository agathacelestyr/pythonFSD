create table scores(
  ID int,
  score float,
  PRIMARY KEY(ID)
  );
  
  Insert into scores values(1,3.50);
  Insert into scores values(2,3.65);
  Insert into scores values(3,4.00);
  Insert into scores values(4,3.85);
  Insert into scores values(5,4.00);
  Insert into scores values(6,3.65);
  
  SELECT DENSE_RANK() OVER(ORDER BY score DESC) AS rank,
  score
FROM scores;

