import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
    // Trocar localhost pelo IP da sua máquina, pode ser encontrado na página em que o expo está rodando;
    // Exemplo: 
    // baseURL: 'http://192.168.0.1:3333'
});

export default api;