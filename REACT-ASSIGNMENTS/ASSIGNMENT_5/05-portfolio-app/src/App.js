import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import SkillsPage from "./Pages/SkillsPage/SkillsPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import Navbar from "./components/Navbar/Navbar";
import ProjectDetailPage from "./Pages/ProjectDetailPage/ProjectDetailPage";
import BlogPost from "./Pages/BlogPost/BlogPost";
import "./App.css";

function App() {
  const projects = [
    {
      id: 1,
      title: "Blockchain Project 1",
      description: "This is a description of the first blockchain project.",
      image:
        "https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg",
    },
    {
      id: 2,
      title: "Blockchain Project 2",
      description: "This is a description of the second blockchain project.",
      image:
        "https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg",
    },
    {
      id: 3,
      title: "Blockchain Project 3",
      description: "This is a description of the third blockchain project.",
      image:
        "https://editor.analyticsvidhya.com/uploads/49174Blockchain-Technology.png",
    },
    {
      id: 4,
      title: "Blockchain Project 4",
      description: "This is a description of the fourth blockchain project.",
      image:
        "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/blockchain-examples-applications%20%281%29.png",
    },
    {
      id: 4,
      title: "Blockchain Project 5",
      description: "This is a description of the fifth blockchain project.",
      image:
        "https://www.classicinformatics.com/hubfs/blockchain%20technology.png",
    },
    {
      id: 5,
      title: "Blockchain Project 6",
      description: "This is a description of the sixth blockchain project.",
      image:
        "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210206185509/Top-7-Interesting-Blockchain-Project-Ideas-for-Beginners.png",
    },
  ];

  const posts = [
    {
      id: 1,
      title: "Blog Post 1",
      preview: "This is a preview of blog post 1",
      date: "2023-07-16",
      image:
        "https://draft.dev/learn/assets/posts/request-3500_draftdev_cryptocurrency_1200x2280px_sample2.png",
      content: "This is the content of blog post 1",
    },
    {
      id: 2,
      title: "Blog Post 2",
      preview: "This is a preview of blog post 2",
      date: "2023-07-17",
      image:
        "https://www.cyberclaims.net/wp-content/uploads/2022/12/CC-Blog-Post-visuals-Crypto-Price-Predictions-1024x576.jpg",
      content: "This is the content of blog post 2",
    },
    // Add more posts as needed
  ];

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/projects"
            element={<ProjectsPage projects={projects} />}
          />
          <Route
            path="/projects/:id"
            element={<ProjectDetailPage projects={projects} />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/blog" element={<BlogPage posts={posts} />} />
          <Route path="/blog/:id" element={<BlogPost posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
