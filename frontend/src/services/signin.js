import { API_URL } from 'services/settings'

export const signin = ({ username, password }) => {
    return fetch(`${API_URL}/api/estudiantes/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.json())
        .then(({ token, user }) => {
            return { jwt: token, user }
        })
        .catch(error => console.log(error))
}