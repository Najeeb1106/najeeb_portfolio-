import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/PrivacyPolicy.css";

export default function PrivacyPolicy() {
  // Update page Title and Meta Description for SEO
  useEffect(() => {
    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription ? metaDescription.getAttribute("content") : "";

    document.title = "KhataFlow Privacy Policy";
    if (metaDescription) {
      metaDescription.setAttribute("content", "Privacy Policy for the KhataFlow mobile application.");
    }

    // Scroll to top when page mounts
    window.scrollTo(0, 0);

    return () => {
      document.title = originalTitle;
      if (metaDescription) {
        metaDescription.setAttribute("content", originalDescription);
      }
    };
  }, []);

  const sections = [
    {
      title: "1. Introduction",
      content: (
        <>
          <p>
            Welcome to <strong>KhataFlow</strong>, a professional offline-first digital ledger and bookkeeping manager application built by Najeeb Ullah Tahir. We are committed to protecting your privacy and security.
          </p>
          <p>
            KhataFlow is designed with privacy at its core. It operates as an <strong>offline-first</strong> application, meaning your data remains under your absolute control on your physical device. Please read this Privacy Policy carefully to understand how we protect your information.
          </p>
        </>
      ),
    },
    {
      title: "2. Information We Collect",
      content: (
        <>
          <p>
            Because KhataFlow is an offline-first application, we do not require you to create an account, register, or log in to use the services. Consequently, <strong>we do not collect, upload, or transmit any personal or financial information</strong> to any external servers.
          </p>
          <p>
            We do not collect any user identifiers, and no telemetry or anonymous crash reports are transmitted. The application is completely isolated from any external databases or tracking analytics services.
          </p>
        </>
      ),
    },
    {
      title: "3. How We Use Information",
      content: (
        <>
          <p>
            Since we do not collect or store your personal or financial information, we cannot and do not use it for any purpose. Any configuration settings, ledger categories, or data profiles you create are processed exclusively on your device to execute app features.
          </p>
        </>
      ),
    },
    {
      title: "4. Local Data Storage",
      content: (
        <>
          <p>
            All financial records, transaction logs, customer profiles, cash flows, and configuration data are stored locally and encrypted on your device's internal memory.
          </p>
          <p>
            Your data is stored securely using the SQLite database engine. This data is entirely private to your device. We have no access to this database, and it is automatically deleted if you uninstall the application from your device.
          </p>
        </>
      ),
    },
    {
      title: "5. Permissions Used",
      content: (
        <>
          <p>
            To provide the requested bookkeeping and management features, KhataFlow requests specific system permissions on your mobile device. These permissions are used exclusively to perform local tasks:
          </p>
          <ul className="policy-list">
            <li>
              <strong>Notifications:</strong> Used only to deliver payment reminders, due dates, and transaction alert notifications configured by you inside the application. No notification content is sent or shared externally.
            </li>
            <li>
              <strong>Biometric Authentication:</strong> Optional security permission used to verify your identity (Face ID, Fingerprint, or PIN lock) when opening the application. Biometric verification is processed by your device's secure enclave; biometric templates never leave your device and are never accessible by the app.
            </li>
            <li>
              <strong>File/Storage Access:</strong> Required only when you explicitly trigger the "Export PDF" statement functionality to save, store, and share professional ledger statements on your local file directory.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "6. Data Sharing",
      content: (
        <>
          <p>
            <strong>We do not sell, trade, rent, or share user personal or financial data with any third parties.</strong>
          </p>
          <p>
            KhataFlow does not contain any third-party advertising SDKs, marketing trackers, or analytical integrations that could silently monitor your behavior or monetize your data.
          </p>
        </>
      ),
    },
    {
      title: "7. Data Security",
      content: (
        <>
          <p>
            The security of your financial logs is our priority. Since all data resides locally on your personal device, the security of your data depends on your device's security controls.
          </p>
          <p>
            We recommend enabling biometric locks (Face ID or fingerprint) or application PIN protection within the app settings, keeping your operating system updated, and avoiding root or jailbreak states that could compromise local device storage.
          </p>
        </>
      ),
    },
    {
      title: "8. User Rights",
      content: (
        <>
          <p>
            You hold absolute rights over your data. Since all information is stored locally on your device, you have the direct ability to:
          </p>
          <ul className="policy-list">
            <li>Access, view, and read all your financial transaction logs at any time.</li>
            <li>Modify, update, or edit any details inside your ledgers.</li>
            <li>Permanently delete transactions, customers, or the entire ledger database.</li>
            <li>Export your data into portable PDF files for offline backups.</li>
          </ul>
        </>
      ),
    },
    {
      title: "9. Children's Privacy",
      content: (
        <>
          <p>
            Our services do not target anyone under the age of 13. We do not knowingly collect or solicit personal data from children. Because no personal data is collected or uploaded by the application, KhataFlow does not present any privacy risks to children.
          </p>
        </>
      ),
    },
    {
      title: "10. Changes to This Privacy Policy",
      content: (
        <>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the updated Privacy Policy on this page.
          </p>
          <p>
            You are advised to review this page periodically for any modifications. Changes to this Privacy Policy are effective immediately when they are posted on this page.
          </p>
        </>
      ),
    },
    {
      title: "11. Contact Information",
      content: (
        <>
          <p>
            If you have any questions or feedback regarding this Privacy Policy or the security of the KhataFlow application, please contact us at our official developer support email:
          </p>
          <div className="contact-card-policy">
            <span className="contact-label-policy">Contact Email:</span>
            <a href="mailto:najeebullahtahir786@gmail.com" className="contact-email-link">
              najeebullahtahir786@gmail.com
            </a>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="privacy-page-wrapper">
      <div className="privacy-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="privacy-header"
        >
          <span className="policy-tag">Application Privacy</span>
          <h1 className="policy-main-title">
            KhataFlow <span className="policy-highlight">Privacy Policy</span>
          </h1>
          <p className="policy-effective-date">Effective Date: July 4, 2026</p>
          <div className="policy-header-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="privacy-card"
        >
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="privacy-section"
            >
              <h2 className="privacy-section-title">{section.title}</h2>
              <div className="privacy-section-content">{section.content}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
