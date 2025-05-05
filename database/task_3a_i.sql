SELECT 
    d.Code AS DepartmentCode,
    COUNT(e.ID) AS TotalEmployees
FROM 
    Employee e
JOIN 
    Department d
ON 
    e.DepartmentID = d.ID
GROUP BY 
    d.Code;