import React from 'react';
import Layout from '../components/Layout';
import '../assets/css/tos.css';

const ToS = () => {
  const onLoad = () => { };

  return (
    <Layout onLoad={onLoad} strict>
      <div className="tos">
        <h1>General Terms of Service for Drivelink</h1>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Drivelink.online (the "Service"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          Drivelink.online connects hotels with car rental agencies to facilitate car rental services for hotel guests. The Service may include various features and tools for managing and booking car rentals.
        </p>

        <h2>3. User Account</h2>
        <h3>Registration:</h3>
        <p>
          To use certain features of the Service, you may need to create an account. You agree to provide accurate and complete information during registration and to keep your account information updated.
        </p>
        <h3>Account Security:</h3>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.
        </p>

        <h2>4. User Conduct</h2>
        <h3>Prohibited Activities:</h3>
        <p>
          You agree not to use the Service for any unlawful purposes or to engage in any activity that may harm or interfere with the Service or other users. Prohibited activities include, but are not limited to:
        </p>
        <ul>
          <li>Uploading, sharing, or distributing content that is illegal, harmful, or violates the rights of others.</li>
          <li>Attempting to gain unauthorized access to the Service or other user accounts.</li>
          <li>Using the Service to transmit spam, viruses, or other harmful software.</li>
        </ul>

        <h2>5. Role of Drivelink.online</h2>
        <h3>Facilitator Only:</h3>
        <p>
          Drivelink.online acts solely as an intermediary between hotels and car rental agencies. We do not own, operate, or control any car rental services and are not responsible for any rental agreements, terms, or conditions set by car rental agencies.
        </p>
        <h3>No Warranty:</h3>
        <p>
          Drivelink.online does not warrant the quality, safety, or legality of the cars rented through the Service, nor do we endorse any specific car rental agency.
        </p>

        <h2>6. Responsibilities of Car Rental Agencies and Hotels</h2>
        <h3>Car Rental Agencies:</h3>
        <p>
          Car rental agencies are responsible for providing accurate information about their vehicles, availability, and rental terms. They are also responsible for maintaining the quality and safety of their vehicles.
        </p>
        <h3>Hotels:</h3>
        <p>
          Hotels are responsible for providing accurate information about their guests’ rental requests and ensuring that all necessary information is communicated to the car rental agencies.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Drivelink.online shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Service. This includes, but is not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses.
        </p>

        <h2>8. Dispute Resolution</h2>
        <p>
          Any disputes arising between hotels, car rental agencies, and users of the Service shall be resolved directly between the parties involved. Drivelink.online is not responsible for mediating or resolving any such disputes.
        </p>

        <h2>9. Privacy Policy</h2>
        <p>
          Your use of the Service is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information. <a href="[Insert link to Privacy Policy]">[Insert link to Privacy Policy]</a>
        </p>

        <h2>10. Termination</h2>
        <h3>Termination by You:</h3>
        <p>
          You may terminate your account at any time by contacting us or using the account settings feature.
        </p>
        <h3>Termination by Us:</h3>
        <p>
          We reserve the right to suspend or terminate your account and access to the Service at our discretion, without notice, if you violate these Terms or for any other reason.
        </p>

        <h2>11. Disclaimer of Warranties</h2>
        <p>
          The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. Drivelink.online does not warrant that the Service will be uninterrupted or error-free.
        </p>

        <h2>12. Changes to Terms</h2>
        <p>
          We may modify these Terms at any time. We will notify you of any changes by posting the updated Terms on the Service. Your continued use of the Service after any changes constitutes your acceptance of the new Terms.
        </p>

        <h2>13. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of Jordan, without regard to its conflict of law principles.
        </p>
      </div>
    </Layout>
  );
}

export default ToS;
