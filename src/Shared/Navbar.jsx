import { Link } from "react-router-dom";


const Navbar = () => {

    const links = <>
        <Link to={'/'}><li className="mr-4 btn-ghost px-4 py-2 uppercase">Home</li></Link>
        <Link to={'/'}><li className="mr-4 btn-ghost px-4 py-2 uppercase">CONTACT us</li></Link>
        <Link to={'/'}><li className="mr-4 btn-ghost px-4 py-2 uppercase">DASHBOARD</li></Link>
        <Link to={'/'}><li className="mr-4 btn-ghost px-4 py-2 uppercase">Our Menu</li></Link>
        <Link to={'/'}><li className="mr-4 btn-ghost px-4 py-2 uppercase">Our Shop</li></Link>
    </>

    return (
        <div>
            <div className="navbar bg-[#15151580] text-white z-10 fixed max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <h1 className="btn btn-ghost text-xl">Dreams Real Estate</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;