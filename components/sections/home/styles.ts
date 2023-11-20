import styled from "styled-components";

export const Home = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  .custom-container {
    position: relative;
    max-width: 1112px;
    width: 100%;
    text-align: center;
    
    h1 {
      position: relative;
      margin-bottom: 44px;
      color: #fff;
    }

    .row-accounts {
      display: flex;
      gap: 1.67vw;

      .account {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.98vw;
        padding-top: 80px;
        padding-bottom: 60px;
        max-width: 358px;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 0px -2px 3px 0px rgba(0, 0, 0, 0.16);

        .box-image {
          max-width: 120px;
          width: 100%;
        }
        
        h2 {
          color: ${(props) => props.theme.lightBlue};
        }
      }
    }
  }

  @media only screen and (max-width: 1450px) {
  }
  @media only screen and (max-width: 1100px) {
  }
  @media only screen and (max-width: 1100px) {
  }
  @media only screen and (max-width: 767px) {
  }
  @media only screen and (max-width: 660px) {
  }
  @media only screen and (max-width: 550px) {
  }
  @media only screen and (max-width: 400px) {
  }
  @media only screen and (max-width: 374px) {
  }
`;
