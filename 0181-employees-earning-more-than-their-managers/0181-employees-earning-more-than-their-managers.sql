# Write your MySQL query statement below
select e.name Employee from employee e
inner join employee m
on e.managerId = m.id
where e.salary > m.salary