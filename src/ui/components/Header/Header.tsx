import { HeaderElement, HeaderContainer, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <HeaderElement>
      <HeaderContainer>
        <StyledNavLink to="/">ToDo</StyledNavLink>
        <StyledNavLink to="/list">List</StyledNavLink>
      </HeaderContainer>
    </HeaderElement>
  );
};
