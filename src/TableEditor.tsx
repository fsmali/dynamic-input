import React, { useState } from 'react';
import { Table, Row, rows } from './types';
import RowEditor from './RowEditor';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { IoIosAddCircle } from 'react-icons/io';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { nanoid } from 'nanoid';

interface TableEditorProps {
  table: Table;
  onUpdateTable: (updatedTable: Table) => void;
  onDeleteTable: () => void;
}

const TableEditor: React.FC<TableEditorProps> = ({
  table,
  onUpdateTable,
  onDeleteTable,
}) => {
  const [newRow, setNewRow] = useState<Row>(rows);
  const [editRow, setEditRow] = useState<Row | null>(null);
  const [isEditingTableName, setIsEditingTableName] = useState(false);
  const [editTableName, setEditTableName] = useState(table.name);

  const handleAddRow = () => {
    if (newRow.name && newRow.surname) {
      const updatedTable = {
        ...table,
        rows: [
          ...table.rows,
          {
            ...newRow,
            id: nanoid(),
          },
        ],
      };

      onUpdateTable(updatedTable);
      toast.success('Row Added');
      setNewRow(rows);
    } else {
      toast.error('Please fill in the rows');
    }
  };

  const handleEditRow = (rowId: string) => {
    const row = table.rows.find((row) => row.id === rowId);
    if (row) {
      setEditRow(row);
    }
  };

  const handleSaveRow = () => {
    if (editRow) {
      const updatedTable = {
        ...table,
        rows: table.rows.map((row) => (row.id === editRow.id ? editRow : row)),
      };

      onUpdateTable(updatedTable);
      setEditRow(null);
      toast.success('Row Edited');
    }
  };

  const handleDeleteRow = (rowId: string) => {
    const updatedTable = {
      ...table,
      rows: table.rows.filter((row) => row.id !== rowId),
    };

    onUpdateTable(updatedTable);
    toast.success('Row Deleted');
  };

  const confirmDeleteRow = (rowId: string) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this row?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDeleteRow(rowId),
        },
        {
          label: 'No',
          onClick: () => toast.info('Deletion cancelled'),
        },
      ],
    });
  };

  const handleSaveTableName = () => {
    onUpdateTable({ ...table, name: editTableName });
    setIsEditingTableName(false);
    toast.success('Table name updated');
  };

  return (
    <div className="table-editor">
      {isEditingTableName ? (
        <div>
          <input
            type="text"
            value={editTableName}
            onChange={(e) => setEditTableName(e.target.value)}
            aria-label="Edit Table Name"
          />
          <button onClick={handleSaveTableName} aria-label="Save Table Name">
            Save
          </button>
        </div>
      ) : (
        <h2 style={{cursor:'pointer'}} onClick={() => setIsEditingTableName(true)}>{table.name}</h2>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Position</th>
            <th>Department</th>
            <th>Active</th>
            <th>ID</th>
            <th>Comments</th>
            <th>Extra</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) =>
            editRow && editRow.id === row.id ? (
              <RowEditor
                key={row.id}
                row={editRow}
                onChange={setEditRow}
                onSave={handleSaveRow}
                onCancel={() => setEditRow(null)}
              />
            ) : (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.surname}</td>
                <td>{row.position}</td>
                <td>{row.department}</td>
                <td>{row.active ? 'Yes' : 'No'}</td>
                <td>{row.id_}</td>
                <td>{row.comments}</td>
                <td>{row.extra}</td>
                <td>
                  <div className="save-delete-btn">
                    <button
                      onClick={() => handleEditRow(row.id)}
                      aria-label="Edit Row"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => confirmDeleteRow(row.id)}
                      aria-label="Delete Row"
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </td>
              </tr>
            )
          )}
          <tr>
            <td>
              <input
                type="text"
                value={newRow.name}
                onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
                aria-label="New Row Name"
              />
            </td>
            <td>
              <input
                type="text"
                value={newRow.surname}
                onChange={(e) =>
                  setNewRow({ ...newRow, surname: e.target.value })
                }
                aria-label="New Row Surname"
              />
            </td>
            <td>
              <input
                type="text"
                value={newRow.position}
                onChange={(e) =>
                  setNewRow({ ...newRow, position: e.target.value })
                }
                aria-label="New Row Position"
              />
            </td>
            <td>
              <input
                type="text"
                value={newRow.department}
                onChange={(e) =>
                  setNewRow({ ...newRow, department: e.target.value })
                }
                aria-label="New Row Department"
              />
            </td>
            <td>
              <input
                type="checkbox"
                checked={newRow.active}
                onChange={(e) =>
                  setNewRow({ ...newRow, active: e.target.checked })
                }
                aria-label="New Row Active"
              />
            </td>
            <td>
              <input
                type="text"
                value={newRow.id_}
                onChange={(e) => setNewRow({ ...newRow, id_: e.target.value })}
                aria-label="New Row ID"
              />
            </td>
            <td>
              <input
                type="text"
                value={newRow.comments}
                onChange={(e) =>
                  setNewRow({ ...newRow, comments: e.target.value })
                }
                aria-label="New Row Comments"
              />
            </td>
            <td>
              <input
                type="text"
                value={newRow.extra}
                onChange={(e) =>
                  setNewRow({ ...newRow, extra: e.target.value })
                }
                aria-label="New Row Extra"
              />
            </td>
            <td>
              <button onClick={handleAddRow} aria-label="Add Row">
                <IoIosAddCircle />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="delete-btn"
        onClick={onDeleteTable}
        aria-label="Delete Table"
      >
        <MdDeleteForever />
      </button>
    </div>
  );
};

export default TableEditor;
