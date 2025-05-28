import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../assets/public/imgVerificationCode2.svg';
import ActivationImg from '../../assets/public/imgActivationPage.svg'; // Import the activation success image

const VerificationCodePage = () => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [showNotification, setShowNotification] = useState(false);
    const [activationSuccess, setActivationSuccess] = useState(false);
    const email = "test@mail123.com"; // Hardcoded email for display purposes
    const navigate = useNavigate();

    // Handle code input changes
    const handleInput = (index, value) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Auto-focus next input field
        if (value && index < 5) {
            const nextInput = document.querySelector(`input[name=code-${index + 1}]`);
            if (nextInput) nextInput.focus();
        }
    };

    // Handle backspace to go to previous input
    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            const prevInput = document.querySelector(`input[name=code-${index - 1}]`);
            if (prevInput) {
                prevInput.focus();
            }
        }
    };

    // Handle form submission - now shows success screen
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Verification code submitted:', code.join(''));
        setActivationSuccess(true);
    };
    
    // Handler for sending a new code
    const handleSendNewCode = (e) => {
        e.preventDefault();
        setShowNotification(true);
    };

    // Handler for login button on success screen
    const handleLogin = () => {
        console.log('Navigating to login page');
        navigate('/login');
    };

    // If activation is successful, show success screen
    if (activationSuccess) {
        return (
            <div className="bg-white flex items-center justify-center min-h-screen font-poppins">
                <div className="flex w-full max-w-4xl">
                    {/* Left side - Success Image */}
                    <div className="w-1/2 flex items-center justify-center">
                        <img
                            alt="Person celebrating activation success"
                            className="w-full h-auto"
                            src={ActivationImg}
                        />
                    </div>
                    
                    {/* Right side - Success Message */}
                    <div className="w-1/2 flex flex-col justify-center p-8">
                        <Link
                            to="/"
                            className="flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] w-20 mb-6"
                        >
                            <i className="fas fa-arrow-left mr-2"></i>Back
                        </Link>
                        
                        <h1 className="text-4xl font-bold text-blue-700 mb-4">Activation Success</h1>
                        <p className="text-gray-600 mb-8">
                            Congratulations! Your account has been successfully activated.
                            Please log in using your registered email and password to start using
                            our services.
                        </p>
                        
                        <button
                            onClick={handleLogin}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Default view - Verification Code page
    return (
        <div className="bg-white flex items-center justify-center min-h-screen font-poppins">
            <div className="flex w-full max-w-4xl">
                {/* Left side - Image */}
                <div className="w-1/2 flex items-center justify-center">
                    <img
                        alt="Verification illustration"
                        className="w-full h-auto"
                        src={Img}
                    />
                </div>
                
                {/* Right side - Verification form */}
                <div className="w-1/2 flex flex-col justify-center p-8">
                    <Link
                        to="/"
                        className="flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] w-20 mb-6"
                    >
                        <i className="fas fa-arrow-left mr-2"></i>Back
                    </Link>
                    
                    <h1 className="text-4xl font-bold text-blue-700 mb-2">Verification</h1>
                    <p className="text-gray-600 mb-6">
                        Please check your email, we have sent a code to {email}. Enter it below.
                    </p>
                    
                    {/* Notification that appears when "Send a new code" is clicked */}
                    {showNotification && (
                        <div className="mb-6 bg-white border border-blue-600 rounded-lg p-4 flex items-start">
                            <div className="flex-shrink-0 text-blue-600">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-md font-semibold text-blue-600">Send a new code</h3>
                                <div className="mt-1 text-sm text-blue-600">
                                    <p>We have sent you the latest activation code, please check your email again.</p>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="mb-6">
                            <div className="flex justify-center mb-4">
                                {[0, 1, 2, 3, 4, 5].map((index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        name={`code-${index}`}
                                        maxLength="1"
                                        className="w-10 h-10 border border-gray-300 text-center text-xl mx-1 rounded"
                                        value={code[index]}
                                        onChange={(e) => handleInput(index, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-500 text-center text-sm">
                                Please enter the OTP verification code sent to your email.
                            </p>
                        </div>
                        
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Continue
                            </button>
                        </div>
                        
                        <p className="text-center text-gray-600 mt-4">
                            Didn't get a code? {' '}
                            <button 
                                onClick={handleSendNewCode} 
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Send a new code
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VerificationCodePage;