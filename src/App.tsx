import React, { useState } from 'react';
import { Table } from './types';
import TableList from './TableList';
import TableEditor from './TableEditor';
import './App.css';
import { nanoid } from 'nanoid';
import { IoIosAddCircle } from 'react-icons/io';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const [tables, setTables] = useState<Table[]>([]);
  const [newTableName, setNewTableName] = useState<string>('');
  const [selectedTableId, setSelectedTableId] = useState<string | null>(null);

  const handleAddTable = () => {
    if (newTableName.trim()) {
      const newTable = {
        id: nanoid(),
        name: newTableName,
        rows: [],
      };

      setTables([...tables, newTable]);
      toast.success('Table Added');
      setNewTableName('');
    } else {
      toast.error('Please add table name');
    }
  };

  const handleUpdateTable = (updatedTable: Table) => {
    setTables(
      tables.map((table) =>
        table.id === updatedTable.id ? updatedTable : table
      )
    );
  };

  const handleDeleteTable = (id: string) => {
    setTables(tables.filter((table) => table.id !== id));
    toast.success('Table deleted');
    setSelectedTableId(null);
  };

  const confirmDeleteTable = (id: string) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this table?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDeleteTable(id),
        },
        {
          label: 'No',
          onClick: () => toast.info('Deletion cancelled'),
        },
      ],
    });
  };

  return (
    <>
      <div className="container">
        <ToastContainer autoClose={1000} />
        <TableList tables={tables} onSelectTableID={setSelectedTableId} />
        <div className="table-add">
          <div>
            {tables.map(
              (table) =>
                table.id === selectedTableId && (
                  <TableEditor
                    key={table.id}
                    table={table}
                    onUpdateTable={handleUpdateTable}
                    onDeleteTable={() => confirmDeleteTable(table.id)}
                  />
                )
            )}
          </div>

          <div className="add-table">
            <input
              type="text"
              placeholder="Table Name"
              value={newTableName}
              onChange={(e) => setNewTableName(e.target.value)}
            />
            <button onClick={handleAddTable}>
              <IoIosAddCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
