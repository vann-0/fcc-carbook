<script context="module">
    import stateNames from '../data/stateName.js';
    import requests from '../data/requests.js';

    export async function preload(page){
        const state = page.params['state'];
        if(stateNames.find(s => s.abbreviation ===state)=== undefined){
            this.error(404,'State Not Found');
            return;
        }
        const fullStateName = stateNames.find(s => s.abbreviation ===state).name;
        try {
            const stats = await requests.stateStats(state);
            const historic = await requests.historicState(state);
            return {state :fullStateName,stats,historic}   
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
    
    export let state;
    export let stats;
    export let historic;
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
<Carusage {...stats}/>
<Carbookuser historicData={historic} title="Covid 19-{state}"/>