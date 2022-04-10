import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 4;
  display: flex;
  margin: 0 auto;

  ._1 {
    width: 100%;
  }
  ._2 {
    width: 100%;
    position: relative;
    min-height: 10px;
    &::before {
      content: "";
      position: absolute;
      right: -10px;
      top: 0;
      height: 5px;
      width: 5px;
      border-radius: 9999px;
      border: 1px solid #707070;
    }
  }
  ._3 {
    min-width: 270px;
    @media (max-width: 1194px) {
      min-width: 210px;
    }
    @media (max-width: 1070px) {
      min-width: 150px;
      // display: none;
    }
    @media (max-width: 830px) {
      min-width: 124px;
    }
  }
`;

export const NewContainer = styled(Container)`
  min-height: 50vh;
  padding-top: 80px;
  @media (max-width: 1070px) {
    width: min(1200px, 90%);
    & .margin-left {
      display: none;
    }
    & ._3 {
      display: none;
    }
  }
`;

export const Heading = styled.h1`
  max-width: 615px;
  font-size: 50px;
`;

export const Navigation = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  margin-right: 240px;
  li {
    list-style: none;
  }

  @media (max-width: 1194px) {
    margin-right: 200px;
  }
  @media (max-width: 1070px) {
    margin-right: 150px;
  }
  @media (max-width: 830px) {
    min-right: 100px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(366px, 1fr));
  grid-gap: 20px;
  margin-right: 2px;
  width: 100%;

  @media (max-width: 830px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

export const VideoContainer = styled.div`
  cursor: pointer;
  div {
    margin-top: 10px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    span {
      opacity: 0.5;
      font-size: 14px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    max-height: 230px;
    object-fit: cover;
    display: block;
    &:hover {
      filter: hue-rotate(220deg);
    }
  }
  @media (max-width: 830px) {
    img {
      max-height: 186px;
    }
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;