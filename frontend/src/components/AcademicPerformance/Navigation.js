import * as React from 'react';
import styled from 'styled-components';
import { disciplines, filters, options } from './assets/consts';

const NavigationContainer = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  height: 100%;
  padding: 24px;
`;

const NavigationButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 44px;
  width: 100%;
`;

const NavigationButton = styled.div`
  color: rgba(16, 16, 16, 0.5);
  transition: all 0.1s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${(props) => {
    if (props.variant === 'active')
      return `
        border-bottom: 1px solid #264796;
        color: #264796;
      `;
    if (props.variant === 'basic')
      return `
        border-bottom: 1px solid rgba(16, 16, 16, 0.1);
        &:hover {
          border-bottom: 1px solid #264796;
          color: #264796;
          cursor: pointer;
        }
      `;
  }}
`;

const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 16px 0;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  gap: 16px;
  height: 49px;
  border: 1px solid rgba(16, 16, 16, 0.2);
  border-radius: 10px;
  position: relative;
  & svg {
    position: absolute;
    right: 16px;
  }
`;

const Menu = styled.div``;

const MenuItem = styled.div`
  & h3 {
    font-size: 20px;
    line-height: 23px;
    color: #101010;
  }
  & h4 {
    font-size: 14px;
    line-height: 16px;
    color: #264796;
  }
  & p {
    font-size: 16px;
    line-height: 19px;
    color: rgba(16, 16, 16, 0.5);
  }
`;

export const Navigation = () => {
  const [currentOption, setCurrentOption] = React.useState(0);

  return (
    <NavigationContainer>
      <NavigationButtonsContainer>
        {options.map((option, index) => (
          <NavigationButton
            key={option}
            variant={index === currentOption ? 'active' : 'basic'}
            onClick={() => setCurrentOption(index)}
          >
            {option}
          </NavigationButton>
        ))}
      </NavigationButtonsContainer>
      {currentOption === 0 ? (
        <React.Fragment>
          <FiltersContainer>
            {filters.map((filter, index) => (
              <Filter key={filter}>
                {filter}
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0.5L6 5.5L11 0.5" stroke="#101010" stroke-opacity="0.5" />
                </svg>
              </Filter>
            ))}
          </FiltersContainer>
          <Menu>
            {disciplines.map((discipline, index) => (
              <MenuItem key={index + discipline.title}>
                <h3>{discipline.title}</h3>
                <h4>{discipline.group}</h4>
                <p>{discipline.attestation}</p>
              </MenuItem>
            ))}
          </Menu>
        </React.Fragment>
      ) : null}
    </NavigationContainer>
  );
};
