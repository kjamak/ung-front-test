import { Card } from './common.types';

export const sortCollection = (
  sortCriteria: string,
  collection: Card[]
): Card[] => {
  return [...collection].sort((a, b) => {
    console.log(collection);
    if (sortCriteria === 'dob') {
      return (
        new Date(a.player.birthday).getTime() -
        new Date(b.player.birthday).getTime()
      );
    } else if (sortCriteria === 'lastname') {
      console.log('here');
      return a.player.lastname.localeCompare(b.player.lastname);
    } else {
      return a.player.firstname.localeCompare(b.player.firstname);
    }
  });
};
