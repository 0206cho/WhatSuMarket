import axios from 'axios'

const http = axios

const enhanceAccessToken = () => {
    const { accessToken } = localStorage
    if (!accessToken) return
    http.defaults.headers.common['Authorization'] = accessToken
}

const logout = () => {
    http.defaults.headers.common['Authorization'] = undefined
}

export default {
    url: 'http://localhost:3030',
    http: http,
    enhanceAccessToken: enhanceAccessToken,
    logout: logout
}