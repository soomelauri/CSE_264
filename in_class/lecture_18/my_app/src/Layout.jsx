import { Link, Outlet } from 'react-router-dom'

// a layout allows us to provide the same layout ot all pages within the app.
// In this case we want to give all pages a simple and not pretty
// nav bar.

export default function Layout() {
    return (
        <div>
            <nav>
                <li>
                    {/* link provides the to to the URL and routes to that page*/}
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/user'>Users</Link>
                </li>
            </nav>
            {/* outlet let's us render all of the children outs*/}
            <Outlet />
        </div>
    )
}
