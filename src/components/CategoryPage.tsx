import React from 'react';
import CardComponent from './CardComponent';
import type { Card } from '../types';
import '../styles/CategoryPage.css';

interface CategoryPageProps {
  category: string;
  cards: Card[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onCardClick: (card: Card) => void;
  highlightedCardId: string | null;
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  cards,
  favorites,
  onToggleFavorite,
  onCardClick,
  highlightedCardId
}) => {
  const favoriteCards = cards.filter(card => favorites.includes(card.id));
  const regularCards = cards.filter(card => !favorites.includes(card.id));

  return (
    <div className="category-page">
      {favoriteCards.length > 0 && (
        <div className="category-section">
          <h2 className="section-heading">Favorites</h2>
          <div className="cards-grid">
            {favoriteCards.map(card => (
              <CardComponent
                key={card.id}
                card={card}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
                onCardClick={onCardClick}
                isHighlighted={card.id === highlightedCardId}
              />
            ))}
          </div>
        </div>
      )}
      
      <div className="category-section">
        {favoriteCards.length > 0 && (
          <h2 className="section-heading">All {category}</h2>
        )}
        <div className="cards-grid">
          {regularCards.map(card => (
            <CardComponent
              key={card.id}
              card={card}
              isFavorite={false}
              onToggleFavorite={onToggleFavorite}
              onCardClick={onCardClick}
              isHighlighted={card.id === highlightedCardId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;