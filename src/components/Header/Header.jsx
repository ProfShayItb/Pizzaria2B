import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <header>
            <div id='logo'>
                <p>Pizzaria</p>
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/catalogo'>Cardápio</Link>
                <Link to='/login'></Link>
            </nav>

        </header>

    )
}