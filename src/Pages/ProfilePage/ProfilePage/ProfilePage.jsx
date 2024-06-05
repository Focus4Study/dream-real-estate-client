import { Helmet } from "react-helmet-async";

const ProfilePage = () => {
    return (
        <div>
            <Helmet>
                <title>DR-Estate | Profile</title>
            </Helmet>
            <div className="hero min-h-screen justify-center items-start m-10 ">
                <div className="hero-content flex-col lg:flex-row gap-40">
                    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">User Name</h1>
                        <p className="pt-6 pb-3">User role</p>
                        <p className="pb-3">Email</p>
                        <p className="pb-6">Joined at date</p>
                        <button className="btn btn-primary">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;