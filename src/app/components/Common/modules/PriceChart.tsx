'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type Props = {
  data: {
    date: string;
    price: number;
  }[];
};

const PriceChart = ({ data }: Props) => {
  return (
    <div className="flex w-full h-48">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" tick={{ fill: '#ccc', fontSize: 10 }} />
          <YAxis tick={{ fill: '#ccc', fontSize: 10 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#22d3ee"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
