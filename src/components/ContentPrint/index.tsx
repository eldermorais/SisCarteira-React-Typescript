import logo_funad from '../../assets/logo_funad.jpeg';

import { Container, FotoCard, HeaderCard, Informations } from './styles';
import { DeficienteProps } from '../../context/DeficienteContext';

interface ContentPrintProps {
  values: DeficienteProps | undefined;
}

function ContentPrint({ values }: ContentPrintProps) {
  return (
    <Container>
      {values && (
        <>
          <HeaderCard>
            <img src={logo_funad} alt="logo da FUNAD-PB" />
            <h1>Carteira de Passe Livre Intermunicipal</h1>
          </HeaderCard>

          <h1>Pessoa com Deficiencia</h1>
          <FotoCard>
            <img
              src={`${values.foto?.url}`}
              alt="foto do usuário na Carteira"
            />
          </FotoCard>
          <Informations>
            <div>
              <p>Nome: {values.nome}</p>
            </div>

            <div>
              <p>CPF: {values.cpf}</p>
            </div>

            <div>
              <p>Deficiencia: {values.deficiencia.descricao}</p>
            </div>

            <div>
              <p>Cidade: {values.localidade}</p>
            </div>
          </Informations>
        </>
      )}
    </Container>
  );
}

export default ContentPrint;
