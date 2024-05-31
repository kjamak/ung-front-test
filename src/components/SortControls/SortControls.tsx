// components/SortControls.tsx
import React from 'react';
import { ControlsContainer, RadioButton } from './SortControls.styled';

interface SortControlsProps {
  sortCriteria: string;
  onSortChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SortControls: React.FC<SortControlsProps> = ({
  sortCriteria,
  onSortChange,
}) => {
  return (
    <ControlsContainer>
      Sort By:
      <RadioButton>
        <input
          type="radio"
          value="firstname"
          checked={sortCriteria === 'firstname'}
          onChange={onSortChange}
        />
        First Name
      </RadioButton>
      <RadioButton>
        <input
          type="radio"
          value="lastname"
          checked={sortCriteria === 'lastname'}
          onChange={onSortChange}
        />
        Last Name
      </RadioButton>
      <RadioButton>
        <input
          type="radio"
          value="dob"
          checked={sortCriteria === 'dob'}
          onChange={onSortChange}
        />
        Date of Birth
      </RadioButton>
    </ControlsContainer>
  );
};

export default SortControls;
