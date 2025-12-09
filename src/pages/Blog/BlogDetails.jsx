import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./BlogDetails.css";
import { blogData } from "../../data/blogData";

function BlogDetails() {
    const { slug } = useParams();
    const blog = blogData.find((item) => item.slug === slug);

    if (!blog) return <h2>Blog Not Found</h2>;

    const relatedPosts = blogData.filter(
        (item) => item.category === blog.category && item.slug !== blog.slug
    );



    //HERO SECTION ANIMATION 

    const heroRef = useRef(null);
    const [animateHero, setAnimateHero] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimateHero(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (heroRef.current) observer.observe(heroRef.current);

        return () => {
            if (heroRef.current) observer.unobserve(heroRef.current);
        };
    }, []);

    //

    const leftContentRef = useRef(null);
    const rightContentRef = useRef(null);

    const [animateLeft, setAnimateLeft] = useState(false);
    const [animateRight, setAnimateRight] = useState(false);

    /* LEFT CONTENT ANIMATION */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimateLeft(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (leftContentRef.current) observer.observe(leftContentRef.current);
    }, []);

    /* RIGHT CONTENT ANIMATION */
    useEffect(() => {
        const observer2 = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimateRight(true);
                    observer2.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (rightContentRef.current) observer2.observe(rightContentRef.current);
    }, []);

    return (
        <div>
            {/* ⭐ HERO SECTION ⭐ */}
            <section className="blog-details-hero" ref={heroRef}>
                <h1
                    className={`blog-details-hero-title ${animateHero ? "slide-left" : ""
                        }`}
                >
                    {blog.title}
                </h1>

                <p
                    className={`blog-details-hero-date ${animateHero ? "slide-left" : ""
                        }`}
                >
                    {blog.date}
                </p>
            </section>

            <div className="blog-detail-container">

                {/* LEFT SIDEBAR */}
                <aside className="blog-sidebar">
                    <div
                        className={`sidebar-inner ${animateLeft ? "slide-left" : ""}`}
                        ref={leftContentRef}
                    >
                        <h3 className="stagger">In This Article</h3>

                        <ul>
                            {blog.sections.map((section, i) => (
                                <li key={section.id} className="stagger" style={{ "--d": i }}>
                                    <HashLink smooth to={`#${section.id}`}>
                                        {section.heading}
                                    </HashLink>
                                </li>
                            ))}
                        </ul>

                        <div className="share-box stagger" style={{ "--d": blog.sections.length + 1 }}>
                            <h3>Share This Article</h3>
                            <div className="share-icons">
                                <a className="share-icon fb"><i className="fa-brands fa-facebook-f"></i></a>
                                <a className="share-icon ig"><i className="fa-brands fa-instagram"></i></a>
                                <a className="share-icon tw"><i className="fa-brands fa-x-twitter"></i></a>
                                <a className="share-icon yt"><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </aside>


                {/* MAIN CONTENT */}

                <div className="blog-main">
                    
                    <div
                        className={`blog-main-inner ${animateRight ? "slide-left" : ""}`}
                        ref={rightContentRef} >
                        {blog.sections.map((section, i) => (
                            <section
                                key={section.id}
                                id={section.id}
                                className="blog-section stagger"
                                style={{ "--d": i }}
                            >
                                <h2>{section.heading}</h2>

                                {section.id === "introduction" && (
                                    <img src={blog.image} alt={blog.title} className="intro-image" />
                                )}

                                {Array.isArray(section.content) ? (
                                    <ul className="blog-list">
                                        {section.content.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{section.content}</p>
                                )}

                            </section>
                        ))}

                        {/* RELATED POSTS */}
                        <div className="related-posts stagger" style={{ "--d": blog.sections.length + 1 }}>
                            <h3>Related Posts</h3>
                            {relatedPosts.length === 0 ? (
                                <p>No related posts found.</p>
                            ) : (
                                <div className="related-post-list">
                                    {relatedPosts.map((post) => (
                                        <div className="related-post-card" key={post.id}>
                                            <img src={post.image} alt={post.title} />
                                            <h4>{post.title}</h4>
                                            <p className="related-date">{post.date}</p>

                                            <HashLink to={`/blog/${post.slug}`} className="read-more-btn">
                                                Read More →
                                            </HashLink>

                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BlogDetails;
