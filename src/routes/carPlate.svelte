<script context="module">
    // import requests from '../data/requests.js';
    // export async function preload(){
    //     try {
    //         const carPlateStates = await requests.carplateState();
    //         return {carPlateStates};
    //     } catch (error) {
    //         console.log(error);
    //         this.error(500,"There is an error in calling the api,please try again in 5 minutes.");
	// 		return;
    //     }
    // }
</script>

<script>
    import { onMount } from "svelte";
    import requests from '../data/requests.js';
    import CarPlateTableContainer from '../components/carPlateTableContainer.svelte';
    $: carPlateStates = [];
    onMount(async function() {
	  setInterval(async () => {
        const response = await requests.carplateState();
        carPlateStates=response;
	  }, 1000)
  });

    // export let carPlateStates;
</script>

<style>
    .section.header{
        margin-top: 5rem;
        text-align: center
    }
</style>

<svelte:head>
    <title>Car Plate info</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Car Plate info</h1>
	</div>
</div>

<CarPlateTableContainer data={carPlateStates}/>