import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending POST request to backend
      const response = await axios.post("http://localhost:5000/submit", { name });
      alert(response.data.message); // Show alert with message from backend
    } catch (error) {
      alert("Error: " + (error.response ? error.response.data.message : "Something went wrong!"));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Submit Your Name</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
