import { useState, useMemo, useEffect } from "react";
import { useData } from "../context/DataContext";
import Pagination from "./Pagination";

const Table = () => {
  const { dataset } = useData();
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => setPage(1), [dataset]);

  const visibleData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return dataset.frequent.slice(start, start + pageSize);
  }, [dataset, page]);

  return (
    <div className="content">
      <h3>Economic Monitor</h3>

      <table>
        <thead>
          <tr>
            <th>New Releases</th>
            <th>Frequency</th>
            <th>Unit</th>
            <th>Source</th>
          </tr>
        </thead>

        <tbody>
          {visibleData.map((row) => (
            <tr key={row.id}>
              <td>{row.title}</td>
              <td>{row.freq}</td>
              <td>{row.unit}</td>
              <td>{row.src}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        total={dataset.frequent.length}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default Table;
