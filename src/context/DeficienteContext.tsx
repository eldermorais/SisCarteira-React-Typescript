import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import api from '../services/api';
import { useAuth } from './AuthContext';

interface DeficienciaData {
  id: string;
  descricao: string;
}
interface FotoData {
  id: string;
  url: string;
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
  foto?: FotoData;
}

export interface DeficienteProviderProps {
  children: ReactNode;
}

interface SubmitData {
  search: string;
}
export interface LoadProps {
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

interface DeficienteContextData {
  deleteDeficiente: (deficiente: DeficienteProps) => void;
  loadDeficiente: (deficiente: DeficienteProps) => void;
  handleSubmit: (form: SubmitData) => Promise<void>;
  deficientes: DeficienteProps[];
  load: DeficienteProps | undefined;
  getList: () => Promise<void>;
  countTotal: number;
  limite: number;
  pages: number[];
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
}

const DeficienteContext = createContext<DeficienteContextData>(
  {} as DeficienteContextData,
);

const DeficienteProvider = ({ children }: DeficienteProviderProps) => {
  const { user } = useAuth();

  const [deficientes, setDeficientes] = useState<DeficienteProps[]>([]);
  const [countTotal, setCountTotal] = useState(0);
  const [limite, setLimite] = useState(2);
  const [start, setStart] = useState(0);
  setLimite;

  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [load, setLoad] = useState<DeficienteProps>();

  async function getList() {
    if (user) {
      const response = await api.get(
        `/deficientes?_start=${start}&_limit=${limite}&_sort=nome:ASC`,
      );
      setDeficientes(response.data);
      const countResponse = await api.get(
        `/deficientes/count?_start=${start}&_limit=${limite}&_sort=nome:ASC`,
      );
      setCountTotal(countResponse.data);
    }
  }

  useEffect(() => {
    getList();
  }, [setDeficientes, setLoad, start]);

  useEffect(() => {
    const totalPages = Math.ceil(countTotal / limite);
    const arrayPages = [];
    for (let i = 1; i <= totalPages; i++) {
      arrayPages.push(i);
    }
    setPages(arrayPages);
  }, [countTotal]);

  useEffect(() => {
    const inicio = (currentPage - 1) * limite;
    setStart(inicio);
  }, [currentPage, start]);

  const handleSubmit = useCallback(
    async ({ search }) => {
      const response = await api.get(
        `https://strapi-siscarteita.herokuapp.com/deficientes?_start=${start}&_limit=${limite}&_where[_or][0][nome_contains]=${search}&_where[_or][1][cpf]=${search}`,
      );

      setDeficientes(response.data);

      const countResponse = await api.get(
        `https://strapi-siscarteita.herokuapp.com/deficientes/count?_start=${start}&_limit=${limite}&_where[_or][0][nome_contains]=${search}&_where[_or][1][cpf]=${search}`,
      );

      setCountTotal(countResponse.data);
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

      setLoad(initialValues);
    },

    [setLoad, load],
  );

  const initialValues: DeficienteProps = {
    nome: '',
    cpf: '',
    data_nascimento: '',
    deficiencia: { id: '', descricao: '' },
    uf: '',
    ativo: false,
    cep: '',
    logradouro: '',
    num_endereco: '',
    localidade: '',
    bairro: '',
    foto: { id: '', url: '' },
  };

  return (
    <DeficienteContext.Provider
      value={{
        loadDeficiente,
        deleteDeficiente,
        handleSubmit,
        deficientes: deficientes,
        load: load,
        getList,
        countTotal: countTotal,
        limite: limite,
        pages: pages,
        currentPage: currentPage,
        setCurrentPage: setCurrentPage,
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
