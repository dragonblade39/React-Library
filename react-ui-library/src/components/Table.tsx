import React from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

interface DataItem {
  name: string;
  age: number;
  city: string;
}

interface Column {
  header: string;
  accessor: keyof DataItem;
  sortable: boolean;
}

interface TableProps {
  data: DataItem[];
  columns: Column[];
  sortColumn: keyof DataItem | null;
  sortDirection: "asc" | "desc";
  onSort: (accessor: keyof DataItem) => void;
  width?: string | number; // Accept width as a prop
}

const Table: React.FC<TableProps> = ({ data, columns, sortColumn, sortDirection, onSort, width }) => {
  return (
    <div style={{ maxWidth: width || "800px", fontFamily: "'Poppins', sans-serif", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ background: "#f4f4f4", textAlign: "left" }}>
            {columns.map((col) => (
              <th
                key={col.accessor as string}
                style={{ padding: "12px", borderBottom: "2px solid #ddd", cursor: col.sortable ? "pointer" : "default" }}
                onClick={() => col.sortable && onSort(col.accessor)}
              >
                {col.header}{" "}
                {col.sortable &&
                  (sortColumn === col.accessor ? (sortDirection === "asc" ? <FaSortUp /> : <FaSortDown />) : <FaSort />)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ background: index % 2 === 0 ? "#fff" : "#f9f9f9" }}>
              {columns.map((col) => (
                <td key={col.accessor as string} style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
