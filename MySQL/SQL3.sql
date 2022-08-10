use sql_store;
select *
from
	orders o
		join
	customers c on o.customer_id = c.customer_id
		join
	products p on o.customer_id = p.product_id;
    