import { Line } from 'react-chartjs-2';

const days = [
  '2020-11-16',
  '2020-11-17',
  '2020-11-18',
  '2020-11-19',
  '2020-11-20',
  '2020-11-21',
  '2020-11-22',
  '2020-11-23',
  '2020-11-24',
  '2020-11-25',
  '2020-11-26',
  '2020-11-27',
  '2020-11-28',
  '2020-11-29',
  '2020-11-30',
  '2020-12-01',
  '2020-12-02',
  '2020-12-03',
  '2020-12-04',
  '2020-12-05',
  '2020-12-06',
  '2020-12-07',
  '2020-12-08',
  '2020-12-09',
  '2020-12-10',
  '2020-12-11',
  '2020-12-12',
  '2020-12-13',
  '2020-12-14',
  '2020-12-15',
  '2020-12-16',
  '2020-12-17',
  '2020-12-18',
  '2020-12-19',
  '2020-12-20',
  '2020-12-21',
  '2020-12-22',
  '2020-12-23',
  '2020-12-24',
  '2020-12-25',
  '2020-12-26',
  '2020-12-27',
  '2020-12-28',
  '2020-12-29',
  '2020-12-30',
  '2020-12-31',
  '2021-01-01',
  '2021-01-02',
  '2021-01-03',
  '2021-01-04',
  '2021-01-05',
  '2021-01-06',
  '2021-01-07',
  '2021-01-08',
  '2021-01-09',
  '2021-01-10',
  '2021-01-11',
  '2021-01-12',
  '2021-01-13',
  '2021-01-14',
  '2021-01-15',
  '2021-01-16',
  '2021-01-17',
  '2021-01-18',
  '2021-01-19',
  '2021-01-20',
  '2021-01-21',
  '2021-01-22',
  '2021-01-23',
  '2021-01-24',
  '2021-01-25',
  '2021-01-26',
  '2021-01-27',
  '2021-01-28',
  '2021-01-29',
  '2021-01-30',
  '2021-01-31',
  '2021-02-01',
  '2021-02-02',
  '2021-02-03',
  '2021-02-04',
  '2021-02-05',
  '2021-02-06',
  '2021-02-07',
  '2021-02-08',
  '2021-02-09',
  '2021-02-10',
  '2021-02-11',
  '2021-02-12',
  '2021-02-13',
  '2021-02-14',
  '2021-02-15',
  '2021-02-16',
  '2021-02-17',
  '2021-02-18',
  '2021-02-19',
  '2021-02-20',
  '2021-02-21',
  '2021-02-22',
  '2021-02-23',
  '2021-02-24',
  '2021-02-25',
  '2021-02-26',
  '2021-02-27',
  '2021-02-28',
  '2021-03-01',
  '2021-03-02',
  '2021-03-03',
  '2021-03-04',
  '2021-03-05',
  '2021-03-06',
  '2021-03-07',
  '2021-03-08',
  '2021-03-09',
  '2021-03-10',
  '2021-03-11',
  '2021-03-12',
  '2021-03-13',
  '2021-03-14',
  '2021-03-15',
];

const price = [
  '6.39',
  '13.36',
  '19.93',
  '30.89',
  '45.62',
  '62.46',
  '76.45',
  '98.25',
  '107.45',
  '111.51',
  '110.46',
  '119.07',
  '132.52',
  '151.60',
  '179.02',
  '188.93',
  '208.68',
  '232.79',
  '228.63',
  '251.88',
  '268.03',
  '277.23',
  '272.09',
  '293.56',
  '298.20',
  '301.06',
  '326.26',
  '351.00',
  '364.80',
  '382.79',
  '431.83',
  '453.32',
  '477.34',
  '496.83',
  '497.07',
  '490.87',
  '526.46',
  '502.04',
  '545.36',
  '577.93',
  '606.42',
  '734.88',
  '812.15',
  '842.75',
  '896.88',
  '954.23',
  '993.88',
  '1106.37',
  '1443.15',
  '1581.19',
  '1722.45',
  '1926.00',
  '2010.79',
  '2039.22',
  '2197.15',
  '2215.60',
  '1961.50',
  '1923.87',
  '2114.91',
  '2326.91',
  '2283.51',
  '2469.44',
  '2524.04',
  '2743.74',
  '3166.77',
  '3399.73',
  '2792.04',
  '3148.57',
  '3216.96',
  '3705.49',
  '3572.86',
  '3737.42',
  '3489.70',
  '3814.28',
  '4018.88',
  '4085.48',
  '3968.32',
  '4209.67',
  '4712.94',
  '5272.43',
  '5214.37',
  '5697.20',
  '5647.56',
  '5534.01',
  '6113.46',
  '6288.88',
  '6299.91',
  '6596.55',
  '6949.76',
  '6937.97',
  '6972.72',
  '6967.38',
  '7070.34',
  '7433.91',
  '7903.20',
  '8113.19',
  '8045.46',
  '8250.12',
  '8033.44',
  '7204.94',
  '7502.34',
  '6873.24',
  '6815.54',
  '6970.81',
  '6836.55',
  '7609.01',
  '7285.49',
  '7775.45',
  '7658.35',
  '7670.01',
  '8362.16',
  '8846.25',
  '9478.96',
  '9766.34',
  '9471.48',
  '9732.46',
  '9538.41',
  '10497.47',
  '10265.18',
];
export default function PerformanceLine() {
  const data = {
    //x axis data
    labels: days,
    datasets: [
      {
        label: 'Portoflio Value',
        //y axis data
        data: price,
        fill: false,
        borderColor: 'rgb(55, 155, 255)',
        //sets chart line straight
        lineTension: 0,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };

  const options = {
    //HIDE LABEL
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'month',
            displayFormats: { month: 'MMM' },
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
}
