import SignUp from "../components/SignUp";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-end h-screen w-screen">
      <div className="bg-gray-400 p-10 pt-16 pb-16 mb-10 w-2/6 ">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
