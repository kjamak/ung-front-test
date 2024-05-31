// components/CreateCard.tsx
import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { NewCard } from '../../lib/common.types';
import {
  FormContainer,
  Input,
  Button,
  ErrorMessage,
  SuccessMessage,
} from './CreateCard.styled';
import { createCard } from '../../lib/cardsAPI';

const CreateCard: React.FC = () => {
  const [formData, setFormData] = useState<NewCard>({
    player: {
      firstname: '',
      lastname: '',
      birthday: '',
      image: '',
    },
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const queryClient = useQueryClient();

  const mutation = useMutation(createCard, {
    onSuccess: () => {
      queryClient.invalidateQueries('collection');
      setSuccess('Card created successfully!');
      setFormData({
        player: {
          firstname: '',
          lastname: '',
          birthday: '',
          image: '',
        },
      });
      setError(null);
    },
    onError: () => {
      setError('Failed to create card. Please try again.');
      setSuccess(null);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      player: {
        ...prevState.player,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Client-side validation
    if (
      !formData.player.firstname ||
      !formData.player.lastname ||
      !formData.player.birthday ||
      !formData.player.image
    ) {
      setError('All fields are required.');
      return;
    }

    mutation.mutate(formData);
  };

  return (
    <FormContainer>
      <h2>Create a New Card</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={formData.player.firstname}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={formData.player.lastname}
          onChange={handleChange}
        />
        <Input
          type="date"
          name="birthday"
          placeholder="Birthday"
          value={formData.player.birthday}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.player.image}
          onChange={handleChange}
        />
        <Button type="submit">Create Card</Button>
      </form>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
    </FormContainer>
  );
};

export default CreateCard;
