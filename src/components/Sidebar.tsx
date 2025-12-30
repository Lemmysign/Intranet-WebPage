import React from 'react';
import { Search } from 'lucide-react';
import { navItems } from '../data/navItems';
import type { Card } from '../types';
import logo from '../images/logo evercare.png';
import '../styles/Sidebar.css';

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchSuggestions: Card[];
  onSearchSuggestionClick: (card: Card) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activePage,
  setActivePage,
  searchQuery,
  setSearchQuery,
  searchSuggestions,
  onSearchSuggestionClick
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Evercare Logo" className="logo-image" />
      </div>

      <div className="sidebar-search">
        <div className="search-input-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        
        {searchSuggestions.length > 0 && (
          <div className="search-suggestions">
            {searchSuggestions.map(card => (
              <div
                key={card.id}
                onClick={() => onSearchSuggestionClick(card)}
                className="search-suggestion-item"
              >
                <p className="suggestion-title">{card.title}</p>
                <p className="suggestion-category">{card.category}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <button
                  onClick={() => setActivePage(item.name)}
                  className={`nav-button ${activePage === item.name ? 'active' : ''}`}
                >
                  <Icon className="nav-icon" />
                  <span>{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;