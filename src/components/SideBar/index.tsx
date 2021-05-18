import React from 'react';
import { FiArchive, FiClipboard, FiHome, FiList } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Container } from './styles';

function SideBar() {
  const { user } = useAuth();

  return (
    <>
      {!!user && (
        <Container>
          <Link to="/dashboard">
            {' '}
            <FiHome /> Início{' '}
          </Link>

          <Link to="/cadastro">
            {' '}
            <FiArchive /> Cadastro{' '}
          </Link>

          <Link to="/relatorio">
            {' '}
            <FiClipboard /> Relatório{' '}
          </Link>

          <Link to="/listar">
            {' '}
            <FiList /> Listar{' '}
          </Link>
        </Container>
      )}
    </>
  );
}

export default SideBar;
