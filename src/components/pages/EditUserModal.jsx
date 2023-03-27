import React, { useState } from "react";

const EditUserModal = ({ isOpen, onClose, onSave, user }) => {
  const [id, setId] = useState(user.id);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [birthday, setBirthday] = useState(user.birthday);
  const [phone, setPhone] = useState(user.phone);

  const handleSave = (e) => {
    e.preventDefault();
    onSave({ id, name, surname, email, birthday, phone });
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit User</p>
          <button className="delete" aria-label="close" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          <form onSubmit={handleSave}>
            <div className="field">
              <label className="label">ID</label>
              <div className="control">
                <input className="input" type="text" value={id} onChange={(e) => setId(e.target.value)} />
              </div>
            </div>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
            <div className="field">
              <label className="label">Surname</label>
              <div className="control">
                <input className="input" type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="field">
              <label className="label">Birthday</label>
              <div className="control">
                <input className="input" type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
              </div>
            </div>
            <div className="field">
              <label className="label">Phone</label>
              <div className="control">
                <input className="input" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-primary">Save</button>
              </div>
              <div className="control">
                <button className="button is-link" onClick={onClose}>Cancel</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditUserModal;
