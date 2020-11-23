<script context="module">
    import stateNames from '../data/stateName.js';

    export async function preload(page){
        const state = page.params['state'];
        if(stateNames.find(s => s.abbreviation ===state)=== undefined){
            this.error(404,'State Not Found');
            return;
        }
        try {
            return {state:page.params['state']}   
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