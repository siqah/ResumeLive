import { Link } from "react-router-dom";

// import ResumeEditor from "../components/ResumeEditor";

const Dashboard = () => {
  return (
    <div>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 w-[80%]">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            RESUME-LIVE
          </Link>
          <div className="flex space-x-6">
           
            <Link
              to="/features"
              className="text-gray-600 hover:text-gray-800 transition duration-300"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-gray-600 hover:text-gray-800 transition duration-300"
            >
              Pricing
            </Link>
            
          </div>
        </div>
      </nav>

      <div className="flex flex-row pt-16">
        <div
          className="bg-gray-800 text-white fixed top-16 left-0 h-screen w-[250px] z-10 shadow-md mt-2 ml-2 rounded-md "
          role="complementary"
        >
          <ul className="container mx-auto">
            <li className="p-4 hover:bg-gray-700"> <Link to="/dashboard">Dashboard</Link></li>
            <li className="p-4 hover:bg-gray-700">  <Link to="/profilesetting">ProfileSetting</Link></li>
            <li className="p-4 hover:bg-gray-700"> <Link to="/analytic">Analytic</Link></li>
          </ul>
        </div>

        <main
          className="text-gray-800 p-4 w-full ml-[250px] h-screen mt-5"
          role="main"
        >
          <h1 className="text-4xl">Dashboard</h1>
          <div>
            <h2 className="text-2xl mb-4">Choose a Resume Template</h2>
            {/* <ResumeEditor /> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
