import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Janeiro',
    auditiva: 4000,
    autismo: 2400,
    fisica: 3000,
    intelectual: 2400,
    visual: 5000,
  },
  {
    name: 'Fevereiro',
    auditiva: 4000,
    autismo: 2400,
    fisica: 3000,
    intelectual: 2400,
    visual: 5000,
  },
  {
    name: 'Março',
    auditiva: 4000,
    autismo: 2400,
    fisica: 3000,
    intelectual: 2400,
    visual: 5000,
  },
  {
    name: 'Abril',
    auditiva: 4000,
    autismo: 2400,
    fisica: 3000,
    intelectual: 2400,
    visual: 5000,
  },
  {
    name: 'Maio',
    auditiva: 4000,
    autismo: 2400,
    fisica: 3000,
    intelectual: 2400,
    visual: 5000,
  },
  {
    name: 'Junho',
    auditiva: 4000,
    autismo: 2400,
    fisica: 3000,
    intelectual: 2400,
    visual: 5000,
  },
];

export default function BarCharts() {
  return (
    <BarChart
      width={400}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="auditiva" fill="#0088FE" />
      <Bar dataKey="autismo" fill="#00C49F" />
      <Bar dataKey="fisica" fill="#FFBB28" />
      <Bar dataKey="intelectual" fill="#FF8042" />
      <Bar dataKey="visual" fill="#c03838" />
    </BarChart>
  );
}
