import React, { useState, useEffect } from "react";

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    // Fetch data from the backend API
    fetch("http://localhost:5000/api/candidates")
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((error) => console.error("Error fetching candidates:", error));
  }, []);

  // Filter and sort candidates
  const filteredCandidates = candidates
    .filter(
      (candidate) =>
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.skills.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.yearsOfExperience - b.yearsOfExperience
        : b.yearsOfExperience - a.yearsOfExperience
    );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Candidate List Viewer</h1>
      <input
        type="text"
        placeholder="Search by name or skills..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        style={{
          marginLeft: "10px",
          padding: "10px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Sort by Experience ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Skills</th>
            <th style={tableHeaderStyle}>Years of Experience</th>
          </tr>
        </thead>
        <tbody>
          {filteredCandidates.map((candidate, index) => (
            <tr key={index} style={tableRowStyle}>
              <td style={tableCellStyle}>{candidate.name}</td>
              <td style={tableCellStyle}>{candidate.skills}</td>
              <td style={tableCellStyle}>{candidate.yearsOfExperience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styling for the table
const tableHeaderStyle = {
  border: "1px solid #ddd",
  padding: "10px",
  backgroundColor: "#f4f4f4",
  textAlign: "left",
};

const tableCellStyle = {
  border: "1px solid #ddd",
  padding: "10px",
};

const tableRowStyle = {
  borderBottom: "1px solid #ddd",
};

export default App;
