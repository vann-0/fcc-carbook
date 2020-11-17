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

<h1>
    {state}
</h1>

<Carplate />
<Carusage />
<Carbookuser />