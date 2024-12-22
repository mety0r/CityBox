import React from "react";
import LoginForm from "@/components/LoginForm";
import LoginGithub from "@/components/LoginGithub";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Video background with reduced opacity */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      >
        <source src="/login.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Branding in the top left corner */}
      <Link
        
        className="absolute top-5 left-5 text-2xl font-bold text-white tracking-wider z-10"
        href={"/"}
      >
        CityBox.<span className="text-blue-400">_</span>
      </Link>

      {/* Main container for the login card */}
      <div className="relative space-y-10 flex flex-col items-center z-10">
        {/* Main card */}
        <div className="w-full max-w-xs">
          <div className="backdrop-blur-xl bg-white/10 p-5 rounded-xl shadow-2xl border border-white/10">
            {/* Header */}
            <div className="space-y-1 mb-4">
              <h1 className="text-lg font-medium text-white flex justify-center">Welcome back!</h1>
              <p className="text-gray-400 text-xs flex justify-center">Sign in to continue</p>
            </div>

            {/* Login Form */}
            <div className="space-y-3">
              <LoginForm />
              
              {/* Divider */}
              <div className="relative my-3">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 text-gray-400 bg-transparent backdrop-blur-xl">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* GitHub Login */}
              <LoginGithub />
            </div>

            {/* Footer */}
            <p className="mt-4 text-xs text-gray-400 flex justify-center gap-1">
              Don't have an account?{' '}
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
