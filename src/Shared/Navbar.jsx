import { Link } from "react-router-dom";


const Navbar = () => {

    const links = <>
        <Link to={'/'}><li className="btn-ghost text-xs px-4 py-2 uppercase">Home</li></Link>
        <Link to={'/'}><li className="btn-ghost text-xs px-4 py-2 uppercase">All properties</li></Link>
        <Link to={'/'}><li className="btn-ghost text-xs px-4 py-2 uppercase">Dashboard</li></Link>
        {/* Todo these route should be private */}
        <Link to={'/'}><li className="btn-ghost text-xs px-4 py-2 uppercase">My Profile</li></Link>
        <Link to={'/'}><li className="btn-ghost text-xs px-4 py-2 uppercase">Wishlist</li></Link>
        <Link to={'/'}><li className="btn-ghost text-xs px-4 py-2 uppercase">Property bought</li></Link>
        <Link to={'/'}><li className="btn-ghost text-xs px-4 py-2 uppercase">My reviews</li></Link>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52 rounded-box">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <h1 className="btn btn-ghost text-xl">Dreams Real Estate</h1>
                </div>
                <div className="navbar-center hidden  ml-20 lg:flex">
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