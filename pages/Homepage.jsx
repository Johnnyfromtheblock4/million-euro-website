import PixelCanvas from "../components/PixelCanvas";

const Homepage = () => {
  return (
    <div className="container my-5 text-center">
      <h1 className="mb-4">Welcome to the One Million €uro Website</h1>

      {/* Canvas */}
      <div className="d-flex justify-content-center">
        <PixelCanvas />
      </div>
    </div>
  );
};

export default Homepage;
