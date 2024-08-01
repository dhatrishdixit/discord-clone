import React from "react";

const AuthLayout = ({ children } : { children: React.ReactNode }) =>{
    return (
        <div className="flex items-center justify-center h-screen w-screen bg-indigo-500">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
                {children}
            </div>
        </div>
    )
}