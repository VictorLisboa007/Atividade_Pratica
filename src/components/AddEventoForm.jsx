import React, { useState } from 'react';

function AddEventoForm({ onAdd }) {
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState('');
    const [local, setLocal] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (titulo && data && local && descricao) {
            onAdd({ titulo, data, local, descricao });
            setTitulo('');
            setData('');
            setLocal('');
            setDescricao('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
            />
            <input
                type="date"
                className="form-control mb-2"
                value={data}
                onChange={(e) => setData(e.target.value)}
                required
            />
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Local"
                value={local}
                onChange={(e) => setLocal(e.target.value)}
                required
            />
            <textarea
                className="form-control mb-2"
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
            ></textarea>
            <button type="submit" className="btn btn-success">Adicionar Evento</button>
        </form>
    );
}

export default AddEventoForm;