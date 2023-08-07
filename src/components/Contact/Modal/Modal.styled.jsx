import styled from '@emotion/styled';
import { GoX } from 'react-icons/go';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 500px;
  max-width: 400px;
  width: 100%;
  padding: 50px 30px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const ModalBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  padding: 0;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: transparent;
  cursor: pointer;
`;

export const CloseIcon = styled(GoX)`
  width: 20px;
  height: 20px;
`;
