import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const chartData = [
  { label: 'HTML', value: 60 },
  { label: 'CSS', value: 73 },
  { label: 'SCSS', value: 45 },
  { label: 'Javascript', value: 80 },
  { label: 'ReactJS', value: 60 },
];

const ExampleChart = () => (
  <ResponsiveContainer width="80%" height={400}>
    <LineChart
      data={chartData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="label" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

export default ExampleChart;
