import { useEffect, useState } from "react";

function App() {
  const [cargo, setCargo] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch + sort data
  const fetchData = () => {
    fetch("http://127.0.0.1:5000/api/cargo")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => {
          if (a.destination === "Earth") return 1;
          if (b.destination === "Earth") return -1;
          return b.weight - a.weight;
        });
        setCargo(sortedData);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Sync button logic
  const handleSync = () => {
    setLoading(true);

    setTimeout(() => {
      fetchData();
      setLoading(false);
    }, 2500);
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        textAlign: "center",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#333" }}>
        🚀 Intergalactic Cargo Dashboard
      </h1>

      {/* Total Records */}
      <p style={{ marginBottom: "10px" }}>
        Total Cargo Records: {cargo.length}
      </p>

      {/* Sync Button */}
      <button
        onClick={handleSync}
        disabled={loading}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          backgroundColor: loading ? "#aaa" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Aligning quantum drives..." : "Sync Data"}
      </button>

      <table
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          width: "70%",
          backgroundColor: "white",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <thead style={{ backgroundColor: "#007bff", color: "white" }}>
          <tr>
            <th style={{ padding: "10px" }}>ID</th>
            <th style={{ padding: "10px" }}>Weight</th>
            <th style={{ padding: "10px" }}>Destination</th>
          </tr>
        </thead>

        <tbody>
          {cargo.map((item, index) => (
            <tr
              key={index}
              style={{
                backgroundColor:
                  item.destination === "Earth" ? "#ffe6e6" : "white",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f1f1f1")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  item.destination === "Earth" ? "#ffe6e6" : "white")
              }
            >
              <td style={{ padding: "10px" }}>{item.cargo_id}</td>
              <td style={{ padding: "10px" }}>{item.weight}</td>
              <td style={{ padding: "10px" }}>{item.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;