'use client'

import { useState, useEffect } from "react"

export default function Page() {
    const [status, SetStatus] = useState('')

    useEffect(() => {
        fetch("/api/status")
        .then(res => res.json())
        .then(data => SetStatus(data))
    }, [])

    return (
        <div>
            <h1>API Status</h1>
            <p>The API status is {status.status}</p>
        </div>
    )
}
