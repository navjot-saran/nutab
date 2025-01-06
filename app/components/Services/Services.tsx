import React, { useEffect, useState, useRef } from "react";
import "./Services.css";

const Services = () => {
  // Smooth scroll to the 'Contact' section when the button is clicked
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const viewportHeight = window.visualViewport?.height || document.documentElement.clientHeight || window.innerHeight;



  const services = [
    {
      label: "Software",
      title: "Custom Software, Made Simple",
      className: "software",
      text: "Need a smarter way to get things done? We create personalized software that solves your problems and makes your work easier. Whether it’s automating tasks or creating tools to fit your unique needs, we’ll deliver a solution that’s built just for you. Let’s build software that truly works for you!",
      iconPath: "/icons/softdev.svg",
    },
    {
      label: "Web",
      title: "Web & App Development, Built for You",
      className: "web",
      text: "Bring your ideas to life with a custom website or web app designed just for you. We craft modern, responsive platforms that are easy to use and built to make an impact. Whether it’s a website or a web app, let’s create something that works beautifully and stands out!",
      iconPath: "/icons/webdev.svg",
    },
    {
      label: "Mobile",
      title: "Mobile Apps That Work for You",
      className: "mobile",
      text: "Turn your ideas into powerful mobile apps that connect with your users. We create sleek, easy-to-use apps designed to fit your needs perfectly. Let’s build an app that makes life simpler and delivers real results!",
      iconPath: "/icons/mobiledev.svg",
    },
    {
      label: "Cloud",
      title: "Cloud Development, Scalable & Secure",
      className: "cloud",
      text: "Take your business to the next level with cloud solutions that grow with you. We build secure, flexible cloud applications that are easy to scale and manage. Let’s create a system that supports your future growth!",
      iconPath: "/icons/clouddev.svg",
    },
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [visibleAbove, setVisibleAbove] = useState<number[]>([]);
  const [visibleBelow, setVisibleBelow] = useState<number[]>([]);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll to a specific service
  const scrollToService = (index: number) => {
    const targetService = serviceRefs.current[index];
    if (targetService) {
      targetService.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Update visibleAbove and visibleBelow based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const servicePositions = serviceRefs.current.map((ref) =>
        ref ? ref.getBoundingClientRect().top : 0
      );

      const visibleAboveIndices: number[] = [];
      const visibleBelowIndices: number[] = [];

      // Determine which services are above and below the current one
      servicePositions.forEach((pos, index) => {
        if (pos < window.innerHeight * 0.1 && index < services.length - 1) {
          // Exclude the last card from visibleAbove
          visibleAboveIndices.push(index);
        }
        if (pos > window.innerHeight * 0.9) {
          visibleBelowIndices.push(index);
        }
      });

      setVisibleAbove(visibleAboveIndices);
      setVisibleBelow(visibleBelowIndices);

      // Update current service index
      const currentIndex = servicePositions.findIndex(
        (position) =>
          position >= viewportHeight * 0.01 &&
          position <= viewportHeight * 0.95
      );

      if (currentIndex !== -1) setCurrentServiceIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="services-container">
      <div className="navbars">
        {/* Top Navbar */}
        <div className="services-navbar top-navbar">
          {visibleAbove.map((index) => (
            <div key={index} className="above-button-wrapper">
              <button
                className={`above-button ${services[index].className}`}
                onClick={() => scrollToService(index)}
              >
                <div className="button-text">
                  {services[index].label}
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Navbar */}
        <div className="services-navbar bottom-navbar">
          {visibleBelow.map((index) => (
            <div key={index} className="below-button-wrapper">
              <button
                className={`below-button ${services[index].className}`}
                onClick={() => scrollToService(index)}
              >
                {services[index].label}
              </button>
            </div>
          ))}
        </div>

      </div>

      <div className="service-cards-container">
        {/* Services */}
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => {
              serviceRefs.current[index] = el;
            }}
            className={`service-card ${service.className} ${currentServiceIndex === index ? "active" : ""
              }`}
          >
            <div className="card-rows">
              <h1 className="service-title">{service.title}</h1>
              <img
                src={service.iconPath}
                alt={`${service.label} Icon`}
                className="service-icon"
              />
              <p className="service-text">{service.text}</p>
              <button
                className="learn-more-button"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>







    </div>
  );
};

export default Services;
