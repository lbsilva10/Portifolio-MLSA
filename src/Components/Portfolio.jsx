/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Supporter 🎉",
    description:
      "The Canal da Cloud Volunteer Career Mentorship project is a non-profit action that relies on the collaboration of the IT technical community to help people who want to develop themselves with technology. As a volunteer in this project, I seek to help people to walk promising paths in the technology industry. Through personalized guidance, I share knowledge, tips and insights on market trends, helping mentees to develop their skills and achieve their professional goals.<br>I believe that access to education and mentorship is essential for everyone to thrive in the ever-evolving technology landscape. By being part of this project, I have the opportunity to go a step further and make a difference in the lives of individuals looking to grow and excel in the world of technolog.",
    url: "https://www.youtube.com/c/CanaldaCloud"
  },
  {
    title: "Introdução Azure Virgggtual Desktop",
    description:
      "Azure Virtual Desktop is a cloud-based desktop virtualization service offered by Microsoft. It allows organizations to create and manage Windows virtual machines in Microsoft data centers and provide access to these machines to their users, allowing them to access their applications and work resources from anywhere using supported devices such as computers, tablets or smartphones.",
    url: "https://www.youtube.com/c/CanaldaCloud"
  }
]

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
