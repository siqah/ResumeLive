import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          <Link to="/" className="text-2xl font-bold text-gray-800 ml-0">
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
        <aside
          className="bg-gray-800 text-white fixed top-16 left-0 h-screen w-[250px] z-10 shadow-md mt-2 ml-2 rounded-md "
          role="complementary"
        >
          <ul className="container mx-auto">
            <li className="p-4 hover:bg-gray-700">
              {" "}
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              {" "}
              <Link to="/profilesetting">ProfileSetting</Link>
            </li>
            <li className="p-4 hover:bg-gray-700">
              {" "}
              <Link to="/analytic">Analytic</Link>
            </li>
          </ul>
        </aside>

        <main
          className="text-gray-800 p-4 w-full ml-[250px] h-screen mt-5"
          role="main"
        >
          <header className="container  items-center  ">
            <div className=" mr-auto flex justify-between items-center">
              <h1 className="text-4xl">Dashboard</h1>
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                EditResume
              </button>
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                 <Link to="/resumebuilder"> BuildResume</Link> 
              </button>
            </div>
            <h2 className="text-2xl mb-4">Choose a Resume Template</h2>
          </header>
          <hr />
          <section className="container mx-auto grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-xl">Template 1</h3>
              <p className="text-gray-600">This is a description</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-xl">Template 2</h3>
              <p className="text-gray-600">This is a description</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h3 className="text-xl">Template 3</h3>
              <p className="text-gray-600">This is a description</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
