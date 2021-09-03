import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialties, setSpecial] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        const justSpecialities = employees.map(employee => employee.specialty)
        setSpecial(justSpecialities.join(", "))
    }, [employees])

    return (
        <>
        
        <button onClick={()=> history.push("/employees/create")}>Hire Employee</button>

            <div>
                Specialties: { specialties }
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}

