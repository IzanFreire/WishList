import React from 'react';

const wishes = [
  {
    id: 0,
    text: 'Travel to the moon',
    completed: false,
  },
  {
    id: 1,
    text: 'Travel to Barcelona',
    completed: true,
  },
  {
    id: 2,
    text: 'Play football',
    completed: true,
  },
];

export default function App() {
  return (
    <div>
      <h1>My Wishlist</h1>
      <fieldset>
        <legend>New Wish:</legend>
        <input
          type="text"
          placeholder="My new Wish"
        />
      </fieldset>

      <ul>
        {wishes.map((wish) => (
          <li key={wish.id}>
            <input type="checkbox" checked={wish.completed} id={wish.id} />
            <label htmlFor={wish.id}>{wish.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
