import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
    const { logout } = useAuth0();

    return (
        <div className="h-screen px-[18.5%] pt-[18%] md:pt-[10%] bg-cover bg-[#f9f9f9] bg-fixed pb-[10%]">
            <div className="text-4xl font-bold my-7">Welcome, user!</div>
        </div>
    );
};

export default Dashboard;