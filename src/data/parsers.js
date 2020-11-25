import format from './format';
import moment from 'moment';
import stateNames from './stateName';

function carbookStats(data){
    const [carBookRaw]=data;

    return parserStats(carBookRaw);
}

function stateStats(state,data){
    const stateRawData = data.find(d => d.state === state);

    return parserStats(stateRawData);
}

function stateTable(stateData){
    return stateData.map((data) => {
        const {name} = stateNames.find(d => d.abbreviation === data.state);
        return {
            cases:format.number(data.positive),
            deaths:format.number(data.death),
            tested:format.number(data.totalTestResults),
            state:format.number(data.state),
            fullStateName: name,
        };
    });
}

function historicUS(historicData){
  return parserHistoric(historicData);
}

function historicState(state,historicData){
    const stateHistoric = historicData.filter(d =>d.state ===state );

    return parserHistoric(stateHistoric);
}

function parserHistoric(historicData){
    return[
        {
            label:'Cases',
            key:'positive',
            color:'rgb(100,0,200)'   
        },
        {
            label:'Recovered',
            key:'recovered',
            color:'rgb(100,100,200)'   
        },
        {
            label:'Total Tested',
            key:'totalTestResults',
            color:'rgb(10,30,100)'   
        },
        {
            label:'Hospitalized',
            key:'hospitalizedCurrently',
            color:'rgb(20,100,230)'   
        },
        {
            label:'Deaths',
            key:'death',
            color:'rgb(255,99,132)'   
        }
    ].reduce((prev,next)=>{
        if (historicData.filter((d) => d[next.key]).length>4 ){
            prev.push(parserChart(historicData,next.key,next.label,next.color));
        }
        return prev;
    },[]);
}

function parserChart(historicData,key,label,color){
    const chartData = historicData.map(data =>{
        return {
            x:moment(data.date,'YYYYMMDD'),
            y:data[key]||0,
        }
    });
    return {
        label,
        data:chartData,
        fill:false,
        borderColor:color,
    };
}

function parserStats(rawStats){
    return {
        cases:format.number(rawStats.positive),
        deaths:format.number(rawStats.death),
        recovered:format.number(rawStats.recovered),
        ventilator:format.number(rawStats.onVentilatorCurrently),
        hospitalized:format.number(rawStats.hospitalized),
        icu:format.number(rawStats.inIcuCurrently),
        tested:format.number(rawStats.totalTestResults),
        updated:moment(rawStats.lastModified).format('LLLL'),
    };
}

export default{
    carbookStats,
    stateStats,
    historicUS,
    historicState,
    stateTable,
}