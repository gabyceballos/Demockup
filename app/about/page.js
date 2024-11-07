import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import DemockupLayout from "@/layout/DemockupLayout";
import Link from "next/link";

export const metadata = {
  title: "About Me",
};

const About = () => {
  return (
    <DemockupLayout onePageMenu={false} header={1} footer={2}>
      <PageBanner pageName={"About Me"} />

      <div className="about-main-image-area pt-40">
        <div className="container">
          <div className="about-main-image wow fadeInUp delay-0-5s">
            <img src="assets/images/about/about-page.jpg" alt="About Page" />
          </div>
        </div>
      </div>
      {/* About Page Area start */}
      <section className="about-page-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="about-page-content-part rel z-2 rmb-55">
                <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">About Me</span>
                  <h2>
                    Comprehensive <span>QA & UX Solutions</span> for Digital Products
                  </h2>
                  <p>
                    With expertise in manual and automated testing, UX/UI design, and web development, I provide a well-rounded approach to ensure digital products are both functional and user-friendly. My focus is on quality, usability, and seamless integration across platforms.
                  </p>
                </div>
                <ul className="list-style-one two-column pb-30 wow fadeInUp delay-0-2s">
                  <li>QA Testing (Manual & Automated)</li>
                  <li>UX/UI Design</li>
                  <li>Web Development</li>
                  <li>Digital Marketing</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-right-part wow fadeInLeft delay-0-3s">
                <div className="experience-years">
                  <b>7+</b>
                  <h5>Years Of Experience</h5>
                </div>
                <div className="about-btn one wow fadeInRight delay-0-4s">
                  <img src="assets/images/about/btn-image2.png" alt="Image" />
                  <h6>QA Specialist</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="about-btn two wow fadeInRight delay-0-5s">
                  <img src="assets/images/about/btn-image1.png" alt="Image" />
                  <h6>UX/UI Designers</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="about-btn three wow fadeInRight delay-0-4s">
                  <img src="assets/images/about/btn-image3.png" alt="Image" />
                  <h6>Marketing Digital</h6>
                  <i className="fas fa-arrow-right" />
                </div>
                <div className="dot-shape one">
                  <img
                    src="assets/images/shape/about-dots-two.png"
                    alt="Shape"
                  />
                </div>
                <div className="dot-shape two">
                  <img
                    src="assets/images/shape/about-dots-two.png"
                    alt="Shape"
                  />
                </div>
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
      {/* About Page Area end */}
      {/* Services Area start */}
      <Services extraClass={"bgc-black"} />
      {/* Services Area end */}
      {/* FAQs Area start */}
      <section id="faqs" className="faqs-area py-130 rpy-100 rel z-1">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="faq-image-part rmb-55 wow fadeInUp delay-0-2s">
          <div className="image-one">
            <img src="assets/images/faqs/faq-one.jpg" alt="FAQ" />
          </div>
          <div className="image-two">
            <img src="assets/images/faqs/faq-two.jpg" alt="FAQ" />
          </div>
          <div className="square-shape" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="faq-content-part rel z-2">
          <div className="section-title mb-40 wow fadeInUp delay-0-4s">
            <h2>
              Common Questions About My <span>QA & Design Services</span>
            </h2>
            <p>
              Here you’ll find answers to some of the most common questions about my services, including manual and automated testing, UX/UI design, and development strategies. My goal is to provide clarity and transparency for each step of the process.
            </p>
          </div>
          <Faq />
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

    </DemockupLayout>
  );
};
export default About;
