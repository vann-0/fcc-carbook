<script>
    import TableFilter from './guestInfoTableFilter.svelte';
    import Table from './guestInfoTable.svelte';
    
    export let data;
    export let plate="";
    $:states= data;


</script>

<TableFilter bind:plate {states}/>

<Table {plate}/>
