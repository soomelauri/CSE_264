
export default function Page() {
    console.log('this is happening on the server')
    return (
        <div>
            <h1>Server Page!</h1>
            <p>This page is rendered on the server and sent to the client</p>
        </div>
    )
}
