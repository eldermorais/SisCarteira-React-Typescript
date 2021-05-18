import { useAuth } from '../../context/AuthContext';
import { Container, Header, SideBar } from './styles2';
import logoSmall from '../../assets/logo-small.png';
import {
  FiArchive,
  FiClipboard,
  FiList,
  FiPower,
  FiUser,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Dashboard() {
  const { user, signOut } = useAuth();
  console.log(user.displayName);

  return (
    <Container>
      <Header>
        <div>
          <img src={logoSmall} alt="siscarteira" />
          <h2>SisCarteira</h2>
        </div>
        <div>
          <Link to="/user">
            <FiUser /> {user.displayName}
          </Link>
          <button type="button" onClick={signOut}>
            <FiPower size="18" />
            Sair
          </button>
        </div>
      </Header>
      <SideBar>
        <Link to="/cadastro">
          {' '}
          <FiArchive /> Cadastro{' '}
        </Link>

        <Link to="/cadastro">
          {' '}
          <FiClipboard /> Relatório{' '}
        </Link>

        <Link to="/cadastro">
          {' '}
          <FiList /> Listar{' '}
        </Link>
      </SideBar>
    </Container>
  );
}

Dashboard;
