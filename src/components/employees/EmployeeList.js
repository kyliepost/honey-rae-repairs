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
        <h2>EmployeeList</h2>
        {
            employees.map(
                (employeeObject) => { 
                    return <p key={`employee--${employeeObject.id}`}>{employeeObject.name}</p>
                }
            )
        }
        </>
    )
}
