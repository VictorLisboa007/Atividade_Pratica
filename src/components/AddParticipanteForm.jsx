import React, { useState } from 'react';

function AddParticipanteForm({ onAdd }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome && email) {
            onAdd({ nome, email });
            setNome('');
            setEmail('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            <input
                type="email"
                className="form-control mb-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button className="btn btn-primary" type="submit">Adicionar Participante</button>
        </form>
    );
}

export default AddParticipanteForm;