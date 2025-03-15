import React from "react";
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
    width?: string | number;
}
declare const Table: React.FC<TableProps>;
export default Table;
