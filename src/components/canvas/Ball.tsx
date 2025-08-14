import React from "react";

const BallCanvas: React.FC<{ icon: string; name?: string }> = ({ icon, name }) => {
  return (
    <div
      className="flex items-center justify-center rounded-full shadow-lg bg-white"
      style={{
        width: "100px",
        height: "100px",
        background: "radial-gradient(circle at 30% 30%, #fff8eb, #e6dfd1)",
      }}
    >
      <img
        src={icon}
        alt={name || "technology icon"}
        className="w-2/3 h-2/3 object-contain"
      />
    </div>
  );
};

export default BallCanvas;
