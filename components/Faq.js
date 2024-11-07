"use client";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <Accordion
      defaultActiveKey="collapseTwo"
      className="accordion wow fadeInUp delay-0-4s"
      id="faq-accordion"
    >
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button"
            eventKey="collapseOne"
          >
            What is the difference between manual and automated testing?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseOne"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <p>
              Manual testing involves testing software manually to find defects, while automated testing uses tools and scripts to run tests more efficiently. I use both methods to ensure comprehensive quality assurance tailored to the project’s needs.
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button collapsed"
            eventKey="collapseTwo"
          >
            How do you ensure the quality of web applications?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseTwo"
          className="accordion-collapse"
        >
          <div className="accordion-body">
            <p>
              I implement a mix of manual and automated tests, focusing on frontend, backend, and API validation. My process includes test planning, execution, and detailed reporting to ensure applications meet high standards of functionality, performance, and security.
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button collapsed"
            eventKey="collapseThree"
          >
            What tools do you use for UX/UI design and prototyping?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseThree"
          className="accordion-collapse"
        >
          <div className="accordion-body">
            <p>
              I use tools like Figma for UX/UI design and prototyping, which allow for collaborative design processes and efficient feedback integration. These tools help create visually appealing and user-friendly interfaces tailored to the client’s needs.
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="accordion-item">
        <h5 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className="accordion-button collapsed"
            eventKey="collapseFour"
          >
            Can you help improve my website’s SEO and digital marketing strategy?
          </Accordion.Toggle>
        </h5>
        <Accordion.Collapse
          eventKey="collapseFour"
          className="accordion-collapse "
        >
          <div className="accordion-body">
            <p>
              Yes, I offer SEO optimization and digital marketing services to enhance online visibility and engagement. My approach includes keyword analysis, on-page optimization, and content strategies tailored to your target audience.
            </p>
          </div>
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
};
export default Faq;
