import React, { useEffect, useState } from "react"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    

    useEffect(
        () => {tickets
            fetch("http://localhost:8088/serviceTickets")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)
                })
        },
        []
    )

    return (
        <>
            {
                tickets.map(
                    (ticket) => {
                        return <p key={`ticket--${ticket.id}`}>{ticket.description}</p>
                    }
                )
            }
        </>
    )
}
