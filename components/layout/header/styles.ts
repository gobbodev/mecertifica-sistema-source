import styled from "styled-components";

export const Header = styled.header`
  padding-top: 15px;
  padding-bottom: 25px;

  background-color: ${(props) => props.theme.primaryColor};

  .container {
    .content-top {
      display: flex;
      justify-content: space-between;

      .box-logo {
        min-width: 180px;

        img {
          object-fit: contain;
        }
      }
      .info {
        display: flex;
        gap: 40px;
        align-items: center;

        .btn-new-certificate {
          padding: 11px 20px;
          background-color: transparent !important;
          color: ${(props) => props.theme.lightBlue};
          border-radius: 5px;
          border: 1px solid ${(props) => props.theme.lightBlue};

          span {
            display: flex;
            gap: 10px;
          }
        }

        .btn-notifications {
          padding: 4px 6px;
          border-radius: 30px;
        }

        .profile-thumb {
          display: flex;
          align-items:center;

          .box-pic {
            width: 40px;

            img {
              border-radius: 30px;
            }
          }
          .btn-perfil {
            background-color: transparent;
          }
        }
      }
    }
  }

  .content-bottom {
    margin: 0 1.2%;

    nav {
      display: flex;
      gap: 4.95vw;
      a {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }
  .menu-mobile {
    display: none;
  }

  @media only screen and (max-width: 1365px) {
  }
  @media only screen and (max-width: 1023px) {
  }
  @media only screen and (max-width: 767px) {
  }
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (max-width: 360px) {
  }
`;
