import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = [
  {
    label: 'HTML',
    value: 60,
    borderColor: '#ff5e13',
    backgroundColor: 'RGB(255, 94, 19,0.4)',
  },
  {
    label: 'CSS',
    value: 73,
    borderColor: '#0e76a8',
    backgroundColor: 'RGB(14, 118, 168,0.4)',
  },
  {
    label: 'SCSS',
    value: 45,
    borderColor: '#cc6699',
    backgroundColor: 'RGB(204, 102, 153,0.4)',
  },
  {
    label: 'Javascript',
    value: 80,
    borderColor: '#f0db4f',
    backgroundColor: 'RGB(240, 219, 79,0.4)',
  },
  {
    label: 'ReactJS',
    value: 60,
    borderColor: '#61d8fb',
    backgroundColor: 'RGB(97, 216, 251,0.4)',
  },
];

const chartData = {
  labels: data.map((item) => item.label),
  datasets: [
    {
      data: data.map((item) => item.value),
      backgroundColor: data.map((item) => item.backgroundColor),
      borderColor: data.map((item) => item.borderColor),
    },
  ],
};

const Pie3D = () => (
  <Pie
    data={chartData}
    options={{
      responsive: true,
      plugins: {
        legend: { position: 'bottom', labels: { padding: 25 } },
      },
    }}
  />
);

export default Pie3D;
