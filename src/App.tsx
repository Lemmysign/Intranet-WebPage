import React, { useState, useEffect } from 'react';
import './components/Sidebar';
import  './components/Dashboard';
import  './components/CategoryPage';
import './components/ContactPage';
import './data/cardsData';
import  './types';
import './styles/App.css';
import type { Card, RecentlyVisited } from './types';
import { cardsData } from './data/cardsData';
import CategoryPage from './components/CategoryPage';
import Dashboard from './components/Dashboard';
import ContactPage from './components/ContactPage';
import Sidebar from './components/Sidebar';

const STORAGE_TIMESTAMP_KEY = 'storageTimestamp';
const ONE_HOUR_MS = 60 * 60 * 1000; // 1 hour in milliseconds

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('Dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentlyVisited, setRecentlyVisited] = useState<RecentlyVisited[]>([]);
  const [searchSuggestions, setSearchSuggestions] = useState<Card[]>([]);
  const [highlightedCardId, setHighlightedCardId] = useState<string | null>(null);

  // Check if recentlyVisited should be cleared based on timestamp
  const checkAndClearStorage = () => {
    const timestamp = localStorage.getItem(STORAGE_TIMESTAMP_KEY);
    const now = Date.now();

    if (timestamp) {
      const lastSaved = parseInt(timestamp, 10);
      const timeDiff = now - lastSaved;

      // If more than 1 hour has passed, clear only recentlyVisited
      if (timeDiff > ONE_HOUR_MS) {
        localStorage.removeItem('recentlyVisited');
        setRecentlyVisited([]);
        
        // Set new timestamp
        localStorage.setItem(STORAGE_TIMESTAMP_KEY, now.toString());
        return true; // Storage was cleared
      }
    } else {
      // First time, set timestamp
      localStorage.setItem(STORAGE_TIMESTAMP_KEY, now.toString());
    }
    return false; // Storage not cleared
  };

  // Load from localStorage on mount and check if it should be cleared
  useEffect(() => {
    const wasCleared = checkAndClearStorage();

    if (!wasCleared) {
      const storedFavorites = localStorage.getItem('favorites');
      const storedRecent = localStorage.getItem('recentlyVisited');
      
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
      if (storedRecent) {
        setRecentlyVisited(JSON.parse(storedRecent));
      }
    }

    // Set up interval to check every minute
    const intervalId = setInterval(() => {
      checkAndClearStorage();
    }, 60000); // Check every minute

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  // Save recently visited to localStorage and update timestamp
  useEffect(() => {
    if (recentlyVisited.length > 0) {
      localStorage.setItem('recentlyVisited', JSON.stringify(recentlyVisited));
      localStorage.setItem(STORAGE_TIMESTAMP_KEY, Date.now().toString());
    }
  }, [recentlyVisited]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchSuggestions([]);
      return;
    }

    const filtered = cardsData.filter((card: { title: string; description: string; }) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchSuggestions(filtered);
  }, [searchQuery]);

  const toggleFavorite = (cardId: string) => {
    setFavorites(prev =>
      prev.includes(cardId)
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  const handleCardClick = (card: Card) => {
    // Add to recently visited
    const newRecent: RecentlyVisited = {
      id: card.id,
      title: card.title,
      link: card.link
    };

    setRecentlyVisited(prev => {
      const filtered = prev.filter(item => item.id !== card.id);
      const updated = [newRecent, ...filtered].slice(0, 10);
      return updated;
    });

    // Open link in new tab
    if (card.link) {
      window.open(card.link, '_blank');
    }
  };

  const handleSearchSuggestionClick = (card: Card) => {
    setActivePage(card.category);
    setSearchQuery('');
    setSearchSuggestions([]);
    
    // Set the highlighted card
    setHighlightedCardId(card.id);
    
    setTimeout(() => {
      const element = document.getElementById(card.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
    
    // Remove highlight after 3 seconds
    setTimeout(() => {
      setHighlightedCardId(null);
    }, 3000);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard':
        return <Dashboard recentlyVisited={recentlyVisited} />;
      case 'Contact':
        return <ContactPage />;
      case 'Clinical Software':
      case 'Admin Software':
      case 'Financial Software':
      case 'Service Software':
        return (
          <CategoryPage
            category={activePage}
            cards={cardsData.filter((card: { category: string; }) => card.category === activePage)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onCardClick={handleCardClick}
            highlightedCardId={highlightedCardId}
          />
        );
      default:
        return <Dashboard recentlyVisited={recentlyVisited} />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchSuggestions={searchSuggestions}
        onSearchSuggestionClick={handleSearchSuggestionClick}
      />
      
      <div className="main-content">
        <div className="content-wrapper">
          <h1 className="page-title">{activePage}</h1>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;