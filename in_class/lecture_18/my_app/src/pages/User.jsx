import { useState, useEffect } from 'react'
import UserCard from '../components/UserCard'

export default function User() {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setApiData(data))
      }, [])
      
      return (
        <div>
          {apiData ? apiData.map((user) => (
            <UserCard key={user.id} user={user} />
          )) : null}
        </div>
      )
}


