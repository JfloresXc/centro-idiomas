import { API_URL } from 'services/settings'

export const getProvincias = () => {
    return fetch(`${API_URL}/api/provincias` ,{
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            return data && data.error ? null : data
        })
}