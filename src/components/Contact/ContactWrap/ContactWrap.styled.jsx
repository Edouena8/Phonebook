import styled from "@emotion/styled";

export const Main = styled.main`
  min-height: calc(100vh - 50px);
  margin-left: auto;
  margin-right: auto;
  background-image: url(https://kubnews.ru/upload/resize_cache/iblock/04d/1200_630_2/04dc38e0a41da124d5924b7c030d5d8a.jpg);
  background-color: #727272;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1230px;
  height: 70%;

  margin: 0 auto;
  padding: 100px 15px;
  background-color: #ffffffa3;
`;

export const ContactMenu = styled.div`
  width: 30%;
  padding-right: 40px;
  padding-left: 40px;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.4);
`;

