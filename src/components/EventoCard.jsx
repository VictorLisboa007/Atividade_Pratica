import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventoCard({ evento }) {
    const navigate = useNavigate();

    const verParticipantes = () => {
        navigate(`/eventos/${evento.id}/participantes`);
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{evento.titulo}</h5>
                <p className="card-text">Data: {evento.data}</p>
                <p className="card-text">Local: {evento.local}</p>
                <p className="card-text">{evento.descricao}</p>
                <button className="btn btn-primary" onClick={verParticipantes}>Ver Participantes</button>
            </div>
        </div>
    );
}

export default EventoCard;