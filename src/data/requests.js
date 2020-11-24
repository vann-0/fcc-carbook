import axios from 'axios';
import parsers from './parsers';

async function carbookStats(){
    const response = await axios.get('https://covidtracking.com/api/v1/us/current.json');

    return parsers.carbookStats(response.data);
};

async function stateStats(state){
    const response = await axios.get('https://covidtracking.com/api/v1/states/current.json');

    return parsers.stateStats(state,response.data);
}

export default{
    carbookStats,
    stateStats,
}