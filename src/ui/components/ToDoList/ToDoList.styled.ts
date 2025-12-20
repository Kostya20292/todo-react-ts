import styled from 'styled-components';

import type { Theme } from '../../../models/theme';

export const ToDoListContainer = styled.div`
  width: 100%;
  padding: 15px;
`;

export const ToDoListFailed = styled.ul<{ theme: Theme }>`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 0;
  list-style: none;

  &:empty:after {
    content: 'Нет задач на выполнение';
  }

  &:after {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textMuted};
    transition: color 0.3s ease;
  }
`;

export const ToDoListCompleted = styled.ul<{ theme: Theme }>`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 0;
  list-style: none;
  position: relative;
  padding: 60px 0 0 0;

  &:empty:after {
    content: 'Нет выполненых задач';
  }

  &:before {
    content: '';
    width: 150px;
    height: 1px;
    background: ${({ theme }) => theme.colors.border};
    transition: background-color 0.3s ease;

    position: absolute;
    top: 25px;
    left: calc(50% - 75px);
  }

  &:after {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textMuted};
    transition: color 0.3s ease;
  }
`;
