import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import type { Theme } from '../../../models/theme';

export const HeaderElement = styled.header<{ theme: Theme }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #fff;
  transition: opacity 0.2s ease;

  &.active {
    opacity: 0.5;
  }

  &:hover:not(.active) {
    opacity: 0.8;
  }
`;

export const HeaderToggleButton = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const ThemeToggle = styled.button<{ $isDark: boolean }>`
  position: relative;
  width: 56px;
  height: 28px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  background: ${({ $isDark }) =>
    $isDark
      ? 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)'
      : 'linear-gradient(135deg, #87ceeb 0%, #ffd700 100%)'};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: ${({ $isDark }) => ($isDark ? 'calc(100% - 25px)' : '3px')};
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${({ $isDark }) =>
      $isDark
        ? 'linear-gradient(135deg, #f5f3ce 0%, #d4d4aa 100%)'
        : 'linear-gradient(135deg, #fff9c4 0%, #ffd54f 100%)'};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2),
      ${({ $isDark }) => ($isDark ? 'inset -3px -2px 0 #bbb' : '0 0 8px rgba(255, 215, 0, 0.5)')};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::after {
    content: '✦';
    position: absolute;
    top: 6px;
    left: 8px;
    font-size: 8px;
    color: #fff;
    opacity: ${({ $isDark }) => ($isDark ? '1' : '0')};
    transition: opacity 0.3s ease;
    text-shadow: 10px 3px 0 #fff, 5px 10px 0 rgba(255, 255, 255, 0.6);
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15),
      0 0 0 3px rgba(255, 255, 255, 0.3);
  }
`;
