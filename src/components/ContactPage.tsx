import React from 'react';
import '../styles/ContactPage.css';

const ContactPage: React.FC = () => {
  return (
    <main className="contact-main">
      <header className="contact-page-header">
        <h2>Contact Directory</h2>
      </header>
      <div className="contact-section-title">Departments</div>
      <section className="contact-grid">
        <div className="contact-card it">
          <h3>IT Department</h3>
          <div className="role">Technical support and system issues</div>
          <div className="info">
            <div>
              <strong>Email:</strong>{' '}
              <a href="mailto:servicedesk@evercare.ng">servicedesk@evercare.ng</a>
            </div>
            <div>
              <strong>Hotline:</strong> 2500
            </div>
            <div>
              <strong>Location:</strong> Room 1057, First Floor
            </div>
            <div>
              <strong>Hours:</strong> 24/7 Support
            </div>
          </div>
        </div>

        <div className="contact-card call">
          <h3>Call Center</h3>
          <div className="role">Patient inquiries and appointments</div>
          <div className="info">
            <div>
              <strong>Email:</strong>{' '}
              <a href="mailto:callcenter@evercare.ng">CallCenter@evercare.ng</a>
            </div>
            <div>
              <strong>Main Line:</strong> 1996, 1997, 1998, 1999
            </div>
            <div>
              <strong>Location:</strong> Room 1058, First Floor
            </div>
            <div>
              <strong>Hours:</strong> 24/7 Support
            </div>
          </div>
        </div>

        <div className="contact-card hr">
          <h3>Human Resources</h3>
          <div className="role">Employee services and support</div>
          <div className="info">
            <div>
              <strong>Email:</strong>{' '}
              <a href="mailto:hr@evercare.ng">hr@evercare.ng</a>
            </div>
            <div>
              <strong>Direct Line:</strong> 1555
            </div>
            <div>
              <strong>Location:</strong> HR Office, Sixth Floor
            </div>
            <div>
              <strong>Hours:</strong> 8:00 AM - 5:30 PM
            </div>
          </div>
        </div>

        <div className="contact-card records">
          <h3>Medical Records</h3>
          <div className="role">Employee services and records</div>
          <div className="info">
            <div>
              <strong>Email:</strong>{' '}
              <a href="mailto:MedicalRecords@evercare.ng">MedicalRecords@evercare.ng</a>
            </div>
            <div>
              <strong>Direct Line:</strong> 1322, 1313
            </div>
            <div>
              <strong>Location:</strong> Ground Floor, Fourth Floor
            </div>
            <div>
              <strong>Hours:</strong> 24/7 Support
            </div>
          </div>
        </div>

        <div className="contact-card ops">
          <h3>Operations</h3>
          <div className="role">Facility management and logistics</div>
          <div className="info">
            <div>
             
             
            </div>
            <div>
              <strong>Operations Desk:</strong> 1600
            </div>
            <div>
              <strong>Location:</strong> Room 1061 & 1062, First Floor
            </div>
            <div>
              <strong>Hours:</strong> 24/7 Operations
            </div>
          </div>
        </div>

        <div className="contact-card dining">
          <h3>Dining Room</h3>
          <div className="role">Catering and meal services</div>
          <div className="info">
            <div>
              <strong>Email:</strong>{' '}
              <a href="mailto:meals@evercare.ng">meals@evercare.ng</a>
            </div>
            <div>
              <strong>Direct Line:</strong> 3000
            </div>
            <div>
              <strong>Location:</strong> Cafeteria, Second Floor
            </div>
            <div>
              <strong>Hours:</strong> 24/7 Support
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;