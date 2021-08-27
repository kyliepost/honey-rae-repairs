import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customers) => {
                    setCustomers(customers)
                 }
                )
        },
        []
    )

    return (
        <>
        <h2>CustomerList</h2>
        {
            customers.map(
                (customerObject) => { 
                    return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                }
            )
        }
        </>
    )
}

