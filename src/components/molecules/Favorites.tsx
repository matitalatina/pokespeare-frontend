import React from "react";
import styled from "styled-components";
import Div from "../atoms/Div";
import Chip from "../atoms/Chip";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
`;

const FadedTitle = styled(Div)`
  opacity: 0.4;
`;

interface FavoritesProp {
  favorites: string[];
  onClick: (favorite: string) => void,
  onRemove: (favorite: string) => void,
}

const Favorites = ({ favorites, onClick, onRemove }: FavoritesProp) => {
  if (favorites.length === 0) {
    return <FadedTitle>You have no favorites, yet</FadedTitle>;
  }
  return (
    <Wrapper>
      {favorites.map(f => <Chip onClick={() => onClick(f)} onRemove={() => onRemove(f)}>{f}</Chip>)}
    </Wrapper>
  );
}

export default Favorites;