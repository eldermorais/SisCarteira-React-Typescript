import { useEffect, useRef, useState } from 'react';
import {
  DeficienteProps,
  useDeficiente,
} from '../../context/DeficienteContext';
import { Container } from './styles';
import { useReactToPrint } from 'react-to-print';
import ContentPrint from '../../components/ContentPrint';

function Print() {
  const { load } = useDeficiente();
  const [pcdPrint, setPcdPrint] = useState<DeficienteProps>();

  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    if (load) {
      setPcdPrint(load);
    }
  }, []);

  return (
    <Container>
      <div ref={componentRef}>
        <ContentPrint values={pcdPrint} />
      </div>
      <button type="button" onClick={handlePrint}>
        Imprimir
      </button>
    </Container>
  );
}

export default Print;
