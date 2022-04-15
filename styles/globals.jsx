import styled, { createGlobalStyle } from "styled-components";

export const FoundersContainer = styled.div`
  margin-top: 170px;
`;

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Pragmatica', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    position: relative;
    overflow-x: hidden;
  }

  .ReactModal__Body--open {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    background: #1A1A1A;
    color: #E6E6E6;
  }

  .app {
    max-width: min(2000px, 100%);
    margin: 0 auto;
  }

  .app .works-spacing {
    margin-left: 4%;
  }

  h3 {
    margin: 0;
  }

  span, img {
    background: transparent;
  }

  .ReactModal__Overlay {
    z-index: 1000;
    background-color: transparent !important;
  }

  .container {
    width: min(800px, 90%);
    margin: 0 auto;
  }
  @media (max-width: 1070px) {
    .container {
      margin-left: 80px;
      width: auto;
      max-width: 800px;
      /* border: 1px solid red !important; */
    }
  }

  @media (max-width: 675px) {
    .container {
      margin-left: 50px;
    }
  }

  @media (max-width: 400px) {
    .container {
      width: min(800px, 84%);
      margin: 0 auto;
    }
  }

  .swiper-pagination {
    background: none;
    text-align: start !important;
    margin-left: 40px;
    color: red;
    z-index: 2;
  }

  .swiper-pagination-bullet {
    background: none;
    padding: 4px;
    border: 1px solid #E6E6E6;
  }

  .swiper-pagination-bullet-active {
    outline: none;
    border: 1px solid transparent !important;
    background: #E6E6E6 !important;
  }

  .mobile-description {
    display: none;
    font-size: 28px;
    padding-top: 70px;
    padding-bottom: 70px;
    margin-left: 35px;
    margin-right: 35px;
  }

  /* Tablet view */
  @media(max-width: 1070px) {
    .swiper-pagination {
      margin-left: 80px;
    }
  }

  @media(max-width: 675px) {
    .swiper-pagination {
      margin-left: 45px;
    }
  }

  /* Mobile view */
  @media(max-width: 400px) {
    .mobile-description {
      display: inline-block;
    }
    .swiper-pagination {
      margin-left: 30px;
    }
  }
`;
