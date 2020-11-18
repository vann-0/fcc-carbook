<script context="module">
    export async function preload(page){
        return {state:page.params['state']}
    }
</script>
<script>
	import Carplate from '../components/Carplate.svelte';
	import Carusage from '../components/Carusage.svelte';
	import Carbookuser from '../components/Carbookuser.svelte';
    import TableContainer from '../components/TableContainer.svelte';
    
    export let state;
</script>

<svelte:head>
    <title>Car book - {state}</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Car book - {state}</h1>
	</div>
</div>

<Carplate />
<Carusage />
<Carbookuser />