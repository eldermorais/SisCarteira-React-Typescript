import { useEffect, useState } from 'react';
import BarCharts from '../../components/BarCharts';
import PieCharts from '../../components/PieChart';
import api from '../../services/api';
import { AdditionalData, Container, Graphics } from './styles';

function Dashboard() {
  const [countDeficientes, setCountDeficientes] = useState(0);
  const [countMonth, setCountMonth] = useState(0);
  const [countYear, setCountYear] = useState(0);

  const data = new Date();
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  useEffect(() => {
    async function getCount() {
      const response = await api.get('/deficientes/count');
      setCountDeficientes(response.data);
    }

    async function getCountMonth() {
      const response = await api.get(
        `/deficientes/count?updated_at_gte=${ano}-${mes}-01T00:00:00.000`,
      );
      setCountMonth(response.data);
    }

    async function getCountYear() {
      const response = await api.get(
        `/deficientes/count?updated_at_gte=${ano}-01-01T00:00:00.000`,
      );

      setCountYear(response.data);
    }
    getCount();
    getCountMonth();
    getCountYear();
  }, []);
  return (
    <Container>
      <h1>Dados</h1>
      <Graphics>
        <PieCharts />
        <BarCharts />
      </Graphics>
      <AdditionalData>
        <p>Cadastros novos ou atualizados.</p>
        <p>
          <span>mes: {countMonth}</span>
          <br />
          <span>ano: {countYear}</span>
        </p>
        <strong>total: {countDeficientes}</strong>
      </AdditionalData>
    </Container>
  );
}

export default Dashboard;
