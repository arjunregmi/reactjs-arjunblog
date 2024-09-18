
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8000/api'; 


const yourTokenHere = '66eb0f044939deee50075cc3|KaZcrWhhVcuLSpmdAkP55CO19P9Y70sMnFQF8ZPe578a4e40';
axios.defaults.headers.common['Authorization'] = `Bearer ${yourTokenHere}`;

export default axios;