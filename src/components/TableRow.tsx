import { DataPayload } from '@root/interfaces/api';

export const TableRow = ({ rowData }: { rowData: DataPayload }) => {
  return (
    <>
      <tr>
        <td className="border-2">{rowData.stealer_type}</td>
        <td className="border-2">{rowData.computer_information.username}</td>
        <td className="border-2">{rowData.computer_information.os}</td>
        <td className="border-2">
          {rowData.credentials.map((credential) => (
            <table key={credential.url} className="table-fixed w-[600px]">
              <thead>
                <tr>
                  <th className="border-2 w-1/3">Url</th>
                  <th className="border-2 w-1/3">username</th>
                  <th className="border-2 w-1/3">password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 w-1/3 overflow-hidden overflow-ellipsis" rowSpan={credential.creds.length}>{credential.url}</td>
                  <td className="border-2 w-1/3 overflow-hidden overflow-ellipsis">{credential.creds[0].username}</td>
                  <td className="border-2 w-1/3 overflow-hidden overflow-ellipsis">{credential.creds[0].password}</td>
                </tr>
                {credential.creds.slice(1).map((cred, index) => (
                  <tr key={`${cred.username}${cred.password}${index}`}>
                    <td className="border-2 w-1/3 overflow-hidden overflow-ellipsis">{cred.username}</td>
                    <td className="border-2 w-1/3 overflow-hidden overflow-ellipsis">{cred.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </td>
      </tr>
    </>
  );
};
