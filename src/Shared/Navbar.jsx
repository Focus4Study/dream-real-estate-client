import { Link } from "react-router-dom";


const Navbar = () => {

    const links = <>
        <Link to={'/'}><li className="btn-ghost text-xs px-4 py-2 uppercase">Home</li></Link>
        <Link to={'/all-properties'}><li className="btn-ghost text-xs px-4 py-2 uppercase">All properties</li></Link>
        <Link to={'/dashboard'}><li className="btn-ghost text-xs px-4 py-2 uppercase">Dashboard</li></Link>
        {/* Todo these route should be private */}
        <Link to={'/dashboard/profile'}><li className="btn-ghost text-xs px-4 py-2 uppercase">My Profile</li></Link>
        <Link to={'/wishlist'}><li className="btn-ghost text-xs px-4 py-2 uppercase">Wishlist</li></Link>
        <Link to={'/property-bought'}><li className="btn-ghost text-xs px-4 py-2 uppercase">Property bought</li></Link>
        <Link to={'/my-reviews'}><li className="btn-ghost text-xs px-4 py-2 uppercase">My reviews</li></Link>
    </>

    return (
        <div className="fixed z-10 w-full container">
            <div className="navbar bg-slate-900 text-white bg-opacity-30">
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
                    <div className="flex">
                        <img className="w-20" src="https://i.ibb.co/YXsq6Mj/Untitled-1.png" alt="" />
                        <h1 className="btn btn-ghost text-xl font-serif">Dreams Real Estate</h1>
                    </div>
                </div>
                <div className="hidden ml-20 lg:flex navbar-center">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/login'}>
                        <button className="btn">Button</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;