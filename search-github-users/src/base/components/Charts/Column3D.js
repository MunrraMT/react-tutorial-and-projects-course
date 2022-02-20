import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  SubTitle,
} from 'chart.js';
import { arrayOf, number, shape, string } from 'prop-types';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
);

const Column3D = ({ data }) => {
  const dataFormatter = data.repositories.map((item) => ({
    label: item.repository,
    value: item.size,
    borderColor: {
      HTML: '#ff5e13',
      CSS: '#264de4',
      JavaScript: '#f0db4f',
      TypeScript: '#007acc',
    }[item.language],
    backgroundColor: {
      HTML: '#ffbea0',
      CSS: '#a8b7f4',
      JavaScript: '#f9f0b8',
      TypeScript: '#99c9ea',
    }[item.language],
  }));

  const chartData = {
    labels: dataFormatter.map((item) => item.label),
    datasets: [
      {
        data: dataFormatter.map((item) => item.value),
        backgroundColor: dataFormatter.map((item) => item.backgroundColor),
        borderColor: dataFormatter.map((item) => item.borderColor),
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        color: '#000',
        title: {
          display: true,
          color: '#000',
          text: 'Size(mb)',
          font: { family: 'verdana', size: 12 },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        color: '#000',
        text: 'Biggest Respositories',
        font: { family: 'verdana', size: 18 },
        padding: { bottom: 10 },
      },
      subtitle: {
        display: true,
        color: '#000',
        text: `Total of Repositories: ${data.totalRepositories}`,
        font: { family: 'verdana', size: 12 },
        padding: { bottom: 25 },
      },
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        backgroundColor: '#fff',
        color: '#000',
        borderColor(context) {
          return context.dataset.borderColor;
        },
        borderRadius: 25,
        borderWidth: 2,
        font: { family: 'verdana', size: 12 },
        padding: 4,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

Column3D.propTypes = {
  data: shape({
    repositories: arrayOf(
      shape({
        repository: string,
        size: number,
      }),
    ),
    totalRepositories: number,
  }).isRequired,
};

export default Column3D;
