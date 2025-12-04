import React, { useEffect, useRef, useState } from "react";
import "./Blog.css";
import BlogCard from "../../components/BlogCard/BlogCard";
import { blogData } from "../../data/blogData";   // <-- IMPORT HERE

function Blog() {
  const heroRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true); // animate only once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);


  const blogSectionRef = useRef(null);  // UNIQUE NAME
  const [animateBlogs, setAnimateBlogs] = useState(false); // UNIQUE NAME

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateBlogs(true);
            observer.unobserve(entry.target); // run only once
          }
        });
      },
      { threshold: 0.2 }
    );

    if (blogSectionRef.current) {
      observer.observe(blogSectionRef.current);
    }

    return () => {
      if (blogSectionRef.current) {
        observer.unobserve(blogSectionRef.current);
      }
    };
  }, []);


  return (
    <>
      {/* -------------------- HERO SECTION -------------------- */}
      <section className="blog-hero" ref={heroRef}>
        <h1 className={`blog-title ${animate ? "slide-left" : ""}`}>Our Blog</h1>

        <p className={`blog-subtitle ${animate ? "slide-left delay" : ""}`}>
          Explore the latest health tips, news, and expert advice from our experts.
        </p>
      </section>

      {/* ---------- BLOG CARDS ---------- */}
      <section className="blog-section" ref={blogSectionRef}>
        <div className="container">
          <div className={`blog-card-wrapper ${animateBlogs ? "animate" : ""}`}>
            {blogData.map((blog) => (
              <BlogCard
                slug={blog.slug}
                image={blog.image}
                title={blog.title}
                description={blog.description}
                date={blog.date}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
