import { useEffect } from 'react';
import Modal from 'react-modal';

import { ModalProps } from '@/components/genModal/types';

import { ModalWrapper } from './styled';

const SideModal: React.FC<ModalProps> = ({ isOpen, children, className }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnEsc
      style={{
        overlay: {
          backgroundColor: '#00000060',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
        },
        content: {
          outline: 'none',
        },
      }}
      shouldReturnFocusAfterClose={true}
      ariaHideApp={false}
      className={`bg-bvndle-bgColor  z-[100000] w-[90%] flex-shrink-0 overflow-y-auto md:h-[600px]   ${className}`}
    >
      <ModalWrapper className='w-full px-7 py-8 '>{children}</ModalWrapper>
    </Modal>
  );
};

export default SideModal;
