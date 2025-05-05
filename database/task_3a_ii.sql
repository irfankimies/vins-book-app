SELECT 
    e.Code AS EmployeeCode,
    e.Name,
    e.Salary,
    d.Code AS DepartmentCode
FROM 
    Employee e
JOIN 
    Department d
ON 
    e.DepartmentID = d.ID
WHERE 
    e.Salary BETWEEN 3000 AND 4000
ORDER BY 
    d.Code, e.Name;