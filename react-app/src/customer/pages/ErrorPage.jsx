import {AlertTriangle} from "lucide-react";
import React from "react";
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-50 to-red-100 px-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center animate-fadeIn">
                <div className="flex justify-center mb-4 text-red-500">
                    <AlertTriangle className="w-12 h-12" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Invalid Link</h2>
                <p className="text-gray-600 mb-4">
                    The page you're trying to access is missing or has incorrect details.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="mt-2 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md transition"
                >
                    Go to Homepage
                </button>
            </div>
        </div>
    )
}

export default ErrorPage;