import { API_URL } from 'services/settings'

export const getUserForToken = ({ jwt }) => {
    return fetch(`${API_URL}/api/estudiantes/token` ,{
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': jwt
        }
    })
        .then(response => response.json())
        .then(data => {
            return data && data.error ? null : data
        })
}