<script context="module">
	import requests from '../data/requests.js';

	export async function preload(){
		try {
			const carbookStats = await requests.carbookStats();
			const historicUS = await requests.historicUS();
			return {carbookStats,historicUS};
		} catch (error) {
			this.error(500,"There is an error in calling the api,please try again in 5 minutes.");
			return;
		}
	}
</script>

<script>
	import Carplate from '../components/Carplate.svelte';
	import Carusage from '../components/Carusage.svelte';
	import Carbookuser from '../components/Carbookuser.svelte';
	import TableContainer from '../components/TableContainer.svelte';
import About from './about.svelte';
import Error from './_error.svelte';
import Layout from './_layout.svelte';

	export let carbookStats;
	export let historicUS;
	console.log(historicUS,"historicUS");
	console.log(carbookStats,"carbookStats");
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
<Carusage {...carbookStats}/>
<Carbookuser historicData={historicUS} title="Covid-19" />
<TableContainer />