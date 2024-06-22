import React from 'react';
import Layout from '../components/Layout';
import '../assets/css/about.css';

const About = () => {
  const onLoad = () => { };

  return (
    <Layout onLoad={onLoad} strict>
      <div className="about">
        <h1>About Us</h1>
        <p>
          Welcome to Drivelink, your trusted intermediary connecting hotels with premier car rental agencies. Our mission is to streamline the process of renting a vehicle for hotel guests, ensuring a seamless and enjoyable travel experience.
        </p>
        <h2>Who We Are</h2>
        <p>
          At Drivelink, we are passionate about travel and committed to providing exceptional service. Our platform brings together top-rated car rental agencies and leading hotels to offer guests a convenient way to book reliable transportation.
        </p>
        <h2>Our Vision</h2>
        <p>
          We envision a world where travel is effortless and enjoyable, where every hotel guest has access to safe, reliable, and convenient transportation options. We strive to be the bridge that connects guests to their destinations with ease.
        </p>
        <h2>Why Choose Us</h2>
        <ul>
          <li><strong>Trusted Partnerships:</strong> We work with reputable car rental agencies and hotels to ensure quality service.</li>
          <li><strong>User-Friendly Platform:</strong> Our intuitive platform makes it easy to find and book the perfect rental car.</li>
          <li><strong>Customer Support:</strong> Our dedicated support team is here to assist you every step of the way.</li>
          <li><strong>Commitment to Excellence:</strong> We are committed to continuous improvement and excellence in all we do.</li>
        </ul>
        <h2>Our Team</h2>
        <p>
          Our team is composed of travel enthusiasts and technology experts who are dedicated to enhancing your travel experience. We work tirelessly to ensure our platform is efficient, user-friendly, and reliable.
        </p>
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Our team is here to help! Contact us at <a href="mailto:support@drivelink.online">support@drivelinkjo.com</a>.
        </p>
        <h2>Join Us</h2>
        <p>
          Are you a car rental agency looking to partner with us? We would love to hear from you. Join our network and expand your reach to more customers through our platform. Get in touch with us at <a href="mailto:partners@drivelinkjo.com">partners@drivelinkjo.com</a>.
        </p>
      </div>
    </Layout>
  );
}

export default About;
