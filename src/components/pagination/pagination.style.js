import styled, { css } from "styled-components";
import { flexAllCenter } from "../../styles/common";

const variantCSS = {
  primary: css`
    ${flexAllCenter};
    cursor: pointer;
    box-sizing: border-box;
  `,
  secondary: css`
    background-color: beige;
    border: 1px solid blue;
    ${flexAllCenter};
    cursor: pointer;
    box-sizing: border-box;
  `,
};

const shapeCSS = {
  roundBtn: css`
    border-radius: 500px;
    border: 1.5px solid ${({ theme }) => theme.color.gray[200]};
    border: none;
  `,

  squareBtn: css`
    border-radius: 6px;
    border: none;
  `,
};

const sizeCSS = {
  moreBtn: css`
    width: 188px;
    max-width: 200px;
    height: 58px;
    padding: 17px;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  `,
  submitBtn: css`
    width: 400px;
    height: 52px;
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  `,
  checkBtn: css`
    width: 6vw;
    height: 5vh;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  `,

  small: css`
    width: 40px;
    max-width: 60px;
    height: 40px;
    padding: 16px 0;
    font-size: ${({ theme }) => theme.fontSize.base};
  `,
  large: css`
    width: 128px;
    height: 64px;
    padding: 16px 9;
    font-size: ${({ theme }) => theme.fontSize.big};
  `,
};


export const Nav = styled.nav`
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  width: 800px;
  height :80px;
`;

export const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
  margin: 3px;
  &:hover {
    background-color: #d9d9d9;
    cursor: pointer;
  }

  &[disabled] {
    background-color: #f9f9f9;
    cursor: revert;
  }

  &[aria-current] {
    background-color: pink;
    font-weight: bold;
  }
`;

