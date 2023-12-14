# Write your MySQL query statement below
select Email from person
group by email
having 1 < count(email)