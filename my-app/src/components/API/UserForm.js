import React, { useState, useEffect } from 'react';

const UserForm = ({ onSave, editingUser }) => {
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '' });

  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ first_name: '', last_name: '', email: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingUser ? 'Edit User' : 'Add User'}</h2>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingUser ? 'Update' : 'Save'}</button>
    </form>
  );
};

export default UserForm;
