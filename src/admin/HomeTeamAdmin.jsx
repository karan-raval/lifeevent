import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPage = () => {
  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState({ name: "", post: "", text: "", image: "" });
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await axios.get("/teams");
      setTeams(response.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeam((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTeam = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/teams", newTeam);
      setTeams((prev) => [...prev, response.data]);
      setNewTeam({ name: "", post: "", text: "", image: "" });
      setSuccessMessage("Team successfully added!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error adding team:", error);
    }
  };

  const handleDelete = (team) => {
    setSelectedTeam(team);
    setShowConfirmation(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`/teams/${selectedTeam.id}`);
      setTeams((prev) => prev.filter((item) => item.id !== selectedTeam.id));
      setShowConfirmation(false);
      setSelectedTeam(null);
      setSuccessMessage("Team successfully deleted!");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Error deleting team:", error);
    }
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
    setSelectedTeam(null);
  };

  return (
    <>
      <div className="p-5 sm:p-48">
        <h1 className="text-2xl sm:text-3xl font-bold mb-5 text-center sm:text-left">
          Admin Panel - Manage Teams
        </h1>

        {/* Success Message */}
        {successMessage && <p className="text-green-500 mb-4 text-center">{successMessage}</p>}

        {/* Add Team Form */}
        <form
          onSubmit={handleAddTeam}
          className="mb-10 bg-white p-4 sm:p-6 mx-auto rounded shadow-md w-full sm:w-96"
        >
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-center sm:text-left">Add New Team</h2>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={newTeam.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Post</label>
            <input
              type="text"
              name="post"
              value={newTeam.post}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Text</label>
            <textarea
              name="text"
              value={newTeam.text}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={newTeam.image}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
          >
            Add Team
          </button>
        </form>

        {/* Team List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {teams.map((team) => (
            <div
              key={team.id}
              className="border rounded-lg p-4 sm:p-5 shadow-lg bg-white flex flex-col items-center"
            >
              <img
                src={team.image}
                alt={team.name}
                className="h-24 w-24 sm:h-32 sm:w-32 rounded-full mb-4"
              />
              <h3 className="text-lg sm:text-xl font-bold text-center">{team.name}</h3>
              <p className="text-gray-500 text-center">{team.post}</p>
              <p className="text-sm mt-2 text-center">{team.text}</p>
              <button
                onClick={() => handleDelete(team)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full sm:w-auto"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Confirmation Dialog */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96 mx-5">
              <h3 className="text-lg font-bold mb-4 text-center">
                Are you sure you want to delete "{selectedTeam?.name}"?
              </h3>
              <div className="flex justify-center sm:justify-end gap-4">
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Confirm Delete
                </button>
                <button
                  onClick={cancelDelete}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminPage;
