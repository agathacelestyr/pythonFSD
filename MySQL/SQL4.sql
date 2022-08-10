use sql_store;
select
	o.order_id,
	o.customer_id,
    CONCAT(first_name, CONCAT('', last_name)) AS full_name
from
	orders o
		left join
	customers c ON o.customer_id = c.customer_id;
    
    
select 
	p.product_id AS product_id, p.name AS names
from
	products p
		join
	orders o ON p.product_id = o.order_id