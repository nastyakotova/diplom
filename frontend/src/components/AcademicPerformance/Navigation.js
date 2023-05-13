import * as React from 'react';
import styled from 'styled-components';
import { disciplines, filters, options } from './assets/consts';
import { useDispatch, useSelector } from 'react-redux';
import { loadDisciplines } from '../../store/data/actionsCreators';

const NavigationContainer = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  height: 100%;
`;

const NavigationButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 44px;
  margin: 24px 24px 0 24px;
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
  margin: 16px 24px;
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
  white-space: pre-wrap;
  padding: 12px 24px 0 24px;
  & h3 {
    font-size: 20px;
    line-height: 23px;
    color: #101010;
    margin-bottom: 4px;
  }
  & h4 {
    font-size: 14px;
    line-height: 16px;
    color: #264796;
    margin-bottom: 6px;
  }
  & p {
    font-size: 16px;
    line-height: 19px;
    color: rgba(16, 16, 16, 0.5);
    height: 72px;
    border-bottom: 1px solid rgba(16, 16, 16, 0.1);
  }
  &:hover {
    background: rgba(0, 55, 144, 0.03);
    cursor: pointer;
  }
`;

export const Navigation = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.user);
  const { disciplines } = useSelector((state) => state.data);
  const [currentOption, setCurrentOption] = React.useState(0);

  React.useEffect(() => {
    dispatch(loadDisciplines(id));
  }, [dispatch, id]);

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
                  <path d="M1 0.5L6 5.5L11 0.5" stroke="#101010" strokeOpacity="0.5" />
                </svg>
              </Filter>
            ))}
          </FiltersContainer>
          <Menu>
            {disciplines.map((discipline, index) => (
              <MenuItem key={index + discipline.title}>
                <h3>{discipline.title}</h3>
                <h4>{`Группа ${discipline.Group.groupName}, ${discipline.Group.Users.length} студентов`}</h4>
                <p>{`Дата аттестации: ${discipline.examDate
                  .slice(0, 10)
                  .split('-')
                  .reverse()
                  .join('.')}\nФорма аттестации: ${discipline.examType}`}</p>
              </MenuItem>
            ))}
          </Menu>
        </React.Fragment>
      ) : null}
    </NavigationContainer>
  );
};
