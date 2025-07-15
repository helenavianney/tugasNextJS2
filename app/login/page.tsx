export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-[#F9F9F9] rounded-lg shadow-lg w-full max-w-md form-container">
                <h1 className="text-2xl font-bold text-[#2C3E50] text-center">
                    Login
                </h1>
                
                <form>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-[#2C3E50]">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent text-[#2C3E50]"
                            placeholder="Enter your username"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#2C3E50] mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent text-[#2C3E50]"
                            placeholder="Enter your email"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-[#2C3E50] mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent text-[#2C3E50]"
                            placeholder="Enter your password"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full bg-[#FF6B6B] text-white py-2 px-4 rounded-md hover:bg-[#e55555] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2 transition duration-200 font-medium"
                    >
                        Login
                    </button>
                </form>
                
                <div className="mt-6 text-center">
                    <p className="text-sm text-[#2C3E50]">
                        Don&apos;t have an account?{' '}
                        <a href="#" className="text-[#FF6B6B] hover:text-[#e55555] font-medium">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}