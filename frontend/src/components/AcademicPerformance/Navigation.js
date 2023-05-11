import * as React from 'react';
import styled from 'styled-components';
import { options } from './assets/consts';

const NavigationContainer = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  height: 100%;
  padding: 24px;
`;

const NavigationButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  height: 44px;
  width: 100%;
`;

const NavigationButton = styled.div`
  color: rgba(16, 16, 16, 0.5);
  transition: all 0.1s ease-in-out;
  display: flex;
  align-items: center;
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

export const Navigation = () => {
  const [currentOption, setCurrentOption] = React.useState(0);

  return (
    <NavigationContainer>
      <NavigationButtonsContainer>
        {options.map((option, index) => (
          <NavigationButton
            key={option}
            variant={index === currentOption ? 'active' : 'basic'}
            // style={index === 1 ? { marginLeft: 50 } : {}}
            onClick={() => setCurrentOption(index)}
          >
            {option}
          </NavigationButton>
        ))}
      </NavigationButtonsContainer>
    </NavigationContainer>
  );
};
