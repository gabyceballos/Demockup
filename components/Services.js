import Link from "next/link";

const Services = ({ extraClass }) => {
  const services = [
    {
      id: 1,
      title: "QA Manual Testing",
      text: "Ensuring quality through manual testing for frontend, backend, and APIs with detailed test plans.",
    },
    {
      id: 2,
      title: "QA Automated Testing",
      text: "Optimizing testing through automation for efficient and reliable test execution.",
    },
    {
      id: 3,
      title: "API & Backend Testing",
      text: "Validating APIs and backend services for performance, security, and reliability.",
    },
    {
      id: 4,
      title: "UX/UI Design",
      text: "Creating user-focused designs that enhance usability and visual appeal.",
    },
    {
      id: 5,
      title: "Web Development",
      text: "Building responsive, SEO-friendly websites using modern technologies.",
    },
    {
      id: 6,
      title: "Digital Marketing & Branding",
      text: "Boosting online presence with digital strategies and social media content.",
    },
  ];
  return (
    <section
      id="services"
      className={`services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1 ${extraClass}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Professional Services</span>
              <h2>
                My <span>Expertise</span> for Your Business Success
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div className="col-lg-6" key={service.id}>
              <div className="service-item wow fadeInUp delay-0-2s">
                <div className="number">
                  {service.id >= 9 ? service.id : `0${service.id}`}.
                </div>
                <div className="content">
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </div>
                <Link legacyBehavior href="/#">
                  <a className="details-btn">
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
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
export default Services;



export const Services2 = () => {
  return (
    <section
      id="services"
      className="services-area-two pt-130 rpt-100 pb-140 rpb-100 rel z-1"
    >
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="icon-asterisk-1" /> my services area
              </span>
              <h2>MY SERVICE AREA</h2>
            </div>
          </div>
        </div>
        <div className="services-two-wrap">
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service1.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#">WEBSITE DEvelopment</a>
            </h5>
            <div className="text">
              Welcome to our portfolio website! We are a prof printing company
              that offers a wide range of Lo rem ipsum dolor sit amet,
              consectetur
            </div>
            <ul className="list">
              <li>Ui/Ux Design</li>
              <li>Research</li>
              <li>Web &amp; Mobile app</li>
            </ul>
            <a href="#" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service2.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#">Digital Marketing</a>
            </h5>
            <div className="text">
              Welcome to our portfolio website! We are a prof printing company
              that offers a wide range of Lo rem ipsum dolor sit amet,
              consectetur
            </div>
            <ul className="list">
              <li>Ui/Ux Design</li>
              <li>Research</li>
              <li>Web &amp; Mobile app</li>
            </ul>
            <a href="#" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service3.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#">Front End DEvelopment</a>
            </h5>
            <div className="text">
              Welcome to our portfolio website! We are a prof printing company
              that offers a wide range of Lo rem ipsum dolor sit amet,
              consectetur
            </div>
            <ul className="list">
              <li>Ui/Ux Design</li>
              <li>Research</li>
              <li>Web &amp; Mobile app</li>
            </ul>
            <a href="#" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
          <div className="service-item-two wow fadeInUp delay-0-2s">
            <div className="icon">
              <img src="assets/images/icons/service4.png" alt="Icon" />
            </div>
            <h5 className="title">
              <a href="#">Joomla redesigning</a>
            </h5>
            <div className="text">
              Welcome to our portfolio website! We are a prof printing company
              that offers a wide range of Lo rem ipsum dolor sit amet,
              consectetur
            </div>
            <ul className="list">
              <li>Ui/Ux Design</li>
              <li>Research</li>
              <li>Web &amp; Mobile app</li>
            </ul>
            <a href="#" className="details-btn">
              <i className="fal fa-long-arrow-right" />
            </a>
          </div>
        </div>
        <div className="services-more-btn text-center pt-55 wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="services" className="theme-btn">
            Get more services
          </Link>
        </div>
      </div>
    </section>
  );
};
