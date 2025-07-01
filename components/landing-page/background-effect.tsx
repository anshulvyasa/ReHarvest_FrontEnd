const BackGroundEffect = () => {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-10 overflow-hidden ">
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
    </div>
  );
};

export default BackGroundEffect;
