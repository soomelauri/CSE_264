
export default async function Page({params}) {
    // this needs to match the [folder]
    const {id} = await params

    console.log(params)
    return (
        <div>
            <h1>Dynamic Server Page</h1>
            <p>Server id: {id}</p>
        </div>
    )
}
