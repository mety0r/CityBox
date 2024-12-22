import React, { ReactNode } from "react";

interface BlurredCardProps {
  children: ReactNode;
}

const BlurredCard: React.FC<BlurredCardProps> = ({ children }) => {
  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 shadow-2xl">
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BlurredCard;