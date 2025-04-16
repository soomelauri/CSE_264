export default async function Page() {
    // If this was a real project, this URL would be an env variable.
    // I will provide DB demo when I upload code.

    let statusRes = await fetch('http://localhost:3000/api/status')
    let status = await statusRes.json()

    return (
        <div>
            <h1>Server Status Page</h1>
            <p>The API status is {status.status}</p>
        </div>
    )
}
