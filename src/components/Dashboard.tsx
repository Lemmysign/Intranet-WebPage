import React from 'react';
import type { RecentlyVisited } from '../types';
import '../styles/Dashboard.css';

interface DashboardProps {
  recentlyVisited: RecentlyVisited[];
}

const Dashboard: React.FC<DashboardProps> = ({ recentlyVisited }) => {
  return (
    <div className="dashboard-grid">
      <div className="newsletter-card">
        <h2 className="newsletter-title">Latest News</h2>
        <div className="newsletter-content">
          <h3 className="newsletter-heading">Welcome to Evercare Intranet</h3>
          <p className="newsletter-text">
            We’re thrilled to introduce the Evercare Intranet — a new unified platform designed to make your work easier and more organized. The intranet brings together all company applications, tools, and essential links in one convenient location, helping declutter your desktop and improve productivity across teams.
          </p>
          <div className="newsletter-section">
            <h4 className="section-title">What's New:</h4>
            <ul className="newsletter-list">
              <li>Centralized access to all Evercare applications and systems</li>
              <li>Cleaner, faster, and more organized desktop experience</li>
              <li>Enhanced accessibility for tools and resources across departments</li>
              <li>Your centralized hub for company updates, tools, and applications</li>
            </ul>
          </div>
          <div className="newsletter-footer">
            <p className="newsletter-date">More updates coming soon</p>
          </div>
        </div>
      </div>

      <div className="dashboard-sidebar">
        <div className="widget-card">
          <h2 className="widget-title">Recently Visited</h2>
          <div className="recently-visited-list">
            {recentlyVisited.length === 0 ? (
              <p className="empty-message">No recent visits yet</p>
            ) : (
              recentlyVisited.slice(0, 5).map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="recent-item"
                >
                  <p className="recent-title">{item.title}</p>
                </a>
              ))
            )}
          </div>
        </div>

        <div className="widget-card2">
          <h2 className="widget-title">Upcoming Events</h2>
          <div className="events-list">
            <div className="event-item">
              <p className="event-title">System Maintenance</p>
              <p className="event-date">Nov 29, 11 PM - 2:00 AM</p>
            </div>
            <div className="event-item">
              <p className="event-title">--</p>
              <p className="event-date">--</p>
            </div>
            <div className="event-item">
              <p className="event-title">--</p>
              <p className="event-date">--</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;