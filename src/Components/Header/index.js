import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, Space } from 'antd';
import { ChevronDownIcon } from '@heroicons/react/24/solid'

import CartIcon from '../Utils/CartIcon';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import logo from "../../Images/saigaze.png"
import { addUser } from '../../Redux/features/userLoginSlice';



const Header = () => {

    const dispatch = useDispatch();

    const [activeLink, setActiveLink] = useState('Home'); // Initialize the active link state

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offsetTop = section.offsetTop - 100; // Adjusted to subtract 20 pixels
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    // Define an array of links
    const links = ['Home', 'Shop', 'Contact'];

    const user = useSelector((state) => state.userLogin)

    const handleLogout = () => {
        dispatch(addUser({}));
    };

    const items = [
        {
            key: '1',
            label: (
                <Link to="/" onClick={() => dispatch(handleLogout)}>
                    Logout
                </Link>
            ),
        },
    ]



    const Logout = ({ user }) => {
        return (
            <Dropdown
                menu={{
                    items,
                }}
            >
                <li onClick={(e) => e.preventDefault()}>
                    <Space>
                        Hey {user.name}
                        <ChevronDownIcon className="h-4 w-4 text-primary mt-1" />
                    </Space>
                </li>
            </Dropdown>
        )
    }


    return (
        <header className='px-16 py-4 flex flex-row justify-between items-center shadow-sm top-0 z-[1000] w-full fixed bg-white'>
            <div className='basis-72'>
                <Link to={`/`}>
                    <img src={logo} alt="Saigaze" className='w-2/3' />
                </Link>
            </div>
            <div>
                <ul className='flex flex-row space-x-8'>
                    {links.map(link => (
                        <li
                            key={link}
                            className={`text-primary cursor-pointer font-medium ${activeLink === link ? 'border-b-2 border-primary font-bold text-[#154b25e6]' : ''}`}
                            onClick={() => { setActiveLink(link); scrollToSection(link) }}
                        >
                            {link}
                        </li>
                    ))}
                    {/* <LoginRouting /> */}
                    <Link to="/login" className={`text-primary cursor-pointer font-medium`} >
                        {user.name ? <Logout user={user} /> : "Login"}
                    </Link>
                    <CartIcon />
                </ul>
            </div>
        </header >
    );
};

export default Header;
