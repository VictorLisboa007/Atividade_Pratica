import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ParticipantesList from '../components/ParticipantesLista';
import AddParticipanteForm from '../components/AddParticipanteForm';
import { getParticipantes, addParticipante } from '../API';
import style from './ParticipantesPage.module.css'

function ParticipantesPage() {
    const { id } = useParams();
    const [participantes, setParticipantes] = useState([]);

    useEffect(() => {
        getParticipantes(id).then(setParticipantes);
    }, [id]);

    const handleAddParticipante = async (participante) => {
        const newParticipante = await addParticipante(id, participante);
        setParticipantes([...participantes, newParticipante]);
    };

    return (
        <div className={style.container}>
            <h1 className="my-4">Participantes</h1>
            <ParticipantesList participantes={participantes} />
            <h2 className="my-4">Adicionar Novo Participante</h2>
            <AddParticipanteForm onAdd={handleAddParticipante} />
        </div>
    );
}

export default ParticipantesPage;