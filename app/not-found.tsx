import React from "react";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <h1 className="text-6xl font-bold gradient-title mv-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4 ">Page not found</h2>
            <p className="text-gray-600 mb-8">
                The page you're looking for does not exist or has been removed.
            </p>
        </div>
    );
}

export default NotFound
