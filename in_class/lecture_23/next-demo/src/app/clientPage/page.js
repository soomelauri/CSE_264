'use client'

export default function Client() {

    console.log('from client')

    return (
        <div>
            <h1>Client Page</h1>
            <p>This page is sent and rendered on the client, it allows user to use state things, like 
                useEffect, useState, interactions, etc
            </p>
        </div>
    )
}
