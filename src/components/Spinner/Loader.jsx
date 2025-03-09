const Loader = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="flex items-center space-x-2">
        <div className="text-3xl  animate-bounce">🩸 </div>
        <span className="text-2xl text-gray-600 font-semibold">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
