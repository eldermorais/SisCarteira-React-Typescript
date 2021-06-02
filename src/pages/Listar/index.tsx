import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input';
import {
  FiArrowLeft,
  FiArrowRight,
  FiEdit,
  FiPrinter,
  FiSearch,
  FiTrash,
} from 'react-icons/fi';
import {
  Buttons,
  Container,
  ListTable,
  Pagination,
  ContainerSearch,
  Content,
  PaginationItem,
  PaginationArrows,
} from './styles';
import { useDeficiente } from '../../context/DeficienteContext';
import { useCallback, useEffect, useState } from 'react';
import history from '../../routes/history';
import Modal from '../../components/Modal';

interface SubmitData {
  search: string;
}

function Listar() {
  const [showModal, setShowModal] = useState(false);

  const {
    deficientes,
    handleSubmit,
    loadDeficiente,
    getList,
    pages,
    setCurrentPage,
    currentPage,
  } = useDeficiente();

  const validations = Yup.object().shape({
    search: Yup.string(),
  });

  useEffect(() => {
    getList();
    return () => {
      getList();
    };
  }, []);

  const handleSearch = async (data: SubmitData) => {
    try {
      await handleSubmit(data);
    } catch (error) {
      console.log(error);
    }
  };

  const editDeficiente = useCallback((deficiente) => {
    loadDeficiente(deficiente);

    history.push('/cadastro');
  }, []);

  const printDeficiente = useCallback((deficiente) => {
    loadDeficiente(deficiente);

    history.push('/print');
  }, []);

  const deleteDeficiente = useCallback((deficiente) => {
    loadDeficiente(deficiente);
    setShowModal(true);
  }, []);

  return (
    <Container>
      {showModal && <Modal setShow={setShowModal} />}

      <Content>
        <h1>Cadastrados</h1>

        <ContainerSearch>
          <Formik
            initialValues={{ search: '' }}
            onSubmit={handleSearch}
            validationSchema={validations}
          >
            <Form>
              <h3>Buscar</h3>

              <label htmlFor="search">
                <Input
                  type="text"
                  id="search"
                  name="search"
                  icon={FiSearch}
                  placeholder="Digite o CPF ou o Nome"
                />
              </label>

              <button type="submit">Buscar</button>
            </Form>
          </Formik>
        </ContainerSearch>

        <ListTable>
          <thead>
            <tr>
              <th>#</th>
              <th>CPF</th>
              <th>Nome</th>
              <th>Deficiencia</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {deficientes.map((deficiente) => (
              <tr key={deficiente.id}>
                <td>{deficiente.id}</td>
                <td>{deficiente.cpf}</td>
                <td>{deficiente.nome}</td>
                <td>{deficiente.deficiencia.descricao}</td>
                <td>
                  <Buttons>
                    <button onClick={() => editDeficiente(deficiente)}>
                      <FiEdit />
                    </button>
                    <button onClick={() => deleteDeficiente(deficiente)}>
                      <FiTrash />
                    </button>
                    <button onClick={() => printDeficiente(deficiente)}>
                      <FiPrinter />
                    </button>
                  </Buttons>
                </td>
              </tr>
            ))}
          </tbody>
        </ListTable>

        <Pagination>
          <PaginationArrows>
            {currentPage > 1 && (
              <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
                <FiArrowLeft />
              </PaginationItem>
            )}
          </PaginationArrows>
          {pages.map((page) => (
            <PaginationItem
              key={page}
              onClick={() => setCurrentPage(page)}
              isSelect={page === currentPage}
            >
              {page}
            </PaginationItem>
          ))}
          <PaginationArrows>
            {currentPage < pages.length && (
              <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
                <FiArrowRight />
              </PaginationItem>
            )}
          </PaginationArrows>
        </Pagination>
      </Content>
    </Container>
  );
}

export default Listar;
