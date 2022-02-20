import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  SubTitle,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { number, string, arrayOf, shape } from 'prop-types';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels, Title, SubTitle);

const Pie3D = ({ data }) => {
  const dataFormatter = data.map((item) => ({
    label: item.language,
    value: item.count,
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
        radius: '90%',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        color: '#000',
        text: 'Most used languages',
        font: { family: 'verdana', size: 18 },
        padding: { bottom: 10 },
      },
      subtitle: {
        display: true,
        color: '#000',
        text: `Total of Languages: ${data.length}`,
        font: { family: 'verdana', size: 12 },
        padding: { bottom: 25 },
      },
      legend: {
        position: 'bottom',
        align: 'center',
        labels: {
          padding: 25,
          font: { size: 15, family: 'verdana' },
          color: '#000',
        },
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
        font: { family: 'verdana', size: 18 },
        padding: 6,
      },
    },
  };

  return <Pie data={chartData} options={options} />;
};

Pie3D.propTypes = {
  data: arrayOf(shape({ language: string, count: number })).isRequired,
};

export default Pie3D;
