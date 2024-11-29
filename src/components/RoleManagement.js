import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const RoleManagement = () => {
  const [roles, setRoles] = useState(() => {
    const savedRoles = localStorage.getItem('roles');
    return savedRoles ? JSON.parse(savedRoles) : [
      { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
      { id: 2, name: 'User', permissions: ['Read'] }
    ];
  });

  const [open, setOpen] = useState(false);
  const [editRole, setEditRole] = useState(null);

  useEffect(() => {
    localStorage.setItem('roles', JSON.stringify(roles));
  }, [roles]);

  const handleEdit = (role) => {
    setEditRole(role);
    setOpen(true);
  };

  const handleDelete = (id) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  const handleSubmit = () => {
    if (editRole.id) {
      setRoles(roles.map(role => (role.id === editRole.id ? editRole : role)));
    } else {
      setRoles([...roles, { ...editRole, id: roles.length + 1 }]);
    }
    setOpen(false);
    setEditRole(null);
  };

  return (
    <div>
      <h2>Role Management</h2>
      <Button variant="contained" onClick={() => { setEditRole({ name: '', permissions: [] }); setOpen(true); }}>
        Add Role
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Role Name</TableCell>
            <TableCell>Permissions</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.permissions.join(', ')}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(role)}>Edit</Button>
                <Button onClick={() => handleDelete(role.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add/Edit Role Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{editRole?.id ? 'Edit Role' : 'Add Role'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Role Name"
            fullWidth
            margin="normal"
            value={editRole?.name || ''}
            onChange={(e) => setEditRole({ ...editRole, name: e.target.value })}
          />
          <TextField
            label="Permissions (comma-separated)"
            fullWidth
            margin="normal"
            value={editRole?.permissions.join(', ') || ''}
            onChange={(e) => setEditRole({ ...editRole, permissions: e.target.value.split(',') })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>{editRole?.id ? 'Update' : 'Add'}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RoleManagement;
