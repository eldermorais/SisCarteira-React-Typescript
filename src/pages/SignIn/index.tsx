import { Background, Container, Content } from './styles';
import logoImg from '../../assets/sis-carteira.png';
import { Form, Formik, FormikProps } from 'formik';
import Input from '../../components/Input';
import { FiLock, FiMail } from 'react-icons/fi';
import Button from '../../components/Button';
import { useCallback, useRef } from 'react';
import * as Yup from 'yup';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

interface SignInFormData {
  identifier: string;
  password: string;
}

function SignIn() {
  const { signIn, loading } = useAuth();
  const { addToast } = useToast();

  const formikRef = useRef<FormikProps<SignInFormData>>(null);

  const validations = Yup.object().shape({
    identifier: Yup.string()
      .email('E-mail inválido.')
      .required('E-mail obrigatório.'),
    password: Yup.string()
      .min(6, 'Mínimo 6 caracteres.')
      .required('Senha obrigatória.'),
  });

  const handleLogin = useCallback(async (data: SignInFormData) => {
    try {
      await validations.validate(data);
      await signIn({
        identifier: data.identifier,
        password: data.password,
      });

      formikRef.current?.setFieldValue('identifier', '');
      formikRef.current?.setFieldValue('password', '');

      addToast({
        type: 'success',
        title: 'Login Realizado com Sucesso',
        description: 'Agora você já pode usar o SisCarteira',
      });
    } catch (err) {
      if (!(err instanceof Yup.ValidationError)) {
        addToast({
          type: 'error',
          title: 'Ocorreu um erro',
          description:
            'Ocorreu um erro ao fazer Login. Verifique suas credenciais',
        });
      }
    }
  }, []);

  const initialValues: SignInFormData = {
    identifier: 'example@gmail.com',
    password: '123456',
  };
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />

        <Formik
          initialValues={initialValues}
          onSubmit={handleLogin}
          validationSchema={validations}
          innerRef={formikRef}
        >
          <Form>
            <h1>Faça seu login</h1>

            <Input
              autoFocus
              type="text"
              name="identifier"
              icon={FiMail}
              id="email"
              placeholder="E-mail"
            />

            <Input
              type="password"
              name="password"
              icon={FiLock}
              id="password"
              placeholder="Senha"
            />

            <Button loading={loading} disabled={loading} type="submit">
              Entrar
            </Button>
          </Form>
        </Formik>
      </Content>
      <Background />
    </Container>
  );
}

export default SignIn;
