import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, CloseIcon, Content } from './Modal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from 'redux/modal/slice';
import { selectModal } from 'redux/modal/selectors';
import { ModalBtn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children }) {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);

  useEffect(() => {
    const onKeydownEsc = evt => {
      if (evt.code === 'Escape') {
        dispatch(toggleModal(modal));
      }
    };

    window.addEventListener('keydown', onKeydownEsc);

    return () => {
      window.removeEventListener('keydown', onKeydownEsc);
    };
  }, [dispatch, modal]);

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      dispatch(toggleModal(modal));
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>
        <ModalBtn type="button" onClick={() => dispatch(toggleModal(modal))}>
          <CloseIcon />
        </ModalBtn>
        {children}
      </Content>
    </Backdrop>,
    modalRoot
  );
}
