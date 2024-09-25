import { DataPayload } from '@root/interfaces/api';
import { TableRow } from '@root/components/TableRow';

export const Table = ({ data }: { data: DataPayload[] }) => {
  return (
    <div className="p-1">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="border-2">Stealer type</th>
            <th className="border-2">Username</th>
            <th className="border-2">Os</th>
            <th className="border-2">Credentials</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} rowData={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
