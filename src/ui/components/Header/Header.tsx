import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Header.module.scss';

export const Header = () => {
  const getLinkClassName = ({ isActive }: { isActive: boolean }) =>
    clsx(styles.link, isActive && styles.active);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={getLinkClassName}>
          ToDo
        </NavLink>
        <NavLink to="/list" className={getLinkClassName}>
          List
        </NavLink>
      </div>
    </header>
  );
};
