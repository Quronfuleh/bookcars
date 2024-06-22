import React from 'react';
import Layout from '../components/Layout';
import '../assets/css/contact.css';

const Contact = () => {
  const onLoad = () => { };

  return (
    <Layout onLoad={onLoad} strict>
      <div className="contact">
        <h1>Contact Us</h1>
        <p>
          We are here to help! Whether you have questions, need support, or are interested in partnering with us, feel free to reach out. Our dedicated team is ready to assist you.
        </p>
        <h2>General Inquiries</h2>
        <p>
          For general questions and information, please email us at <a href="mailto:info@drivelinkjo.online">info@drivelinkjo.online</a>.
        </p>
        <h2>Customer Support</h2>
        <p>
          If you need assistance with your booking or have any issues using our service, our customer support team is here to help. Contact us at <a href="mailto:support@drivelinkjo.online">support@drivelinkjo.online</a>.
        </p>
        <h2>Partnership Opportunities</h2>
        <p>
          Interested in partnering with Drivelinkjo.online? We are always looking to collaborate with top-rated car rental agencies and hotels. Reach out to us at <a href="mailto:partners@drivelinkjo.online">partners@drivelinkjo.online</a>.
        </p>
        <h2>Business Hours</h2>
        <p>
          Our business hours are Sunday to Thursday, 9:00 AM to 5:00 PM. We strive to respond to all inquiries within 24 hours during business days.
        </p>
        <h2>Follow Us</h2>
        <p>
          Stay connected and follow us on social media for the latest updates and news:
        </p>
        <ul>
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
          <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
        </ul>
      </div>
    </Layout>
  );
}

export default Contact;
