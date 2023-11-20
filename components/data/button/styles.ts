import styled from "styled-components";

export const Button = styled.div`
  width: fit-content;
  a,
  button {
    display: block;
    color: #fff;
    background-color: ${(props) => props.theme.lightBlue};
    border: none;

    span {
      display: flex;
      align-items: center;
    }
  }

  @media only screen and (max-width: 680px) {
  }
`;
