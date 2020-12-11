<!-- <script context="module">
    import moment from 'moment';
    export async function preload(){
        const weekday = moment().day();
        const formerSunday = moment().subtract(weekday, 'd').format("YYYY-MM-DD");
        const nextSaturday = moment().add(6-weekday, 'd').format("YYYY-MM-DD");
        return {formerSunday,nextSaturday}; 
    }
</script> -->

<script>
    import TableFilter from './guestInfoTableFilter.svelte';
    import Table from './guestInfoTable.svelte';
    let formerSunday,thisMonday,thisTuesday,thisWednesday,thisThursday,thisFriday, nextSaturday;
    export let data;
    export let plate="";
    export let guestInfoStates;
    $:states= data;


</script>

<TableFilter bind:plate bind:formerSunday bind:thisMonday bind:thisTuesday bind:thisWednesday bind:thisThursday bind:thisFriday  bind:nextSaturday {states}/>

<Table {plate} {formerSunday} {nextSaturday} {thisMonday} {thisTuesday} {thisWednesday} {thisThursday} {thisFriday} {guestInfoStates}/>

