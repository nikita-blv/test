import { DataPayload } from '@root/interfaces/api';
import { PieChart, Pie, Cell } from 'recharts';
import { useMemo } from 'react';
import { stringToColor } from '@root/utils/stringToColor';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: any;
  cy: any;
  midAngle: any;
  innerRadius: any;
  outerRadius: any;
  percent: any;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const DataPieChart = ({ data }: { data: DataPayload[] }) => {
  const dataToVisualize = useMemo(
    () =>
      Object.entries(
        data.reduce(
          (acc, currentValue) => {
            if (!acc[currentValue.stealer_type]) {
              acc[currentValue.stealer_type] = 0;
            }
            acc[currentValue.stealer_type] += 1;
            return acc;
          },
          {} as Record<string, number>,
        ),
      ).map(([name, value]) => ({ value, name, color: stringToColor(name) })),
    [data],
  );
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={dataToVisualize}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {dataToVisualize.map(({name, color}, index) => (
          <Cell key={`${name}-${index}`} fill={color} />
        ))}
      </Pie>
    </PieChart>
  );
};
