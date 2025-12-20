import styled from 'styled-components';

import type { Theme } from '../../../../models/theme';

export const ToDoListItemWrapper = styled.li<{ theme: Theme }>`
  width: 100%;
  min-height: 50px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.cardText};
  line-height: 22px;

  display: flex;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.card};
  border-radius: 5px;
  position: relative;
  box-shadow: 0 1px 2px rgba(44, 62, 80, 0.1);
  margin: 0 0 10px 0;
  padding: 14px;
  word-break: break-word;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:last-child {
    margin: 0;
  }
`;

export const ToDoListItemSpan = styled.span``;

export const ToDoListItemButtons = styled.div`
  width: 100px;
  height: 50px;
  display: flex;

  position: absolute;
  top: 0;
  right: 0;
`;

export const ToDoListItemButton = styled.button<{ $icon: string; theme: Theme }>`
  width: 50px;
  height: 50px;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border: 0;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  background-image: url(${({ $icon }) => $icon});
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:last-of-type:before {
    content: '';
    width: 1px;
    height: 30px;
    background: ${({ theme }) => theme.colors.border};

    position: absolute;
    top: 10px;
    left: 0;
    transition: background-color 0.3s ease;
  }
`;
