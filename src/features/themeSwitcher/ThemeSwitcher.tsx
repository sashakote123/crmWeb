import { useDispatch } from 'react-redux';

import { useState } from 'react';

import { toggleTheme } from '../../app/store/themeSlice';
import dark from './assets/dark.svg';
import light from './assets/light.svg';
import styles from './styles.module.css';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const [currentTheme, setCurrentTheme] = useState<boolean>(true);
  const [left, setLeft] = useState<number>(0);

  const changeTheme = () => {
    setLeft(currentTheme ? 37 : 0);
    setCurrentTheme(currentTheme ? false : true);

    dispatch(toggleTheme());
  };
  return (
    <div
      onClick={changeTheme}
      className={styles.switcher}
      style={{ backgroundColor: `${!currentTheme ? '#001233' : '#efefef'}` }}
    >
      <div style={{ transform: `translateX(${left}px)` }} className={styles.slider}>
        <img src={currentTheme ? light : dark} alt="slider" />
      </div>
    </div>
  );
};
export default ThemeSwitcher;
