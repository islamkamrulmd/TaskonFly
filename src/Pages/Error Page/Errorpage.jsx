import { Link } from "react-router-dom";

export default function Errorpage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <h1 className="text-6xl font-bold text-[#FFAC1C] mb-4">404</h1>
      <p className="text-xl font-semibold text-gray-800 mb-2">Page Not Found</p>
      <p className="text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-[#FFAC1C] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-orange-400 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
