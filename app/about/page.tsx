export default function About() {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "900px",
        padding: "20px",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>$VOID_CREW</h1>

      <p style={{ marginBottom: "30px", color: "#bdbdbd" }}>
        This is Team <strong>$VOID_CREW</strong>, a passionate group of software
        engineers focused on building futuristic, scalable, and creative web
        applications.
      </p>

      {/* IMAGE GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1537432376769-00a5c9d8d3e1"
          alt="Software Engineer"
          style={imageStyle}
        />

        <img
          src="https://images.unsplash.com/photo-1603575448360-153f093fd8fe"
          alt="Developer Workspace"
          style={imageStyle}
        />

        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
          alt="Ghibli Style Art"
          style={imageStyle}
        />
      </div>
    </div>
  );
}

const imageStyle = {
  width: "100%",
  height: "250px",
  objectFit: "cover" as const,
  borderRadius: "12px",
  border: "1px solid #333",
};
