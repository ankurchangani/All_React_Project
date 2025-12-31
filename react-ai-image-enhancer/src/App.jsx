import Home from "./components/Home";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-purple-50 px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight drop-shadow-sm">
          AI Image Enhancer
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-lg mx-auto mt-4">
          Upload your image and let our AI bring out the best version in
          seconds.
        </p>
      </div>

      <Home />
    </div>
  );
};

export default App;
