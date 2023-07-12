import LogIn from "../components/LogIn";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-end h-screen w-screen">
      <div className="bg-gray-400 p-10 pt-16 pb-16 mb-10 w-2/6 ">
        <LogIn />
      </div>
    </div>
  );
};

export default HomePage;
