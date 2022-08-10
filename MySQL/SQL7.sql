select
	'First half of 2019' AS 'Date Range',
    SUM(invoice_total),
    SUM(payment_total),
    SUM(invoice_total-payment_total)
from
	invoices
where
	invoice_date BETWEEN '2019-01-01' AND '2019-06-30'
union select
	'Second half of 2019' AS 'Date Range',
    SUM(invoice_total),
    SUM(payment_total),
    SUM(invoice_total-payment_total)
from
	invoices
where
	invoice_date BETWEEN '2019-07-01' AND '2019-12-31'
union select
	'Total' AS 'Date Range',
    SUM(invoice_total),
    SUM(payment_total),
    SUM(invoice_total-payment_total)
from
	invoices;
    
    
    
 
select
	client_id, SUM(invoice_total)
from
	invoices
GROUP BY client_id;




select
	city, state, SUM(invoice_total) AS 'Total'
from
	invoices i
		join
	clients c ON c.client_id = i.client_id
GROUP BY state, city;