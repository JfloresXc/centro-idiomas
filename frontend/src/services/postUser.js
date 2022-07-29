import { API_URL } from 'services/settings'

export const postUser = (data) => {
    return fetch(`${API_URL}/api/estudiantes` ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data && data.error ? null : data
        })
}