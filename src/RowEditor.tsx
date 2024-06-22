import React from 'react';
import { Row } from './types';
import { FaSave } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import './App.css';

interface RowEditorProps {
  row: Row;
  onChange: (updatedRow: Row) => void;
  onSave: () => void;
  onCancel: () => void;
}

const RowEditor: React.FC<RowEditorProps> = ({
  row,
  onChange,
  onSave,
  onCancel,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          value={row.name}
          onChange={(e) => onChange({ ...row, name: e.target.value })}
          aria-label="Row Name"
        />
      </td>
      <td>
        <input
          type="text"
          value={row.surname}
          onChange={(e) => onChange({ ...row, surname: e.target.value })}
          aria-label="Row Surname"
        />
      </td>
      <td>
        <input
          type="text"
          value={row.position}
          onChange={(e) => onChange({ ...row, position: e.target.value })}
          aria-label="Row Position"
        />
      </td>
      <td>
        <input
          type="text"
          value={row.department}
          onChange={(e) => onChange({ ...row, department: e.target.value })}
          aria-label="Row Department"
        />
      </td>
      <td>
        <input
          type="checkbox"
          checked={row.active}
          onChange={(e) => onChange({ ...row, active: e.target.checked })}
          id={`custom-checkbox-${row.id}`}
          aria-label="Row Active"
        />
        <label
          htmlFor={`custom-checkbox-${row.id}`}
          className="custom-checkbox"
        ></label>
      </td>
      <td>
        <input
          type="text"
          value={row.id_}
          onChange={(e) => onChange({ ...row, id_: e.target.value })}
          aria-label="Row ID"
        />
      </td>
      <td>
        <input
          type="text"
          value={row.comments}
          onChange={(e) => onChange({ ...row, comments: e.target.value })}
          aria-label="Row Comments"
        />
      </td>
      <td>
        <input
          type="text"
          value={row.extra}
          onChange={(e) => onChange({ ...row, extra: e.target.value })}
          aria-label="Row Extra"
        />
      </td>
      <td>
        <div className="save-cancel-btn">
          <button className="save-btn" onClick={onSave} aria-label="Save Row">
            <FaSave />
          </button>
          <button
            className="cancel-btn"
            onClick={onCancel}
            aria-label="Cancel Edit"
          >
            <MdCancel />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default RowEditor;
