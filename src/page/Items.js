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
  { id: 5, name: 'Dairy', src: '/images/DAIRY.png' },
  { id: 6, name: 'Lactose', src: '/images/LACTOSE.png' },
];

const Items = () => {
  return (
    <div className={styles.itemsContainer}>
      {items.map((item) => {
        return (
          <Link to={item.name}>
            <Item item={item} key={item.id} />
          </Link>
        );
      })}
      <div className={styles.recipe}>
        <Link to="/recipe">
          <img src="/images/imageSlide2.jpg" alt="레시피" />
        </Link>
        <div className={styles.recipeFont}>
          <div>Recipe</div>
        </div>
      </div>
    </div>
  );
};

export default Items;
