import Navbar from "../components/Navbar";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-4 px-4 text-center my-10 justify-center items-center w-[80%]">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Welcome to ResumeLive</h1>
          <p className="text-lg mt-4">
            Create, update, and share your resume effortlessly. 
            You update your resume and everyone else gets the latest version with only one click.
            Get started now and make your resume stand out!
          </p>
          <a href="/dashboard" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg text-lg">
            Get Started
          </a>
        </div>
        <div className="flex justify-around mt-10 space-x-4">
          <div className="w-1/3 p-4 border-radius-5 shadow-md  rounded-lg hover:bg-gray-100">
            <h3 className="text-2xl font-semibold">Easy to Use</h3>
            <p className="mt-2">Create and update your resume with our user-friendly interface.</p>
          </div>
          <div className="w-1/3 p-4 border-radius-5 shadow-md  rounded-lg hover:bg-gray-100">
            <h3 className="text-2xl font-semibold">Shareable Links</h3>
            <p className="mt-2">Share your resume with a simple link. No more attachments!</p>
          </div>
          <div className="w-1/3 p-4 border-radius-5 shadow-md  rounded-lg hover:bg-gray-100">
            <h3 className="text-2xl font-semibold">Professional Templates</h3>
            <p className="mt-2">Choose from a variety of professional templates to make your resume stand out.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage