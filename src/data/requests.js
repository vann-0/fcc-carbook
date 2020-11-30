import axios from 'axios';
import parsers from './parsers';

async function carbookStats(){
    const response = await axios.get('https://api.covidtracking.com/v1/us/current.json');

    return parsers.carbookStats(response.data);
}

async function statesData(){
    const response = await axios.get('https://api.covidtracking.com/v1/states/current.json');

    return parsers.stateTable(response.data);
}

async function stateStats(state){
    const response = await axios.get('https://api.covidtracking.com/v1/states/current.json');

    return parsers.stateStats(state,response.data);
}

async function historicUS(){
    const response = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
    return parsers.historicUS(response.data);
}

async function historicState(state){
    const response = await axios.get('https://api.covidtracking.com/v1/states/daily.json');

    return parsers.historicState(state,response.data);
}


async function carplateState(){
    const response =await axios.get('http://0.0.0.0:8888/data/cars');
    return parsers.parserCarPlate(response.data);

}

async function carPlateDelete(id_car){
    let st=id_car;
    const response = await axios.get(`http://0.0.0.0:8888/data/cars/${st}`);
    alert(response.data);
}

async function carPlateUpdate(id_car,brand,driver,tel_number,plate){
    const response = await axios.get(`http://0.0.0.0:8888/data/car/${id_car}?plate=${plate}&brand=${brand}&driver=${driver}&tel_number=${tel_number}`)
    alert(response.data);
}

async function carPlateCreate(brand,driver,tel_number,plate)
{
    const response = await axios.get(`http://0.0.0.0:8888/data/car?plate=${plate}&brand=${brand}&driver=${driver}&tel_number=${tel_number}`)
    alert(response.data);
}

export default{
    carbookStats,
    stateStats,
    historicUS,
    historicState,
    statesData,
    carplateState,
    carPlateDelete,
    carPlateUpdate,
    carPlateCreate,
}