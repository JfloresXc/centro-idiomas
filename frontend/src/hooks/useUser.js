import { useCallback, useContext, useEffect } from 'react'
import { useLocation } from 'wouter'
import UserContext from 'contexts/UserContext'
import { signin } from 'services/signin'
import { getUserForToken } from 'services/getUserForToken'
import { postUser } from 'services/postUser'

export const useUser = () => {
    const { user, setUser } = useContext(UserContext)
    const { jwt, userData } = user
    const [, setLocation] = useLocation()

    const logout = useCallback(() => {
        window.localStorage.removeItem('jwt')
        setUser({})
        setLocation('/')
    }, [setUser, setLocation])

    useEffect(() => {
        if (jwt) {
            getUserForToken({ jwt }).then(data => {
                !data ? logout() : setUser({ ...user, userData: data })
            })
        }
    }, [jwt, setUser, user, logout])

    const login = useCallback(({ username, password }) => {
        return signin({ username, password })
            .then(({ jwt, user }) => {
                if (jwt) {
                    window.localStorage.setItem('jwt', jwt)
                    setUser({ ...user, jwt, userData: user })
                    return true
                }
                return false

            })
            .catch(err => {
                window.localStorage.removeItem('jwt')
                console.error(err)
            })
    }, [setUser])

    return {
        login,
        logout,
        jwt,
        user: userData,
        postUser,
        isLogged: Boolean(jwt)
    }
}