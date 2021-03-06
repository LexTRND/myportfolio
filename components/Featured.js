import React from "react";

const MyComponent = () => {
  return (
    <section className="featured">
      <div className="left">
        <div className="inner transition2">
          <p className="subtitle"> Featured Project</p>
          <a href="#" className="featured-title">
            BJ Painting
          </a>
          <p className="featured-desc">
            This was done for a painting company in Minneapolis. The site
            included a gallery to showcase work, and an app to let clients
            schedule appointments
          </p>
        </div>
      </div>
      <img className="right transition2" src="/featuredImage.png" alt="image" />
    </section>
  );
};

export default MyComponent;
