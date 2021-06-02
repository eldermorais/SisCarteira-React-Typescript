import { FiPower, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logoSmall from '../../assets/logo-small.png';
import { Container } from './styles';

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <div>
        <img src={logoSmall} alt="siscarteira" />
        <h2>SisCarteira</h2>
      </div>
      {!!user && (
        <div>
          <Link to="/profile">
            <FiUser /> <span>{user.displayName}</span>
          </Link>
          <button type="button" onClick={signOut}>
            <FiPower size="18" />
            Sair
          </button>
        </div>
      )}
    </Container>
  );
}
