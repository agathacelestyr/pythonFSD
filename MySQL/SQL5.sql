use sql_store;

select
	o.order_id AS 'Order ID', o.order_date, c.first_name AS 'Customer', sh.name AS 'Shipper', os.name AS 'Status'
from
	orders o
		join
	customers c ON o.customer_id = c.customer_id
		left join
	shippers sh ON sh.shipper_id = o.shipper_id
		join
	order_statuses os ON os.order_status_id = o.status;