import React from 'react';

function ParticipantesList({ participantes }) {
    return (
        <ul className="list-group">
            {participantes.map(participante => (
                <li key={participante.id} className="list-group-item">
                    {participante.nome} - {participante.email}
                </li>
            ))}
        </ul>
    );
}

export default ParticipantesList;