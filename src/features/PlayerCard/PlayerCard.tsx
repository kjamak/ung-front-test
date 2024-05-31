// components/PlayerCard.tsx
import React, { useEffect, useState } from 'react';
import { Card as CardType } from '../../lib/common.types';
import { format } from 'date-fns';
import {
  CardContainer,
  PlayerImage,
  PlayerName,
  PlayerDOB,
  ImageLoadingIndicator,
} from './PlayerCard.styled';

interface PlayerCardProps {
  card: CardType;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ card }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const playerImageUrl = `https://images.fotmob.com/image_resources/playerimages/${card.id}.png`;

  useEffect(() => {
    const img = new Image();
    img.src = playerImageUrl;
    img.onload = () => setImageLoaded(true);
  }, [playerImageUrl]);
  return (
    <CardContainer>
      {!imageLoaded && <ImageLoadingIndicator />}
      {imageLoaded && (
        <PlayerImage
          src={playerImageUrl}
          alt={`${card.player.firstname} ${card.player.lastname}`}
        />
      )}
      <PlayerName>{`${card.player.firstname} ${card.player.lastname}`}</PlayerName>
      <PlayerDOB>
        {format(new Date(card.player.birthday), 'MMMM d, yyyy')}
      </PlayerDOB>
    </CardContainer>
  );
};

export default PlayerCard;
