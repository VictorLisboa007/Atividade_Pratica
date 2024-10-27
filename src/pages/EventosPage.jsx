import React, { useEffect, useState } from 'react';
import EventoCard from '../components/EventoCard';
import AddEventoForm from '../components/AddEventoForm';
import { getEventos, addEvento } from '../API';
import style from './EventosPage.module.css'
import '../App.css'

function EventosPage() {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        getEventos().then(setEventos);
    }, []);

    const handleAddEvento = async (evento) => {
        const newEvento = await addEvento(evento);
        setEventos([...eventos, newEvento]);
    };

    return (
        <div className={style.container}>
            <h1 className="my-4">Eventos</h1>
            <AddEventoForm onAdd={handleAddEvento} />
            {eventos.map(evento => (
                <EventoCard key={evento.id} evento={evento} />
            ))}
        </div>
    );
}

export default EventosPage;