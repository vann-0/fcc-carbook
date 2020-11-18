import format from './format';
import moment from 'moment';

function carbookStats(data){
    const [carBookRaw]=data;

    return {
        cases:format.number(carBookRaw.positive),
        deaths:format.number(carBookRaw.death),
        recovered:format.number(carBookRaw.recovered),
        ventilator:format.number(carBookRaw.onVentilatorCurrently),
        hospitalized:format.number(carBookRaw.hospitalized),
        icu:format.number(carBookRaw.inIcuCurrently),
        tested:format.number(carBookRaw.totalTestResults),
        updated:moment(carBookRaw.lastModified).format('LLLL'),
    };
}

export default{
    carbookStats,
}