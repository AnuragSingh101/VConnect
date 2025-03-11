import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="form-container bg-form-bg p-8 rounded-xl w-full max-w-md space-y-6">
        <p className="title text-2xl font-bold text-center text-black">Sign Up</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="input-group">
            <label className="block text-sm text-black mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-input-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-button-purple"
            />
          </div>

          <div className="input-group">
            <label className="block text-sm text-black mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-input-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-button-purple"
            />
          </div>
          
          <div className="input-group">
            <label className="block text-sm text-black mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-input-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-button-purple"
            />
          </div>

          <div className="input-group">
            <label className="block text-sm text-black mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-input-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-button-purple"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-button-purple text-sm font-bold py-2 rounded-md text-text-dark hover:bg-opacity-90 transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="social-message flex items-center space-x-3">
          <div className="flex-1 h-px bg-input-border"></div>
          <p className="text-sm text-text-gray">Sign up with social accounts</p>
          <div className="flex-1 h-px bg-input-border"></div>
        </div>

        <p className="text-sm text-text-gray text-center">OR</p>

        <div className="social-icons flex justify-center space-x-4">
          <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <img src="/images/google-icon.svg" alt="Google" className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <img src="/images/twitter-icon.svg" alt="Twitter" className="w-6 h-6" />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <img src="/images/github-icon.svg" alt="GitHub" className="w-6 h-6" />
          </button>
        </div>

        <div className="login flex justify-center items-center space-x-1">
          <p className="text-xs text-text-light">Already have an account?</p>
          <button 
            onClick={() => navigate('/')}
            className="text-sm text-black hover:underline"
          >
            Login
          </button>
        </div>

        <hr className="border-t border-input-border" />
      </div>
    </div>
  );
};

export default SignupForm; 