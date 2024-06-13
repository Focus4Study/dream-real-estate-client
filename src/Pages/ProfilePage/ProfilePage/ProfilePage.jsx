import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const ProfilePage = () => {
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
            <Helmet>
                <title>DR-Estate | Profile</title>
            </Helmet>
            <div className="hero justify-start items-start p-10 m-10 ">
                <div className="hero-content flex-col lg:flex-row gap-40">
                    <img src={profile.photoURL } className="rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">{profile.name}</h1>
                        <p className="pt-6 pb-3">Access: {profile.role? <p className="uppercase">{profile.role}</p> : 'User'}</p>
                        <p className="pb-3">Email: {user.email}</p>
                        <p className="pb-6">Joined: {user.metadata.creationTime.slice(0,17)}</p>
                        <button className="btn btn-primary">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;