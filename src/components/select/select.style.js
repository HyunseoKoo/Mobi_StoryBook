import styled, { css } from "styled-components";

const variantCSS = {
  default: css`
    border: 1px solid black;
  `,
  secondary: css`
    background-color: beige;
  `
};

const shapeCSS = {
  default: css`
    border-radius: 5px;
  `,
  littleShape: css`
    border-radius: 15px;
  `,
  shape: css`
    border-radius: 30px;
  `,
};

const sizeCSS = {
    default : css`
        width : 300px;
        padding : 15px;
        font-size: 20px;
    `,
    small : css`
        width : 150px;
        padding : 10px;
        font-size: 15px;
    `,
    large : css`
        width : 300px;
        padding : 20px;
        font-size: 30px;
    `
};

export const Select = styled.select`
  width: 300px;
  background: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.base};
  border: 2px solid ${({ theme }) => theme.color.gray[100]};
  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
  cursor: pointer;
`;

export const Option = styled.option`

`