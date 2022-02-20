import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  SubTitle,
} from 'chart.js';
import { number, string, arrayOf, shape } from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title, SubTitle);

const Doughnut2d = ({ data }) => {
  const dataFormatter = data.languageCount.map((item) => ({
    label: item.language,
    value: item.stars,
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
        text: 'Stars per Language',
        font: { family: 'verdana', size: 18 },
        padding: { bottom: 10 },
      },
      subtitle: {
        display: true,
        color: '#000',
        text: `Total of Stars: ${data.totalStars}`,
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

  return <Doughnut data={chartData} options={options} />;
};

Doughnut2d.propTypes = {
  data: shape({
    languageCount: arrayOf(shape({ language: string, stars: number })),
    totalStars: number,
  }).isRequired,
};

export default Doughnut2d;
