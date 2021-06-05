import { Form, Formik, FormikProps } from 'formik';
import Input from '../../components/Input';
import { Container, FormGroup1, FormGroup2, FormGroup3 } from './styles';
import * as Yup from 'yup';
import { useCallback, useRef } from 'react';
import api from '../../services/api';
import Button from '../../components/Button';
import { useToast } from '../../context/ToastContext';
import { useAuth } from '../../context/AuthContext';

interface ProfileData {
  username: string;
  displayName: string;
  password?: string;
  password_confirmation?: string;
  setor: string;
  matricula: string;
}

function Profile() {
  const { addToast } = useToast();
  const { user, updateUser } = useAuth();

  const formikRef = useRef<FormikProps<ProfileData>>(null);

  const validations = Yup.object().shape({
    username: Yup.string().required('digite o nome'),
    displayName: Yup.string().required('Digite um nome para exibição'),
    password: Yup.string().min(6, 'Mínimo de 6 caracteres'),
    password_confirmation: Yup.string()
      .when('password', {
        is: (value: string) => value && value.length > 0,
        then: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Confirmação incorreta')

          .required('Campo obrigatório')
          .min(6, 'minimo de 6 Caracteres'),
        otherwise: Yup.string(),
      })
      .oneOf([Yup.ref('password'), null], 'Confirmação incorreta'),
    setor: Yup.string().required('Preencha o campo'),
    matricula: Yup.string().required('Preencha o campo'),
  });

  const handleSubmit = useCallback(async (data: ProfileData) => {
    try {
      const { username, displayName, password, setor, matricula } = data;
      const response = await api.put(`users/${user.id}`, {
        username,
        displayName,
        setor,
        matricula,
        ...(password
          ? {
              password: data.password,
            }
          : {}),
      });

      updateUser(response.data);
      addToast({
        type: 'success',
        title: 'Usuário alterado',
        description: 'Seus dados from alterados com sucesso',
      });
    } catch (err) {
      if (!(err instanceof Yup.ValidationError)) {
        if (String(err) == 'Error: Request failed with status code 403') {
          addToast({
            type: 'error',
            title: 'Sem Permissão',
            description:
              'Ocorreu um erro ao fazer a alteração. Você não tem permissão para isso',
          });
        } else {
          addToast({
            type: 'error',
            title: 'Ocorreu um erro',
            description:
              'Ocorreu um erro ao fazer a alteração. Verifique os campos ou sua conexâo',
          });
        }
      }
    }
  }, []);

  const initialValues: ProfileData = {
    username: user.username,
    displayName: user.displayName,
    password: '',
    password_confirmation: '',
    setor: user.setor,
    matricula: user.matricula,
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
          <h1>Profile</h1>

          <h3>Editar dados</h3>

          <FormGroup1>
            <label htmlFor="username">
              Nome
              <Input
                id="username"
                name="username"
                placeholder="Nome Completo"
                type="text"
              />
            </label>

            <label htmlFor="displayName">
              Nome para exibição
              <Input
                id="displayName"
                name="displayName"
                placeholder="Nome para exibição"
                type="text"
              />
            </label>
          </FormGroup1>

          <FormGroup3>
            <label htmlFor="setor">
              Setor
              <Input id="setor" name="setor" placeholder="Setor" type="text" />
            </label>
            <label htmlFor="matricula">
              Matrícula
              <Input
                id="matricula"
                name="matricula"
                placeholder="Matrícula"
                type="text"
              />
            </label>
          </FormGroup3>

          <h3>Alterar senha</h3>

          <FormGroup2>
            <label htmlFor="password">
              Senha
              <Input
                placeholder="Senha"
                name="password"
                id="password"
                type="password"
              />
            </label>

            <label htmlFor="password_confirmation">
              Confirmação de senha
              <Input
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Confirmar senha"
                type="password"
              />
            </label>
          </FormGroup2>

          <Button type="submit">Salvar</Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default Profile;
