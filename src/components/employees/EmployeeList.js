import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, setEmployee] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employees) => {
                    setEmployee(employees)
                 }
                )
        },
        []
    )

    return (
        <>
        {
            employees.map(
                (employeeObject) => { 
                    return <h2 key={`employee--${employeeObject.id}`}>{employeeObject.name}</h2>
                }
            )
        }
        </>
    )
}
