import React from 'react';
import styles from '../css/Items.module.css';

const Item = ({ item }) => {
  return (
    <div className={styles.itemContainer}>
      <img src={item.src} alt="" />
      <span>{item.name}</span>
    </div>
  );
};

export default Item;
