import {Link } from 'react-router-dom'

export default function NoMatch() {
    return (
        <div>
        Page not found!
        <Link to='/'>Go home </Link>
        </div>
    )
}
