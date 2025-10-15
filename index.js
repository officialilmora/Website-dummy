import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

function Card({ title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Sample content for {title}. Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Ilmora</h1>
        <div className="nav-links">
          <a href="#news">News</a>
          <a href="#education">Education</a>
          <a href="#business">Business</a>
          <a href="#sports">Sports</a>
          <a href="#food">Food</a>
          <a href="#videos">Videos</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to Ilmora</h2>
        <p>Your hub for news, education, trends, and more!</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      {/* Sections */}
      <section id="news" className="section">
        <h2>News</h2>
        <div className="card-container">
          <Card title="Breaking News 1" />
          <Card title="Breaking News 2" />
          <Card title="Breaking News 3" />
        </div>
      </section>

      <section id="education" className="section">
        <h2>Education</h2>
        <div className="card-container">
          <Card title="Learn React" />
          <Card title="Student Tips" />
          <Card title="Online Courses" />
        </div>
      </section>

      <section id="business" className="section">
        <h2>Business</h2>
        <div className="card-container">
          <Card title="Startup Ideas" />
          <Card title="Finance Tips" />
          <Card title="Career Growth" />
        </div>
      </section>

      <section id="sports" className="section">
        <h2>Sports</h2>
        <div className="card-container">
          <Card title="Cricket Highlights" />
          <Card title="Football Updates" />
          <Card title="Olympics 2025" />
        </div>
      </section>

      <section id="food" className="section">
        <h2>Food & Lifestyle</h2>
        <div className="card-container">
          <Card title="Delicious Recipes" />
          <Card title="Healthy Eating" />
          <Card title="Restaurant Reviews" />
        </div>
      </section>

      <section id="videos" className="section">
        <h2>Trending Videos</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Ilmora. All rights reserved.</p>
        <p>
          <a href="#">About</a> | <a href="#">Contact</a> |{" "}
          <a href="#">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
