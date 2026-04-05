import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([
    { id: 1, download_url: "https://picsum.photos/id/1011/800/400" },
    { id: 2, download_url: "https://picsum.photos/id/1015/800/400" },
    { id: 3, download_url: "https://picsum.photos/id/1016/800/400" },
    { id: 4, download_url: "https://picsum.photos/id/1020/800/400" },
    { id: 5, download_url: "https://picsum.photos/id/1024/800/400" },
    { id: 6, download_url: "https://picsum.photos/id/1025/800/400" },
    { id: 7, download_url: "https://picsum.photos/id/1035/800/400" },
    { id: 8, download_url: "https://picsum.photos/id/1039/800/400" },
    { id: 9, download_url: "https://picsum.photos/id/1043/800/400" },
    { id: 10, download_url: "https://picsum.photos/id/1050/800/400" },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
      }
    } catch (error) {
      setErrorMsg("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function handleNext() {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    if (url) fetchImages(url);
  }, [url]);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images, currentSlide]); // ✅ add currentSlide

  useEffect(() => {
    if (!images.length || isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images, currentSlide, isHovered]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">Loading...</div>
    );
  }

  if (errorMsg) {
    return <div className="text-red-500">{errorMsg}</div>;
  }

  return (
    <div
      className="relative w-full max-w-3xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Arrow */}
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer z-10 opacity-80 hover:opacity-100 transition"
      />

      {/* Images */}
      <div className="overflow-hidden rounded-2xl w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {images.map((imageItem) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt="slider"
              className="w-full h-[400px] object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl cursor-pointer z-10 opacity-80 hover:opacity-100 transition"
      />

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {images?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 mx-1 rounded-full ${
              currentSlide === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
