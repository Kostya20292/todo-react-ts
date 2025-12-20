import { useDispatch, useSelector } from 'react-redux';

import { changeThemes } from '../../../bll/theme/themeSlice';
import type { RootState } from '../../../bll/store';

import {
  HeaderElement,
  HeaderContainer,
  StyledNavLink,
  HeaderToggleButton,
  ThemeToggle,
} from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);
  const isDark = theme.name === 'dark';

  const handleClick = () => {
    dispatch(changeThemes());
  };

  return (
    <HeaderElement>
      <HeaderContainer>
        <StyledNavLink to="/">ToDo</StyledNavLink>
        <StyledNavLink to="/list">List</StyledNavLink>
        <HeaderToggleButton>
          <ThemeToggle $isDark={isDark} onClick={handleClick} />
        </HeaderToggleButton>
      </HeaderContainer>
    </HeaderElement>
  );
};
