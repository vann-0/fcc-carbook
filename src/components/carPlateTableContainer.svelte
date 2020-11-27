<script>
    import Table from './carPlateTable.svelte';
    import TableFilter from './carPlateTableFilter.svelte';
    export let data;
    $: states = data ;

    
</script>

<TableFilter />

<Table {states}/>