const API_URL = 'http://localhost:5000';

export async function getEventos() {
    const response = await fetch(`${API_URL}/Eventos`);
    return response.json();
}

export async function getEvento(eventoId) {
    const response = await fetch(`${API_URL}/Eventos/${eventoId}`);
    return response.json();
}

export async function addEvento(evento) {
    const response = await fetch(`${API_URL}/Eventos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(evento)
    });
    return response.json();
}

export async function getParticipantes(eventoId) {
    const response = await fetch(`${API_URL}/Participantes?evento_id=${eventoId}`);
    return response.json();
}

export async function addParticipante(eventoId, participante) {
    const response = await fetch(`${API_URL}/Participantes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...participante, evento_id: eventoId })
    });
    return response.json();
}