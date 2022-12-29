import React from 'react';
import styled from 'styled-components';
import {
  Calculator as CalculatorIcon,
  ClockHistory,
} from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: justfiy;
  padding-bottom: 10px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: 20px;

  &.active {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <StyledNavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        <CalculatorIcon />
      </StyledNavLink>
      <StyledNavLink
        to="/history"
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        <ClockHistory />
      </StyledNavLink>
    </Wrapper>
  );
};

export default Header;