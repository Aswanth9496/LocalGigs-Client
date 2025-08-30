import { FcGoogle } from 'react-icons/fc';

const SignInWithGoogleButton = () => {
  return (
    <button className="w-full py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
      <FcGoogle className="w-5 h-5" />
      Sign in with Google
    </button>
  );
};

export default SignInWithGoogleButton;


