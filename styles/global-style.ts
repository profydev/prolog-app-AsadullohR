import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { color, textFont, Theme } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${normalize}
  
  body {
    font-family: Inter, Sans-Serif;
    color: ${color("gray", 900)};
  }

  a {
    color: ${color("primary", 700)};
  }

  .nav-bar__items{
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-bar__item{
    padding: 0 2rem;
  }
  .nav-bar__item--link{
    text-decoration: none;
    color: ${color("gray", 500)};
  }
  .nav-bar__btn{
    width: 9rem;
    height: 1.6rem;
    background: ${color("primary", 700)};
    border-radius: 8px; 
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: white;
    font-size: ${textFont("md", "medium")}
    text-align: center;
    vertical-align: middle;
  }
`;
