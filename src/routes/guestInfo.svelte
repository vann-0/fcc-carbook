<script context="module">
    import requests from '../data/requests.js';
    export async function preload(){
        try {
            const carPlateStates = await requests.carplateState();
            return {carPlateStates};
        } catch (error) {
            console.log(error);
            this.error(500,"There is an error in calling the api,please try again in 5 minutes.");
			return;
        }
    }
</script>

<script>
    import { onMount } from "svelte";
    import GuestInfoTableContainer from '../components/guestInfoTableContainer.svelte';
    let plate;
    export let guestInfoStates;
    onMount(async function(){
        setInterval(async() =>{
            const response = await requests.carUsageStats(plate);
            guestInfoStates = response;
            // console.log(guestInfoStates[0].plate);
        },1000)
    });
    // export let guestInfoStates;
    // $:guestInfoStates = [];
    export let carPlateStates;
</script>

<style>
    .section.header{
        margin-top: 5rem;
        text-align: center
    }
</style>

<svelte:head>
    <title>Guest info</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Guest info</h1>
	</div>
</div>

<GuestInfoTableContainer bind:plate data={carPlateStates} {guestInfoStates}/>


  