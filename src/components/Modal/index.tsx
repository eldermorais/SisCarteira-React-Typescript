import { SetStateAction, useEffect, useState } from 'react';
import { FiAlertCircle, FiX } from 'react-icons/fi';
import {
  DeficienteProps,
  useDeficiente,
} from '../../context/DeficienteContext';
import { Confirmation, Container, Content } from './styles';

interface ModalProps {
  setShow: React.Dispatch<SetStateAction<boolean>>;
}

function Modal({ setShow }: ModalProps) {
  const { load, deleteDeficiente } = useDeficiente();
  const [pcddelete, setPcdDelete] = useState<DeficienteProps>();

  useEffect(() => {
    setPcdDelete(load);
  }, []);

  const deleteModal = () => {
    pcddelete && deleteDeficiente(pcddelete);
    setShow(false);
  };

  return (
    <Container>
      <Content>
        <div>
          <FiAlertCircle />
          <h3>Excluir</h3>
          <button type="button" onClick={() => setShow(false)}>
            <FiX />
          </button>
        </div>
        <Confirmation>
          <strong>Deseja excluir o cadastro?</strong>
          <div>
            <button type="button" onClick={() => deleteModal()}>
              Sim
            </button>
            <button type="button" onClick={() => setShow(false)}>
              Cancelar
            </button>
          </div>
        </Confirmation>
      </Content>
    </Container>
  );
}

export default Modal;
