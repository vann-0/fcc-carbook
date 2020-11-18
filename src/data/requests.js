import axios from 'axios';
import parsers from './parsers';

async function carbookStats(){
    const response = await axios.get('https://covidtracking.com/api/v1/us/current.json');

    return parsers.carbookStats(response.data);
};

export default{
    carbookStats,
}