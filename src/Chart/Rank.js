import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import data from '../data.json'; // Use a relative path to import data.json

const columns = [
  {
    field: 'rank',
    headerName: 'Rank',
    width: 100,
    renderCell: (params) => <strong>{params.row.rank}</strong>,
  },
  {
    field: 'avatarUrl',
    headerName: 'Avatar',
    width: 130,
    renderCell: (params) => (
      <img
        src={params.row.avatarUrl}
        alt="Profile"
        style={{ width: 50, height: 50, borderRadius: '50%' }}
      />
    ),
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    renderCell: (params) => params.row.name,
  },
];

export default function Rank() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // You can directly use the imported data variable
    setRows(data.dataTable);
  }, []);

  return (
    <div style={{ height: 400, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h3>Rank</h3>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        hideFooter // Hide footer with rows per page and page navigation
        disableSelectionOnClick // Disable selection when clicking on rows
        pagination={false} // Disable pagination
      />
    </div>
  );
}
