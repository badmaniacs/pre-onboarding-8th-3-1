import React, {useContext} from 'react';
import styled from 'styled-components';
import RecommendItemBox from './components/Recommend/RecommendItemBox';
import SearchBar from './components/Search/SearchBar';
import FocusContext from './store/focus-context';

const App = () => {
  const focusCtx = useContext(FocusContext);
  localStorage.clear();
  return ( 
    <AppWrapper>
      <SearchBar />
      {focusCtx.isFocused && <RecommendItemBox />}
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  background: #ace5fb;
  height: 1000px;
`;

export default App;
