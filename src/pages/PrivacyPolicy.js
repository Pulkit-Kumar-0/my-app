import React from "react";
import "./Page.css";

function PrivacyPolicy() {
  return (
    <div className="page">
      <h2>Privacy Policy</h2>
      <div className="policy-content">
        <h3>1. Introduction</h3>
        <p>
          Welcome to MyApp. We are committed to protecting your personal
          information and your right to privacy.
        </p>

        <h3>2. Information We Collect</h3>
        <p>
          We collect personal information that you voluntarily provide to us
          when you register on the app or contact us.
        </p>

        <h3>3. How We Use Your Information</h3>
        <p>
          We use personal information collected via the app for various purposes
          including:
        </p>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To provide customer support</li>
        </ul>

        <h3>4. Data Security</h3>
        <p>
          We have implemented appropriate technical and organizational security
          measures designed to protect the security of any personal information
          we process.
        </p>

        <h3>5. Contact Us</h3>
        <p>
          If you have questions or comments about this policy, you may email us
          at privacy@myapp.com.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
