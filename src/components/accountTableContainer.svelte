<script>
    import Table from './accountTable.svelte';
    import TableFilter from './accountTableFilter.svelte';
    export let data;
    $:states = data;
</script>

<TableFilter />

<Table {states}/>