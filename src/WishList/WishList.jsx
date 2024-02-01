import React from 'react';
import PropTypes from 'prop-types';
import WishItem from './WishItem';

export default function WishList({ wishes, setWishes }) {
  // ({ wishes })=>(props) otra manera de hacerlo

  const onCompletedChange = (checked, i) => { // esto no estaria si se hace de la otra manera
    const tempWishes = [...wishes];
    tempWishes[i].completed = checked;
    setWishes(tempWishes);
  };

  return (
    <ul className="wish-list">
      {wishes.map((wish, i) => ( // props.wishes... la otra manera de hacerlo
        <WishItem
          key={wish.id}
          wish={wish}
          onCompletedChange={(checked) => {
            onCompletedChange(checked, i); // esta linea se quitaria si se hace de la manera de abaj
            // const tempWishes = [...wishes];
            // tempWishes[i].completed = checked;
            //  setWishes(tempWishes);
          }}
        />
      ))}
    </ul>
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  })),
  setWishes: PropTypes.func,
};

WishList.defaultProps = {
  wishes: [],
  setWishes: () => { },
};
