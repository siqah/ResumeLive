import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div>
      <nav className="bg-white shadow-md z-10  ">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 w-[80%]">
                <Link to="/" className="text-2xl font-bold text-gray-800">RESUME-LIVE</Link>
                <div className="flex space-x-6">
                    <Link to="/about" className="text-gray-600 hover:text-gray-800 transition duration-300">Home</Link>
                    <Link to="/features" className="text-gray-600 hover:text-gray-800 transition duration-300">Features</Link>
                    <Link to="/pricing" className="text-gray-600 hover:text-gray-800 transition duration-300">Pricing</Link>
                    <Link to="/login" className="text-gray-600 hover:text-gray-800 transition duration-300">Login</Link>
                    <Link to="/register" className="text-gray-600 hover:text-gray-800 transition duration-300">Register</Link>
                </div>
            </div>
        </nav>
    <div>
      <sidebar></sidebar>
      <main></main>
    </div>
  </div>
  );
}

export default Dashboard