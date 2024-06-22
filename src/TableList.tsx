import React from 'react';
import { Table } from './types';

interface TableListProps {
  tables: Table[];
  onSelectTableID: (tableId: string) => void;
}

const TableList: React.FC<TableListProps> = ({ tables, onSelectTableID }) => {
  return (
    <aside className="table-list">
      <h2>Lists</h2> <br />
      <p>Select Your Table</p> <br />
      <ul>
        {tables.map((table) => (
          <li
            key={table.id}
            onClick={() => onSelectTableID(table.id)}
            className="table-list-item"
            aria-selected={false}
          >
            <h4>{table.name}</h4>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TableList;
