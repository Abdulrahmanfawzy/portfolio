import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sadiqi from "../../Assets/Projects/sadiqi.png";
import liva from "../../Assets/Projects/liva.png";
import netflix from "../../Assets/Projects/netflix.png";
import quran from "../../Assets/Projects/quran.png";
import edrasa from "../../Assets/Projects/edrasa.png";
import dashboard from "../../Assets/Projects/dashboard.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <section style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </section>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sadiqi}
              imgStyle={{ height: "300px", objectFit: "cover" }} // Apply inline style here
              isBlog={false}
              title="sadiqi"
              description="A complete social media phase where users can register, log in, and manage their profiles, post text or images, interact with posts (like, dislike, save, favorite), share content, follow others, and see followed users’ posts on their home feed."
              ghLink="https://github.com/Abdulrahmanfawzy/Facebook-clone"
              demoLink="https://abdulrahmanfawzy.github.io/Facebook-clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={liva}
              imgStyle={{ height: "200px", objectFit: "cover" }} // Apply inline style here
              isBlog={false}
              style={{ height: "300px" }}
              title="Liva E-commerce"
              description="Developed a full-stack e-commerce platform using React.js, Node.js, Express.js, and MongoDB, featuring secure JWT-based authentication, global state management via Context API, smooth routing with React Router, and efficient API communication using Axios."
              ghLink="https://github.com/Abdulrahmanfawzy/liva-store"
              demoLink="https://abdulrahmanfawzy.github.io/liva-store"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              imgStyle={{ height: "300px", objectFit: "cover" }} // Apply inline style here
              isBlog={false}
              title="Netflix clone"
              description="Built a Netflix-inspired web application using React.js with a responsive Bootstrap UI, efficient state management via Redux Toolkit, secure Google login through Firebase Authentication, and real-time data storage using Firestore."
              ghLink="https://github.com/Abdulrahmanfawzy/netflix-clone"
              demoLink="https://abdulrahmanfawzy.github.io/netflix-clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quran}
              imgStyle={{ height: "300px", objectFit: "cover" }} // Apply inline style here
              isBlog={false}
              title="Quran App"
              description="Developed a feature-rich Quran web application using HTML, CSS, JavaScript, Bootstrap, and a RESTful API, offering complete Quran access with high-quality audio, tafsir and verse interpretation, advanced verse search, Islamic reading topics, and accurate location-based prayer times with Azan alerts."
              ghLink="https://github.com/Abdulrahmanfawzy/Quran-app"
              demoLink="https://abdulrahmanfawzy.github.io/Quran-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edrasa}
              imgStyle={{ height: "300px", objectFit: "cover" }} // Apply inline style here
              isBlog={false}
              title="Courses Plateform"
              description="Built a full-stack course platform similar to Udemy using the MERN Stack, featuring course creation and enrollment, student payments via Paymob, instructor revenue sharing, a dynamic dashboard for instructors to track earnings and courses, and a secure authentication system with role-based access."
              ghLink="https://github.com/Rim-sherif/courses-app"
              demoLink="https://edrasa.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              imgStyle={{ height: "300px", objectFit: "cover" }} // Apply inline style here
              isBlog={false}
              title="Developed a responsive employee management dashboard using React.js and JSON Server, enabling CRUD operations for employee data, dynamic filtering and sorting, role-based access, and an intuitive UI for efficient HR and admin management."
              ghLink="https://github.com/Abdulrahmanfawzy/eyegoai-dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
