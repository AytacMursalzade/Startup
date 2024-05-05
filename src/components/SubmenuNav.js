// Submenu.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSubmenu } from './actions';
import Card from './Card';

const Submenu = () => {
  const isSubmenuOpen = useSelector(state => state.isSubmenuOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeSubmenu());
  };

  return (
    <div className={`submenu ${isSubmenuOpen ? 'open' : ''}`} onMouseLeave={handleClose}>
      <Card />
    </div>
  );
};

export default Submenu;
