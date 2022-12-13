import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {
  const [data, setData] = useState([]);
  const newData = [
    {
      value: 107.5308857,
      type: 'plutus2_GROSS',
      time: '2019-12-08 06:00:00',
    },
    {
      value: 101,
      type: 'plutus2_GROSS1',
      time: '2019-12-08 07:00:00',
    },
    {
      value: 102,
      type: 'plutus2_GROSS1',
      time: '2019-12-08 08:00:00',
    },
    {
      value: 103,
      type: 'plutus2_GROSS1',
      time: '2019-12-08 09:00:00',
    },
    {
      value: 101,
      type: 'plutus2_GROSS1',
      time: '2019-12-08 10:00:00',
    },
    {
      value: 111,
      type: 'plutus2_GROSS1',
      time: '2019-12-08 11:00:00',
    },
    {
      value: 121,
      type: 'plutus2_GROSS1',
      time: '2019-12-08 12:00:00',
    },
    {
      value: 111,
      type: 'plutus2_GROSS1',
      time: '2019-12-08 13:00:00',
    },
    {
      value: 141,
      type: 'plutus2_GROSS1',
      time: '2019-12-08 14:00:00',
    },
    {
      value: 171,
      type: 'plutus2_GROSS',
      time: '2019-12-08 15:00:00',
    },
  ];
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json'
    )
      .then((response) => response.json())
      .then((json) => setData(newData))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'time',
    yField: 'value',
    seriesField: 'type',
    // xAxis: {
    //   type: 'datetime',
    // },
    yAxis: {},
    slider: {
      start: 0,
      end: 1,
    },
  };

  return <Line {...config} />;
};

ReactDOM.render(<DemoLine />, document.getElementById('container'));
