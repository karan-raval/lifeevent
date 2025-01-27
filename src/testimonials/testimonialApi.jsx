import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetch("/testimonials")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setTestimonials(data))
      .catch(() => setError("Failed to fetch testimonials"));
  }, []);

  const handleAddTestimonial = () => {
    if (!image || !text || !name || !location) {
      setError("Please fill all fields");
      return;
    }

    const newTestimonial = { image, text, name, location };

    axios
      .post("/testimonial", newTestimonial)
      .then(() => {
        setSuccess("Testimonial added successfully");
        setTestimonials([...testimonials, newTestimonial]);
        setImage("");
        setText("");
        setName("");
        setLocation("");
      })
      .catch(() => setError("Failed to add testimonial"));
  };

  const handleDeleteTestimonial = (id) => {
    axios
      .delete(`/Testimonial/${id}`)
      .then(() => {
        setSuccess("Testimonial deleted successfully");
        setTestimonials(testimonials.filter((item) => item.id !== id));
      })
      .catch(() => setError("Failed to delete testimonial"));
  };

  return (
    <div className="pt-48 px-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Panel</h1>

      {/* Input form */}
      <div className="mb-6 flex flex-wrap gap-2 justify-center">
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          className="border p-2 w-full sm:w-auto"
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Testimonial Text"
          className="border p-2 w-full sm:w-auto"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2 w-full sm:w-auto"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border p-2 w-full sm:w-auto"
        />
        <button
          onClick={handleAddTestimonial}
          className="bg-blue-500 text-white px-4 py-2 w-full sm:w-auto"
        >
          Add Testimonial
        </button>
      </div>

      {/* Error and Success Messages */}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}

      {/* Display testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border p-4 flex flex-col items-center bg-white shadow rounded"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-24 w-24 rounded-full mb-2"
            />
            <p className="text-center">{testimonial.text}</p>
            <h3 className="font-bold text-center">{testimonial.name}</h3>
            <p className="text-gray-500 text-center">{testimonial.location}</p>
            <button
              onClick={() => handleDeleteTestimonial(testimonial.id)}
              className="bg-red-500 text-white px-4 py-2 mt-2 w-full sm:w-auto"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
