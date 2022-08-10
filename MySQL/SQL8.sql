select
	p.date,
    pm.name AS 'Payment Methods',
    SUM(amount) AS 'Total Payments'
from
	payments p
		join
	payment_methods pm ON p.payment_method = pm.payment_method_id
GROUP BY p.date, payment_method
ORDER BY date;