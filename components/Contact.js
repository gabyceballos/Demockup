const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-content-part pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-40">
                <span className="sub-title mb-15">Connect with Me</span>
                <h2>
                  Let's Discuss Your <span>Upcoming Projects</span>
                </h2>
                <p>
                  I’m here to collaborate and help bring your digital projects
                  to life with expertise in QA, UX/UI design, and web
                  development.
                </p>
              </div>
              <ul className="list-style-two">
                <li>7+ Years of Experience</li>
                <li>QA and UX/UI Expertise</li>
                <li>Web and Mobile Solutions</li>
                <li>Customized Project Support</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
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
  );
};

export default Contact;
