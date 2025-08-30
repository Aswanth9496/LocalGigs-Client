import {FaApple} from 'react-icons/fa'


const SignInWithAppleButton = () => {
  return (
    <button className="w-full py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
      <FaApple className="w-5 h-5" />
      Sign in with Google
    </button>
  );
};

export default SignInWithAppleButton;