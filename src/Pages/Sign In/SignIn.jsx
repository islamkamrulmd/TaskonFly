import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Signin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">Sign In</h2>

        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 text-black placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-[#FFAC1C]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 text-black placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-[#FFAC1C]"
          />
          <button
            type="submit"
            className="w-full bg-[#FFAC1C] text-white py-2 rounded-md hover:bg-orange-400 transition"
          >
            Sign In
          </button>
        </form>

        {/* Google Login */}
        <div className="mt-6">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
            <FcGoogle className="text-xl" />
            <span className="text-black">Continue with Google</span>
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-black">
          Not registered?{" "}
          <Link to="/signup" className="text-[#FFAC1C] hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
