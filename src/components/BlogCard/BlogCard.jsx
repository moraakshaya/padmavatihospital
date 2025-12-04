import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

function BlogCard({ image, title, description, date, slug }) {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={image} alt={title} />
      </div>

      <div className="blog-card-content">
        <p className="blog-card-date">{date}</p>
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-desc">{description}</p>

        <Link to={`/blog/${slug}`}>
          <button className="blog-card-btn">Read More</button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
