import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className=" px-3 bg-green-400">
            <div className='cite-conotainer flex items-center justify-between'>
                <Link className='text-3xl font-bold' to="/">MyBooks</Link>
                <nav>
                    <ul className='flex gap-3'>
                        <li>
                            <Link className='text-xl font-medium text-white' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='text-xl font-medium text-white' to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='text-xl font-medium text-white' to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link className='text-xl font-medium text-white' to="/login">LogIn</Link>
                        </li>
                        <li>
                            <Link className='text-xl font-medium text-white' to="/signup">Signup</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
