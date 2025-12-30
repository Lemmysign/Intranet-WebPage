import React from 'react';
import { Star } from 'lucide-react';
import type { Card } from '../types';
import '../styles/Card.css';

interface CardComponentProps {
  card: Card;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onCardClick: (card: Card) => void;
  isHighlighted: boolean;
}

const CardComponent: React.FC<CardComponentProps> = ({
  card,
  isFavorite,
  onToggleFavorite,
  onCardClick,
  isHighlighted
}) => {
  // Check if it's an emoji (doesn't contain slashes, which indicates a path/URL)
  const isEmoji = !card.image.includes('/') && !card.image.startsWith('http');
  
  return (
    <div
      id={card.id}
      className={`card ${isHighlighted ? 'highlighted' : ''}`}
      onClick={() => onCardClick(card)}
    >
      <div className="card-content">
        <div className="card-header">
          <div className="card-image">
            {isEmoji ? (
              card.image
            ) : (
              <img 
                src={card.image} 
                alt={card.title} 
                className="card-icon-img"
                style={card.id === 'clinical-6' ? { width: '50px', height: '40px' } : undefined}
              />
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(card.id);
            }}
            className="favorite-button"
          >
            <Star className={`star-icon ${isFavorite ? 'favorited' : ''}`} />
          </button>
        </div>
        <h3 className="card-title">{card.title}</h3>
        <p className="card-description">{card.description}</p>
      </div>
    </div>
  );
};

export default CardComponent;