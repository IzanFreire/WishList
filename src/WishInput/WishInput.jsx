import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function WishInput({ onNewWish }) {
  const [newWish, setNewWish] = useState('');

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' && newWish !== '') {
      const newWishObject = {
        id: Date.now(),
        text: newWish,
        completed: false,
      };
      // insertando un nuevo objeto wish en los arrays wish que tiene el padre que es App.jsx
      onNewWish(newWishObject);
      setNewWish('');
    }
  };
  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New Wish:</legend>
      <input
        type="text"
        placeholder="My new Wish"
        onChange={(e) => setNewWish(e.target.value)}
        value={newWish}
        onKeyUp={handleKeyUp}
      />
    </fieldset>
  );
}

WishInput.propTypes = {
  onNewWish: PropTypes.func.isRequired,
};
