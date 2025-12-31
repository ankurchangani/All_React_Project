import { useState, useRef, useEffect } from "react";
import Loading from "./Loading";

const ImagePreview = (props) => {
  const [zoomStyle, setZoomStyle] = useState({});
  const [imageHeight, setImageHeight] = useState("20rem");
  const [showPopup, setShowPopup] = useState(false); 
  const originalRef = useRef(null);
  useEffect(() => {
    if (props.enhanced && !props.loading) {
      setShowPopup(true);
      const timer = setTimeout(() => setShowPopup(false), 2500); 
      return () => clearTimeout(timer);
    }
  }, [props.enhanced, props.loading]);

  useEffect(() => {
    if (originalRef.current) {
      setImageHeight(`${originalRef.current.clientHeight}px`);
    }
  }, [props.uploaded]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      backgroundImage: `url(${props.enhanced})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "200%",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({});
  };

  return (
    <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
   
      {showPopup && (
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-xl shadow-lg animate-bounce">
          ✅ Image Enhanced Successfully!
        </div>
      )}

    
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <h2 className="text-lg font-semibold text-center bg-gray-200 text-gray-800 py-2">
          Original Image
        </h2>
        {props.uploaded ? (
          <img
            ref={originalRef}
            src={props.uploaded}
            alt="original"
            className="w-full object-cover"
            onLoad={() => {
              if (originalRef.current) {
                setImageHeight(`${originalRef.current.clientHeight}px`);
              }
            }}
          />
        ) : (
          <div
            ref={originalRef}
            className="flex items-center justify-center h-80 bg-gray-100 text-gray-400"
          >
            No Image Selected
          </div>
        )}
      </div>

      
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <h2 className="text-lg font-semibold text-center bg-blue-500 text-white py-2">
          Enhanced Image
        </h2>
        {props.enhanced && !props.loading && (
          <div
            className="relative w-full bg-gray-100 cursor-zoom-in"
            style={{ height: imageHeight, ...zoomStyle }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={props.enhanced}
              alt="enhanced"
              className={`w-full h-full object-cover ${
                Object.keys(zoomStyle).length ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        )}
        {props.loading ? (
          <Loading />
        ) : (
          !props.enhanced && (
            <div
              className="flex items-center justify-center bg-gray-100 text-gray-400"
              style={{ height: imageHeight }}
            >
              No Enhanced Image
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
