import React from "react";
import styled from "styled-components";

import BookLoverImg from "../../assets/svg/book-lover.svg";

const SideImageContainer = styled.div`
  max-width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  background: rgb(22, 60, 119);
  background: linear-gradient(
    27deg,
    rgba(22, 60, 119, 1) 17%,
    rgba(28, 29, 45, 1) 100%
  );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
`;

const Image = styled.div`
  width: auto;
  height: 30em;

  img {
    width: auto;
    height: 100%;
  }
`;

export function SideImage(props) {
  return (
    <SideImageContainer>
      <Image>
        <img src={BookLoverImg} alt='' />
      </Image>
    </SideImageContainer>
  );
}
