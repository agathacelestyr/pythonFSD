use sql_store;
SELECT
      *
FROM
	customers
WHERE
	birth_date BETWEEN '1960-01-01' AND '1980-12-31' and points > 2000
    order by first_name
    limit 3;