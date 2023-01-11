import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../UI/Card';
import searchIcon from '../../assets/search_blue.png';
import FocusContext from '../../store/focus-context';
import FetchInputHandler from '../../api/FetchInputHandler';

const SearchBar = () => {
  // @TODO onFocus, onBlur 처리할 Context 만들기
  // focus, blur에 따라 context를 만들어 RecommendItemBox를 보일지 말지 결정한다.
  const ctx = useContext(FocusContext);
  // @TODO 입력을 받는 onChangeHanlder 함수 만들기
  // 검색값(State)이 변할 때마다 debounce 방식으로 API를 호출하는 effect hook 만들기

  // @TODO 캐싱을 테스트할 임시 useEffect , Handler
  const [input, setInput] = useState('');

  useEffect(() => {
    FetchInputHandler(input).then((res) => {console.log(res)});
  }, [input]);

  const testing = (e) => {
    setInput(e.target.value);
  };

  return (
    <SearchBarWrap>
      <Card>
        <SearchBarInput
          type="search"
          placeholder="질환명을 검색해주세요"
          onFocus={ctx.onFocus}
          onBlur={ctx.onBlur}
          onChange={testing}
          value={input}
        />
        <ImageWrap src={searchIcon} alt="검색" />
      </Card>
    </SearchBarWrap>
  );
};

const SearchBarInput = styled.input`
  height: 50px;
  width: 420px;
  bottom: 10px;
  left: 10px;
  position: relative;
  border: none;
  :focus {
    outline: none;
  }
`;

const SearchBarWrap = styled.div`
  width: 500px;
  height: 50px;
  top: 100px;
  position: relative;
  margin: auto;
`;

const ImageWrap = styled.img`
  width: 50px;
  height: 50px;
  top: 10px;
  left: 20px;
  position: relative;
  border-radius: 20px;
  grid-column: 1;
`;

export default SearchBar;
