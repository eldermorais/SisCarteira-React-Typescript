import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { FiArchive, FiHome, FiList } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Container } from './styles';

function SideBar() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!!user && (
        <Container isOpen={isOpen}>
          <Hamburger toggle={setIsOpen} toggled={isOpen} />

          <Link to="/dashboard" onClick={(isOpen) => setIsOpen(!isOpen)}>
            {' '}
            <FiHome /> Início{' '}
          </Link>

          <Link to="/cadastro" onClick={(isOpen) => setIsOpen(!isOpen)}>
            {' '}
            <FiArchive /> Cadastro{' '}
          </Link>

          {/* <Link to="/relatorio" onClick={(isOpen) => setIsOpen(!isOpen)}>
            {' '}
            <FiClipboard /> Relatório{' '}
          </Link> */}

          <Link to="/listar" onClick={(isOpen) => setIsOpen(!isOpen)}>
            {' '}
            <FiList /> Listar{' '}
          </Link>
        </Container>
      )}
    </>
  );
}

export default SideBar;
