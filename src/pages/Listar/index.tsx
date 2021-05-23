import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input';
import {
  FiArrowLeft,
  FiArrowRight,
  FiEdit,
  FiSearch,
  FiTrash,
} from 'react-icons/fi';
import {
  Buttons,
  Container,
  ListTable,
  Pagination,
  ContainerSearch,
} from './styles';
import { useDeficiente } from '../../context/DeficienteContext';
import { useCallback } from 'react';
import history from '../../routes/history';

interface SubmitData {
  search: string;
}

function Listar() {
  // const [deficientes, setDeficientes] = useState<DeficienteProps[]>([]);

  const { deleteDeficiente, deficientes, handleSubmit, loadDeficiente } =
    useDeficiente();

  const validations = Yup.object().shape({
    search: Yup.string(),
  });

  const handleSearch = async (data: SubmitData) => {
    try {
      await handleSubmit(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   async function getList() {
  //     const response = await api.get('/deficientes?_sort=nome:ASC');
  //     setDeficientes(response.data);
  //   }
  //   getList();
  // }, [setDeficientes]);

  const editDeficiente = useCallback((deficiente) => {
    loadDeficiente(deficiente);

    history.push('/cadastro');
  }, []);

  return (
    <Container>
      <h1>Cadastrados</h1>

      <Formik
        initialValues={{ search: '' }}
        onSubmit={handleSearch}
        validationSchema={validations}
        // innerRef={formikRef}
      >
        <Form>
          <ContainerSearch>
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
          </ContainerSearch>
        </Form>
      </Formik>

      <ListTable>
        <thead>
          <tr>
            <th>ID</th>
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
                  <button
                    className="btn btn-warning ml-2"
                    onClick={() => editDeficiente(deficiente)}
                  >
                    <FiEdit />
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => deleteDeficiente(deficiente)}
                  >
                    <FiTrash />
                  </button>
                </Buttons>
              </td>
            </tr>
          ))}
        </tbody>
      </ListTable>

      <Pagination>
        <button type="button">
          <FiArrowLeft />
        </button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>
          <FiArrowRight />
        </button>
      </Pagination>
    </Container>
  );
}

export default Listar;
