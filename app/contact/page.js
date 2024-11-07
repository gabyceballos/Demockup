import PageBanner from "@/components/PageBanner";
import DemockupLayout from "@/layout/DemockupLayout";

export const metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <DemockupLayout onePageMenu={false} header={1} footer={2}>
      <PageBanner pageName={"Contact Me"} />
      {/* Contact Page Area start */}
      <section className="contact-page pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="contact-page-content rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Get in Touch</span>
                  <h2>
                    Let’s Discuss Your <span>Project Needs</span>
                  </h2>
                  <p>
                    Reach out to explore how I can support your digital projects with expertise in QA, UX/UI, and web development.
                  </p>
                </div>
                <h6>Main Office</h6>
                <div className="widget_contact_info mb-35">
                  <ul>
                    <li>
                      <i className="far fa-map-marker-alt" /> Madrid, Spain
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:gabrielaceballosh@gmail.com">gabrielaceballosh@gmail.com</a>
                    </li>
                    <li>
                      <i className="far fa-phone" />{" "}
                      <a href="tel:+34600714923">+34 600 714923</a>
                    </li>
                  </ul>
                </div>
                <h5>Follow Me</h5>
                <div className="social-style-one mt-10">
                  <a href="https://www.linkedin.com/in/gabriela-ceballos/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="https://www.instagram.com/demockup.gc/">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.behance.net/gabyceballos">
                    <i className="fab fa-behance" />
                  </a>
                  <a href="https://www.creative-tim.com/twcomponents/u/gabyceballos">
                    <img src="/assets/images/tailwind.svg" alt="Tailwind CSS" style={{ width: "20px", height: "20px" }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-page-form contact-form form-style-one wow fadeInUp delay-0-2s">
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  action="assets/php/form-process.php"
                  method="post"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <div className="input-icon-wrap">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Enter your full name"
                            required
                          />
                          <i className="far fa-user for-icon"></i>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <div className="input-icon-wrap">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                          />
                          <i className="far fa-envelope for-icon"></i>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <div className="input-icon-wrap">
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            className="form-control"
                            placeholder="Enter your phone number"
                            required
                          />
                          <i className="far fa-phone for-icon"></i>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <div className="input-icon-wrap">
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="form-control"
                            placeholder="Enter the subject"
                            required
                          />
                          <i className="far fa-edit for-icon"></i>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <div className="input-icon-wrap">
                          <textarea
                            id="message"
                            name="message"
                            className="form-control"
                            rows="5"
                            placeholder="Write your message"
                            required
                          ></textarea>
                          <i className="far fa-comment-alt for-icon"></i>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <button type="submit" className="theme-btn mt-10">
                        Send Us Message <i className="far fa-angle-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Contact Page Area end */}
    </DemockupLayout>
  );
};

export default page;
