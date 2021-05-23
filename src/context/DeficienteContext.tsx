import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';

interface DeficienciaData {
  id: number;
  descricao: string;
}

export interface DeficienteProps {
  id?: number;
  nome: string;
  cpf: string;
  data_nascimento: string;
  deficiencia: DeficienciaData;
  uf: string;
  ativo: boolean;
  cep: string;
  logradouro: string;
  num_endereco: string;
  localidade: string;
  bairro: string;
}

interface DeficienteProviderProps {
  children: ReactNode;
}

interface SubmitData {
  search: string;
}

interface DeficienteContextData {
  deleteDeficiente: (deficiente: DeficienteProps) => void;
  loadDeficiente: (deficiente: DeficienteProps) => void;
  handleSubmit: (form: SubmitData) => Promise<void>;
  deficientes: DeficienteProps[];
  load: DeficienteProps | undefined;
}

const DeficienteContext = createContext<DeficienteContextData>(
  {} as DeficienteContextData,
);

const DeficienteProvider = ({ children }: DeficienteProviderProps) => {
  const [deficientes, setDeficientes] = useState<DeficienteProps[]>([]);
  const [load, setLoad] = useState<DeficienteProps>();

  useEffect(() => {
    async function getList() {
      const response = await api.get('/deficientes?_sort=nome:ASC');
      setDeficientes(response.data);
    }
    getList();
  }, [setDeficientes]);

  const handleSubmit = useCallback(
    async ({ search }) => {
      const response = await api.get(
        `https://strapi-siscarteita.herokuapp.com/deficientes?_where[_or][0][nome_contains]=${search}&_where[_or][1][cpf]=${search}`,
      );
      setDeficientes(response.data);
    },
    [setDeficientes],
  );

  const deleteDeficiente = useCallback(
    async (deficiente: DeficienteProps) => {
      await api.delete(
        `https://strapi-siscarteita.herokuapp.com/deficientes/${deficiente.id}`,
      );

      const list = deficientes.filter((d) => d.id != deficiente.id);

      setDeficientes(list);
    },
    [setDeficientes, deficientes],
  );

  const loadDeficiente = useCallback(
    async (deficiente: DeficienteProps) => {
      await setLoad(deficiente);
      console.log(deficiente);
    },
    [setLoad, load],
  );

  return (
    <DeficienteContext.Provider
      value={{
        loadDeficiente,
        deleteDeficiente,
        handleSubmit,
        deficientes: deficientes,
        load: load,
      }}
    >
      {children}
    </DeficienteContext.Provider>
  );
};

const useDeficiente = (): DeficienteContextData => {
  const context = useContext(DeficienteContext);

  if (!context) {
    throw new Error('useDeficiente must be used within a DeficienteProvider');
  }

  return context;
};

export { DeficienteProvider, useDeficiente };