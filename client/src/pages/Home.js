import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategories,
  getAllImages,
  getSingleImage,
} from "../redux/reducers/gallerySlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllImages());
    dispatch(getAllCategories());
  }, [dispatch]);

  const { images, categories } = useSelector((state) => state.gallery);

  const handleCategories = (id) => {
    dispatch(getSingleImage(id));
  };

  return (
    
    <div className="container my-3">
      {/* Category Buttons Row */}
      <div className="row justify-content-center mb-4">
        {/* "All" Button */}
        <button
          onClick={() => dispatch(getAllImages())}
          className="btn btn-primary filter-button mx-2"
          style={{ width: "auto" }}
        >
          All
        </button>

        {/* Category Buttons */}
        {categories &&
          categories.map((item) => {
            return (
              <button
                key={item._id}
                onClick={() => handleCategories(item._id)}
                className="btn btn-outline-primary filter-button mx-2"
                style={{ width: "auto" }}
              >
                {item.name}
              </button>
            );
          })}
      </div>

      {/* Images Grid Layout */}
      <div className="row">
        {images &&
          images.map((item) => {
            return (
              <div key={item._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="img-container">
                  {/* Image */}
                  <img
                    src={`http://localhost:8000/${item.name}`}
                    className="img-fluid img-thumbnail gallery-img"
                    alt={item.name}
                  />

                  {/* Download Button */}
                  <a
                    href={`http://localhost:8000/${item.name}`} // Image source
                    download={item.name} // Triggers download
                    className="btn btn-success download-btn w-100 mt-3"
                    aria-label="Download"
                  >
                    Download
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>

  );
};

export default Home;
