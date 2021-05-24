import { Form, Formik, FormikProps } from 'formik';
import Input from '../../components/Input';
import {
  Container,
  FormGroup1,
  FormGroup2,
  FormGroup3,
  FormGroup4,
} from './styles';
import * as Yup from 'yup';
import { useCallback, useEffect, useRef, useState } from 'react';
import api from '../../services/api';
import Button from '../../components/Button';
import { FiCheck } from 'react-icons/fi';
import axios from 'axios';
import { useToast } from '../../context/ToastContext';
import { testaCPF } from '../../utils/utils';
import { useDeficiente } from '../../context/DeficienteContext';

interface DeficienciaFormData {
  id: number;
  descricao: string;
}

export interface RegisterFormData {
  id?: number;
  nome: string;
  cpf: string;
  data_nascimento: string;
  deficiencia: string;
  uf: string;
  ativo: boolean;
  cep: string;
  logradouro: string;
  num_endereco: string;
  localidade: string;
  bairro: string;
}

function Cadastro() {
  const [deficiencias, setDeficiencias] = useState<DeficienciaFormData[]>([]);

  const [deficiente, setDeficiente] = useState<RegisterFormData>();

  const { addToast } = useToast();
  const { load } = useDeficiente();

  const formikRef = useRef<FormikProps<RegisterFormData>>(null);

  const validations = Yup.object().shape({
    nome: Yup.string().required('digite o nome'),
    cpf: Yup.string()
      .required('Digite o CPF')
      .min(11, 'Digite o cpf correntamente'),
    cep: Yup.number()
      .min(8, 'Preencha o cep Corretamente')
      .required('Digite o CEP'),
    data_nascimento: Yup.string().required('Digite a data de nascimento'),
  });

  const handleSubmit = useCallback(
    async (data) => {
      try {
        if (deficiente?.id) {
          await api.put(`deficientes/${deficiente.id}`, data);

          formikRef.current && formikRef.current.resetForm();

          addToast({
            type: 'success',
            title: 'Cadastro atualizado com Sucesso',
          });
        } else {
          await api.post('deficientes', data);

          // formikRef.current && formikRef.current.resetForm();

          addToast({
            type: 'success',
            title: 'Cadastro Realizado com Sucesso',
          });
        }
      } catch (err) {
        if (!(err instanceof Yup.ValidationError)) {
          addToast({
            type: 'error',
            title: 'Ocorreu um erro',
            description:
              'Ocorreu um erro ao fazer o cadastro. Verifique os campos ou sua conexâo',
          });
        }
      }
    },
    [deficiente],
  );

  async function getCep() {
    const cep = formikRef.current?.values.cep;
    const baseUrlCep = 'https://viacep.com.br/ws/';
    const urlCep = baseUrlCep + cep + '/json';

    try {
      const response = await axios.get(urlCep);
      const data = response.data;

      if (data.erro) {
        addToast({
          type: 'error',
          title: 'Cep Incorreto',
          description: 'Este Cep não existe. Digite um Cep válido.',
        });
        return;
      }
      if (formikRef.current) {
        const { setFieldValue } = formikRef.current;
        setFieldValue('uf', data.uf);
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('localidade', data.localidade);
        setFieldValue('bairro', data.bairro);
      }
    } catch (err) {
      if (err) {
        addToast({
          type: 'error',
          title: 'Cep Incorreto',
          description: 'Este Cep não existe. Digite um Cep válido.',
        });
      }
    }
  }

  useEffect(() => {
    setDeficiente(load);

    async function getDeficiencias() {
      const response = await api.get('categorias');
      {
        setDeficiencias(response.data);
      }

      if (load?.id) {
        if (formikRef.current) {
          const { setFieldValue } = formikRef.current;
          setFieldValue('cpf', load?.cpf);
          addToast({
            type: 'info',
            title: 'pressione a tecla TAB para editar cadastro',
          });
        }
      }
    }

    getDeficiencias();

    return () => {
      setDeficiente(initialValues);
    };
  }, [setDeficiencias, setDeficiente]);

  async function getDeficiente() {
    const cpf = formikRef.current?.values.cpf;

    if (testaCPF(cpf) === false) {
      addToast({
        type: 'error',
        title: 'CPF inválido',
        description: 'Este CPF não existe. Digite um CPF válido.',
      });
      return;
    } else {
      const response = await api.get(`deficientes/?cpf=${cpf}`);
      const data = response.data[0];

      if (data) {
        setDeficiente(data);

        if (formikRef.current) {
          const { setFieldValue } = formikRef.current;

          setFieldValue('nome', data.nome);
          setFieldValue('data_nascimento', data.data_nascimento);
          setFieldValue('deficiencia', data.deficiencia.id);
          setFieldValue('uf', data.uf);
          setFieldValue('ativo', data.ativo);
          setFieldValue('cep', data.cep);
          setFieldValue('logradouro', data.logradouro);
          setFieldValue('num_endereco', data.num_endereco);
          setFieldValue('localidade', data.localidade);
          setFieldValue('bairro', data.bairro);
        }

        addToast({
          type: 'success',
          title: 'CPF já está cadastrado',
          description: 'Você pode atualizar os dados do cadastro',
        });
      } else {
        setDeficiente(initialValues);
        if (formikRef.current) {
          const { setFieldValue } = formikRef.current;

          setFieldValue('nome', '');
          setFieldValue('data_nascimento', '');
          setFieldValue('deficiencia', '');
          setFieldValue('uf', '');
          setFieldValue('ativo', '');
          setFieldValue('cep', '');
          setFieldValue('logradouro', '');
          setFieldValue('num_endereco', '');
          setFieldValue('localidade', '');
          setFieldValue('bairro', '');
        }
      }
    }
  }

  const initialValues: RegisterFormData = {
    nome: '',
    cpf: '',
    data_nascimento: '',
    deficiencia: '',
    uf: '',
    ativo: false,
    cep: '',
    logradouro: '',
    num_endereco: '',
    localidade: '',
    bairro: '',
  };
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validations}
        innerRef={formikRef}
      >
        <Form>
          <h1>Cadastro</h1>
          <FormGroup1>
            <label htmlFor="cpf">
              CPF
              <Input
                id="cpf"
                name="cpf"
                placeholder="Cpf"
                type="text"
                onBlur={getDeficiente}
                maxLength={11}
                autoFocus
                // required
              />
            </label>
            <label htmlFor="nome">
              Nome completo
              <Input id="nome" name="nome" placeholder="Nome" type="text" />
            </label>
          </FormGroup1>

          <FormGroup2>
            <label htmlFor="ativo">
              Ativo
              <Input id="ativo" name="ativo" type="checkbox" icon={FiCheck} />
            </label>

            <label htmlFor="deficiencia">
              Deficiência
              <Input as="select" id="deficiencia" name="deficiencia">
                <option value="">Selecione</option>

                {deficiencias.map((deficiencia) => (
                  <option key={deficiencia.id} value={deficiencia.id}>
                    {deficiencia.descricao}
                  </option>
                ))}
              </Input>
            </label>

            <label htmlFor="data_nascimento">
              Data de Nascimento
              <Input
                id="data_nascimento"
                name="data_nascimento"
                placeholder="Data de Nascimento"
                type="date"
              />
            </label>
          </FormGroup2>

          <FormGroup3>
            <label htmlFor="cep">
              Cep
              <Input
                id="cep"
                name="cep"
                placeholder="Cep"
                type="text"
                onBlur={getCep}
                maxLength={8}
              />
            </label>
            <label htmlFor="logradouro">
              Rua
              <Input
                id="logradouro"
                name="logradouro"
                placeholder="Rua"
                type="text"
              />
            </label>
            <label htmlFor="num_endereco">
              Número
              <Input
                id="num_endereco"
                name="num_endereco"
                placeholder="Número"
                type="text"
              />
            </label>
          </FormGroup3>

          <FormGroup4>
            <label htmlFor="bairro">
              Bairro
              <Input id="bairro" name="bairro" placeholder="Bairro" />
            </label>
            <label htmlFor="localidade">
              Cidade
              <Input
                id="localidade"
                name="localidade"
                placeholder="Cidade"
                type="text"
              />
            </label>
            <label htmlFor="uf">
              Estado
              <Input id="uf" name="uf" placeholder="Estado" type="text" />
            </label>
          </FormGroup4>

          <Button type="submit">Salvar</Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default Cadastro;
