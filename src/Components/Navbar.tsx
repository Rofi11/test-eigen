import '../Assets/Styles/Navbar.scss'
import Menu from 'antd/es/menu'

export const Navbar = () => {
    return (
        <div className="container-navbar">
            <div className='blogpost'>
                BlogPost
            </div>
            <div className='menu'>
                <div>Home</div>
                <div>About</div>
                <div>Service</div>
            </div>
        </div>
    )
}