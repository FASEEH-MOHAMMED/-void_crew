import Link from "next/link";

export default function Team() {
  return (
    <div className="team-page">
      <h2>Meet $VOID_CREW</h2>
      <p>Our core members who make everything possible</p>

      <div className="team-cards">
        <div className="team-card">
          <h3>Faseeh Mohammed</h3>
          <Link
            href="https://www.linkedin.com/in/faseeh-mohammed-a-072247324/"
            target="_blank"
            className="linkedin-link"
          >
            LinkedIn Profile
          </Link>
          <p>Member 1</p>
        </div>

        <div className="team-card">
          <h3>Abdul Gaffoor Asjad</h3>
          <Link
            href="https://www.linkedin.com/in/abdul-gaffoor-asjad-b6b2412a6/"
            target="_blank"
            className="linkedin-link"
          >
            LinkedIn Profile
          </Link>
          <p>Member 2</p>
        </div>

        <div className="team-card">
          <h3>Adnan Tanzeel</h3>
          <Link
            href="https://www.linkedin.com/in/adnan-tanzeel-k-6a58bb2b1/"
            target="_blank"
            className="linkedin-link"
          >
            LinkedIn Profile
          </Link>
          <p>Member 3</p>
        </div>

        <div className="team-card">
          <h3>Masood Nawaz</h3>
          <Link
            href="https://www.linkedin.com/in/masood-nawaz-t-179065275/"
            target="_blank"
            className="linkedin-link"
          >
            LinkedIn Profile
          </Link>
          <p>Member 4</p>
        </div>
      </div>

      {/* 👤 Owner portfolio link */}
      <div className="owner-section">
        <p>Want to know more?</p>
        <Link href="/about" className="owner-link">
          Owner
        </Link>
      </div>
    </div>
  );
}
