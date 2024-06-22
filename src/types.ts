export interface Row {
  id: string;
  name: string;
  surname: string;
  position: string;
  department: string;
  active: boolean;
  id_: string;
  comments: string;
  extra: string;
}

export const rows: Row = {
  id: '',
  name: '',
  surname: '',
  position: '',
  department: '',
  active: false,
  id_: '',
  comments: '',
  extra: '',
};

export interface Table {
  id: string;
  name: string;
  rows: Row[];
}
