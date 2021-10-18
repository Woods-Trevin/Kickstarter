
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './SplashPageComponent.css'


export default function SplashNav() {
    const tags = useSelector(state => Object.values(state.tags));
    return (
        <nav className="splashNav_container">
            {
                tags.map(tag => {
                    return <NavLink className='splashNav' to={`/discover?title=${tag.title}`}>
                        {tag.title}
                    </NavLink>
                })
            }
        </nav>
    )
}
