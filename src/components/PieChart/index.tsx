import { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import api from '../../services/api';

import { Container } from './styles';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#c03838'];

function PieCharts() {
  const [auditiva, setAuditiva] = useState(0);
  const [autismo, setAutismo] = useState(0);
  const [fisica, setFisica] = useState(0);
  const [intelectual, setIntelectual] = useState(0);
  const [visual, setVisual] = useState(0);

  useEffect(() => {
    async function getAuditiva() {
      const response = await api.get('/deficientes/count?deficiencia=1');
      setAuditiva(response.data);
    }

    async function getAutismo() {
      const response = await api.get('/deficientes/count?deficiencia=2');
      setAutismo(response.data);
    }

    async function getFisica() {
      const response = await api.get('/deficientes/count?deficiencia=3');
      setFisica(response.data);
    }

    async function getIntelectual() {
      const response = await api.get('/deficientes/count?deficiencia=4');
      setIntelectual(response.data);
    }

    async function getVisual() {
      const response = await api.get('/deficientes/count?deficiencia=5');
      setVisual(response.data);
    }

    getVisual();
    getIntelectual();
    getFisica();
    getAutismo();
    getAuditiva();
  }, []);

  const data = [
    { name: 'Auditiva', value: auditiva },
    { name: 'Autismo', value: autismo },
    { name: 'Física', value: fisica },
    { name: 'Intelectual', value: intelectual },
    { name: 'Visual', value: visual },
  ];
  return (
    <Container>
      <h3>Total de cadastros por deficiencia</h3>
      <PieChart width={500} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={250}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Container>
  );
}
export default PieCharts;
