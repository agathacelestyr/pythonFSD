use sql_invoicing;

select * from invoices;

select count(invoice_total) from invoices;
select min(invoice_total) from invoices;
select max(invoice_total) from invoices;
select sum(invoice_total) from invoices;