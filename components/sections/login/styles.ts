import { styled } from "styled-components";

interface Props {
  inputActive1: boolean;
  inputActive2: boolean;
}

export const Login = styled.section<Props>`
  position: relative;
  color: ${(props) => props.theme.lightBlack};
  display: flex;
  align-items: center;
  flex-direction:column;
  width: 100vw;

  h1 {
    position: relative;
    margin-bottom: 44px;
    color: #fff;
  }
  form {
    max-width: 38.75vw;
    border-radius: 20px;
    background-color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 70px 60px;
    box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.16);

    #form-error-focus {
      //conserta o height do form
      position: absolute;
    }

    .error-message {
      display: block;
      padding-top: 5px;
      padding-left: 0 !important;
      background-color: transparent;
      color: ${(props) => props.theme.darkBlue};
    }
    .input-component {
      position: relative;
      margin-bottom: 35px;
      max-width: 623.727px;
      width: 100%;

      label {
        position: absolute;
        font-size: 16px;
        background-color: #fff;
        transition: 0.25s ease;
      }

      .input-content {
        input {
          border-radius: 10px;
          font-weight: 300;
          max-width: 775px;
          width: 100%;
          padding-left: 16px;
          padding-top: 14.5px;
          padding-bottom: 11.5px;
          background-color: #fff;
          border: solid 1px #888;

          color: #000;

          &::placeholder {
            color: ${(props) => props.theme.lightBlack};
          }
        }
      }
    }

    .input-component:nth-of-type(1) {
      label {
        top: ${(props) => (props.inputActive1 ? "-22px" : "-8px")};
        left: ${(props) => (props.inputActive1 ? "0" : "15px")};
      }
    }

    .input-component:nth-of-type(2) {
      label {
        top: ${(props) => (props.inputActive2 ? "-22px" : "-8px")};
        left: ${(props) => (props.inputActive2 ? "0" : "15px")};
      }
    }

    .box-links {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 30px;

      a {
        color: ${(props) => props.theme.lightBlue};
        text-decoration: underline !important;
      }

      .create-account {
        display: flex;
        gap: 8px;
      }
    }
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;

    .actions-form {
      width: 100%; //atençao

      .button-submit div {
        width: unset;
      }

      button {
        border-radius: 10px;
        width: 100%; //atençao
        padding: 15px 0;
        background-color: ${(props) => props.theme.green};
        border: none;
        color: #fff;
        font-weight: 700;
        margin-left: -3px;

        span {
          display: block; // mantem o alinhamento
        }
      }
    }
  }
`;
