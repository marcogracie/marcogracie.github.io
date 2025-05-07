import './index.css'
import Header from '../header';
import { Outlet } from 'react-router-dom';

/**
 * Main layout of website
 */
const Layout = () => (
    <>
        <Header/>
        <div id='main' className='main'>
            <div id='right_main' className='right_main'>
                <Outlet />
            </div>
        </div>
        </>
);

export default Layout;