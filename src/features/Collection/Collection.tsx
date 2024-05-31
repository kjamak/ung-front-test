// components/Collection.tsx
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { fetchCollection } from '../../lib/cardsAPI';
import { Card as CardType } from '../../lib/common.types';

import {
  GridContainer,
  LoadingIndicator,
  EmptyState,
} from './Collection.styled';
import SortControls from '../../components/SortControls/SortControls';
import PlayerCard from '../PlayerCard/PlayerCard';
import { sortCollection } from '../../lib/helpers';

const Collection: React.FC = () => {
  const {
    data: collection,
    isLoading,
    error,
  } = useQuery<CardType[]>('collection', fetchCollection);
  const [sortCriteria, setSortCriteria] = useState<string>('firstname');
  const [sortedCollection, setSortedCollection] = useState<CardType[]>([]);

  useEffect(() => {
    if (collection?.length > 0) {
      setSortedCollection(sortCollection(sortCriteria, collection));
    }
  }, [collection, sortCriteria]);

  if (isLoading) {
    return <LoadingIndicator>Loading...</LoadingIndicator>;
  }

  if (error) {
    return <div>Error loading collection</div>;
  }

  if (!collection || collection?.length === 0) {
    return <EmptyState>No cards available</EmptyState>;
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortCriteria(e.target.value);
  };

  return (
    <>
      <SortControls
        sortCriteria={sortCriteria}
        onSortChange={handleSortChange}
      />
      <GridContainer>
        {sortedCollection?.map((card) => (
          <PlayerCard key={card.id} card={card} />
        ))}
      </GridContainer>
    </>
  );
};

export default Collection;
