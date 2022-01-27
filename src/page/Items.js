import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/Item';
import styles from '../css/Items.module.css';

const items = [
  { id: 0, name: 'Almond', src: '/images/ALMOND.png' },
  { id: 1, name: 'Coconut', src: '/images/COCONUT.png' },
  { id: 2, name: 'Macadamia', src: '/images/MACADAMIA.png' },
  { id: 3, name: 'Oat', src: '/images/OAT.png' },
  { id: 4, name: 'Soy', src: '/images/SOY.png' },
];

const Items = () => {
  return (
    <div className={styles.itemsContainer}>
      {items.map((item) => {
        return (
          <Link to={item.name} key={item.id}>
            <Item item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default Items;
