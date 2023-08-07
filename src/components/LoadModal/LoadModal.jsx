import { Backdrop } from './LoadModal.styled';
import { RotatingLines } from 'react-loader-spinner';

export default function LoadModal() {
  return (
    <Backdrop>
      <RotatingLines />
    </Backdrop>
  );
}
