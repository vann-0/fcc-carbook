<script>
	import Carplate from '../components/Carplate.svelte';
	import Carusage from '../components/Carusage.svelte';
	import Carbookuser from '../components/Carbookuser.svelte';
	import TableContainer from '../components/TableContainer.svelte';
</script>

<svelte:head>
    <title>Car book system</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Car book system</h1>
	</div>
</div>

<Carplate />
<Carusage />
<Carbookuser />
<TableContainer />