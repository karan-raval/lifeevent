import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminService = () => {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    image: "",
    "wedding-type": "",
    text: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    axios
      .get("/services")
      .then((response) => setServices(response.data))
      .catch(() => setError("Error fetching services."));
  }, []);

  const handleAddService = () => {
    if (!newService.image || !newService["wedding-type"] || !newService.text) {
      setError("All fields are required.");
      return;
    }

    axios
      .post("/services", { ...newService })
      .then((response) => {
        setServices([...services, response.data]);
        setNewService({ image: "", "wedding-type": "", text: "" });
        setSuccess("Service added successfully!");
        setError("");
      })
      .catch(() => setError("Failed to add service."));
  };

  const handleDeleteService = (id) => {
    axios
      .delete(`/services/${id}`)
      .then(() => {
        setServices(services.filter((service) => service.id !== id));
        setSuccess("Service deleted successfully!");
        setError("");
        setDeleteId(null);
      })
      .catch(() => setError("Failed to delete service."));
  };

  return (
    <div className="pt-48 px-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Panel</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-center">Add New Service</h2>
        <div className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Image URL"
            value={newService.image}
            onChange={(e) =>
              setNewService({ ...newService, image: e.target.value })
            }
            className="border p-2 w-full rounded"
          />
          <input
            type="text"
            placeholder="Wedding Type"
            value={newService["wedding-type"]}
            onChange={(e) =>
              setNewService({ ...newService, "wedding-type": e.target.value })
            }
            className="border p-2 w-full rounded"
          />
          <textarea
            placeholder="Description"
            value={newService.text}
            onChange={(e) =>
              setNewService({ ...newService, text: e.target.value })
            }
            className="border p-2 w-full rounded"
          ></textarea>
          <button
            onClick={handleAddService}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Add Service
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2 text-center">Existing Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="border p-4 flex flex-col items-center bg-white shadow rounded"
            >
              <img
                src={service.image}
                alt={service["wedding-type"]}
                className="w-24 h-24 object-cover mb-2 rounded-full"
              />
              <h3 className="text-lg font-semibold text-center">
                {service["wedding-type"]}
              </h3>
              <p className="text-sm text-gray-500 mb-2 text-center">
                {service.text}
              </p>

              {deleteId === service.id ? (
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleDeleteService(service.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setDeleteId(null)}
                    className="bg-gray-500 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setDeleteId(service.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminService;
