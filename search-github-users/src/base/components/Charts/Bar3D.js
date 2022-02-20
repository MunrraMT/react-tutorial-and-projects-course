import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { arrayOf, shape, number, string } from 'prop-types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Bar3D = ({ data }) => {
  const dataFormatter = data.repositories.map((item) => ({
    label: item.repository,
    value: item.forks,
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
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    plugins: {
      title: {
        display: true,
        color: '#000',
        text: 'Most Popular Respository',
        font: { family: 'verdana', size: 18 },
        padding: { bottom: 10 },
      },
      subtitle: {
        display: true,
        color: '#000',
        text: `Total of Forks: ${data.totalForks}`,
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

Bar3D.propTypes = {
  data: shape({
    repositories: arrayOf(shape({ repository: string, forks: number })),
    totalForks: number,
  }).isRequired,
};

export default Bar3D;
