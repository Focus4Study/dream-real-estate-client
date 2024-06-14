import { BsHouseAdd, BsHouseCheck, BsHouseExclamation, BsHouseGear, BsHouseUp } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { GoCodeReview } from "react-icons/go";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { TbHomeDollar } from "react-icons/tb";
import { Link } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import useAgent from "../../../Hooks/useAgent";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const DashboardNavbar = () => {
    const [isAdmin] = useAdmin()
    const [isAgent] = useAgent()

    const { user } = useAuth()
    const [profile, setProfile] = useState({})
    const axiosSecure = useAxiosSecure()
    useEffect(() => {
        axiosSecure.get(`/users/profile/${user?.email}`)
            .then(res => {
                setProfile(res.data)
            })
    }, [axiosSecure, user?.email])




    return (
        <div>
            <div className="flex flex-col h-full p-3 w-60 dark:bg-gray-50 dark:text-gray-800">
                {/* add fixed class here */}
                <div className="space-y-3 fixed">
                    <div className="flex items-center justify-between">
                        <h2>Dashboard</h2>
                        <button className="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-800">
                                <rect width="352" height="32" x="80" y="96"></rect>
                                <rect width="352" height="32" x="80" y="240"></rect>
                                <rect width="352" height="32" x="80" y="384"></rect>
                            </svg>
                        </button>
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button type="submit" className="p-2 focus:outline-none focus:ring">
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 dark:text-gray-600">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border- rounded-md focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
                    </div>
                    <div className="flex-1">

                        {
                            isAdmin || isAgent ?
                                (
                                    (isAdmin ?
                                        (<ul className="pt-2 pb-4 space-y-1 text-sm">
                                            <Link to={'/'}>
                                                <li className="rounded-sm">
                                                    <button className="flex items-center p-2 space-x-3 rounded-md">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                                            <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                                                        </svg>
                                                        <span>Home</span>
                                                    </button>
                                                </li>
                                            </Link>

                                            <Link to={'/dashboard/manageProperties'}>
                                                <li className="rounded-sm">
                                                    <button className="flex items-center p-2 space-x-3 rounded-md">
                                                        <BsHouseGear className="w-5 h-5 fill-current dark:text-gray-600" />
                                                        <span>Manage Properties</span>
                                                    </button>
                                                </li>
                                            </Link>

                                            <Link to={'/dashboard/profile'}>
                                                <li className="rounded-sm">
                                                    <button className="flex items-center p-2 space-x-3 rounded-md">
                                                        <FaRegUser className="w-5 h-5 fill-current dark:text-gray-600"></FaRegUser>
                                                        <span>Admin Profile</span>
                                                    </button>
                                                </li>
                                            </Link>

                                            <Link to={'/dashboard/manageUsers'}>
                                                <li className="rounded-sm">
                                                    <button className="flex items-center p-2 space-x-3 rounded-md">
                                                        <LuUsers className="w-5 h-5 fill-current dark:text-gray-600" />
                                                        <span>Manage Users</span>
                                                    </button>
                                                </li>
                                            </Link>

                                            <Link to={'/dashboard/manageReviews'}>
                                                <li className="rounded-sm">
                                                    <button className="flex items-center p-2 space-x-3 rounded-md">
                                                        <IoChatboxEllipsesOutline className="w-5 h-5 fill-current dark:text-gray-600" />
                                                        <span>Manage Reviews</span>
                                                    </button>
                                                </li>
                                            </Link>
                                        </ul>)
                                        :
                                        (<ul className="pt-2 pb-4 space-y-1 text-sm">
                                            <Link to={'/'}>
                                                <li className="rounded-sm">
                                                    <button className="flex items-center p-2 space-x-3 rounded-md">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                                            <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                                                        </svg>
                                                        <span>Home</span>
                                                    </button>
                                                </li>
                                            </Link>

                                            <Link to={'/dashboard/profile'}>
                                                <li className="rounded-sm">
                                                    <button className="flex items-center p-2 space-x-3 rounded-md">
                                                        <FaRegUser className="w-5 h-5 fill-current dark:text-gray-600"></FaRegUser>
                                                        <span>Agent Profile</span>
                                                    </button>
                                                </li>
                                            </Link>

                                            <Link to={'/dashboard/add-property'}>
                                                <li className="rounded-sm">
                                                    <button className="flex items-center p-2 space-x-3 rounded-md">
                                                        <BsHouseAdd className="w-5 h-5 fill-current dark:text-gray-600" />
                                                        <span>Add Property</span>
                                                    </button>
                                                </li>
                                            </Link>

                                            <Link to={'/dashboard/my-added-property'}>
                                                <li className="rounded-sm">
                                                    <button className="flex items-center p-2 space-x-3 rounded-md">
                                                        <BsHouseUp className="w-5 h-5 fill-current dark:text-gray-600" />
                                                        <span>My Added Properties</span>
                                                    </button>
                                                </li>
                                            </Link>

                                            <Link to={'/dashboard/property_sold'}>
                                                <li className="rounded-sm">
                                                    <button className="flex items-center p-2 space-x-3 rounded-md">
                                                        <BsHouseCheck className="w-5 h-5 fill-current dark:text-gray-600" />
                                                        <span>My Sold Properties</span>
                                                    </button>
                                                </li>
                                            </Link>

                                            <Link to={'/dashboard/offered-properties'}>
                                                <li className="rounded-sm">
                                                    <button className="flex items-center p-2 space-x-3 rounded-md">
                                                        <BsHouseExclamation className="w-5 h-5 fill-current dark:text-gray-600" />
                                                        <span>Offered Properties</span>
                                                    </button>
                                                </li>
                                            </Link>
                                        </ul>))
                                )
                                :
                                (

                                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                                        <Link to={'/'}>
                                            <li className="rounded-sm">
                                                <button className="flex items-center p-2 space-x-3 rounded-md">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                                        <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                                                    </svg>
                                                    <span>Home</span>
                                                </button>
                                            </li>
                                        </Link>
                                        <Link to={'/dashboard/wishlist'}>
                                            <li className="rounded-sm dark:bg-gray-100 dark:text-gray-900">
                                                <p rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                                        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                                    </svg>
                                                    <span>Wishlist</span>
                                                </p>
                                            </li>
                                        </Link>

                                        <Link to={'/dashboard/property_bought'}>
                                            <li className="rounded-sm dark:bg-gray-100 dark:text-gray-900">
                                                <p rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                                    <TbHomeDollar className="w-5 h-5 dark:text-gray-600" />
                                                    <span>Property Bought</span>
                                                </p>
                                            </li>
                                        </Link>
                                        <Link to={'/dashboard/my-reviews'}>
                                            <li className="rounded-sm dark:bg-gray-100 dark:text-gray-900">
                                                <p className="flex items-center p-2 space-x-3 rounded-md">
                                                    <GoCodeReview className="w-5 h-5 fill-current dark:text-gray-600" />
                                                    <span>My Reviews</span>
                                                </p>
                                            </li>
                                        </Link>

                                        <li className="rounded-sm">
                                            <p className="flex items-center p-2 space-x-3 rounded-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                                    <rect width="32" height="64" x="256" y="232"></rect>
                                                </svg>
                                                <span>Logout</span>
                                            </p>
                                        </li>
                                    </ul>
                                )
                        }

                    </div>


                    <Link to={'/dashboard/profile'}>
                        <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                            <img className="w-10 h-10 rounded-md" src={profile.photoURL} />
                            <div>
                                <h2 className="text-lg font-semibold">{profile.name}</h2>
                                <span className="flex items-center space-x-1">
                                    <p className="text-xs hover:underline dark:text-gray-600">View profile</p>
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;