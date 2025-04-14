'use client'

import { useParams } from "next/navigation"
import { useSearchParams } from "next/navigation"

export default function Client() {
    // in order to get the brands from the url, we need the useParams function
    const params = useParams()
    console.log(params)
    
    // we need to know the exact folder name in order to get the params of interest
    const clientID = params.id

    // in addition to url Params, we can also have a search query
    // the search params will look for key value pairs after the ?
    const searchParams = useSearchParams()
    const a = searchParams.get('a')

    return (
        <div>
            <h1>Dynamic Client Page</h1>
            <p>The id ({clientID}) will change based on what is in the url</p>
            <p>The search param a was {a} </p>
        </div>
    )
}
