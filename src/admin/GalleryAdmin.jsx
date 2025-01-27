import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [imageLink, setImageLink] = useState('');
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [deletingImage, setDeletingImage] = useState(null); // For toggling delete confirmation

  // Fetch gallery images on component mount
  useEffect(() => {
    axios
      .get('/Gallery')
      .then((response) => {
        setGallery(response.data);
      })
      .catch((error) => {
        setError('Error fetching images');
      });
  }, []);

  // Handle adding a new image
  const handleAddImage = () => {
    if (!imageLink) {
      setError('Please enter a valid image URL');
      return;
    }

    axios
      .post('/Gallery', { image: imageLink })
      .then((response) => {
        setSuccess('Image added successfully!');
        setImageLink('');
        setGallery([...gallery, { image: imageLink }]);
      })
      .catch((error) => {
        setError('Failed to add image');
      });
  };

  // Handle deleting an image
  const handleDeleteImage = (id) => {
    if (deletingImage === id) {
      // Confirm delete and delete image
      axios
        .delete(`/Gallery/${id}`)
        .then((response) => {
          setSuccess('Image deleted successfully!');
          setGallery(gallery.filter((image) => image._id !== id));
        })
        .catch((error) => {
          setError('Failed to delete image');
        });
      setDeletingImage(null); // Reset delete confirmation
    } else {
      // Show delete confirmation
      setDeletingImage(id);
    }
  };

  return (
    <>
      <div className="pt-48 px-5 sm:px-10 mb-10">
        <div style={{ padding: '20px' }} className="mb-10">
          <h1>Admin Panel</h1>

          {/* Input form to add a new image */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 mb-10">
            <input
              type="text"
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)}
              placeholder="Enter Image URL"
              className="p-2 w-full sm:w-96 border-2 border-blue-500 rounded-lg"
            />
            <button
              onClick={handleAddImage}
              className="text-lg mt-2 sm:mt-0 sm:mr-9 ml-5 rounded-xl hover:bg-green-500 hover:rounded-xl bg-blue-500 p-2 text-white font-semibold"
            >
              Add Image
            </button>
          </div>

          {/* Error and Success Messages */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

          {/* Display gallery with Delete option */}
          <h1 className="text-2xl font-bold text-center text-red-500 pt-10 mb-5">Admin Panel</h1>
          <h2 className="text-2xl font-bold text-center text-sky-400 pb-10 pt-10 mb-10">Image Gallery</h2>

          <div className="flex flex-wrap w-full gap-5 sm:gap-10 justify-center mb-10">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="h-[40vh] sm:h-[55vh] border-2 border-blue-500 justify-center w-full sm:w-[25.9%] mb-10"
              >
                <img
                  src={image.image}
                  alt={`Gallery Image ${index}`}
                  style={{ objectFit: 'cover' }}
                  className="h-full w-full"
                />
                {deletingImage === image._id ? (
                  <div className="flex flex-col sm:flex-row gap-2 p-2">
                    <button
                      onClick={() => handleDeleteImage(image._id)}
                      className="text-lg rounded-xl hover:bg-red-500 bg-green-500 p-2 text-white font-semibold"
                    >
                      Confirm Delete
                    </button>
                    <button
                      onClick={() => setDeletingImage(null)}
                      className="text-lg rounded-xl hover:bg-green-500 bg-red-500 p-2 text-white font-semibold"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleDeleteImage(image._id)}
                    className="hover:bg-red-500 rounded-[25vh] border-2 border-white text-lg font-bold transition duration-300 w-full p-2 mt-4"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
