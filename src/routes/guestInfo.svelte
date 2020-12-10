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

    $:guestInfoStates = [];
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

<GuestInfoTableContainer data={carPlateStates}/>

<button class="button is-primary is-large modal-button" data-toggle="modal-card" data-target="modal-ter" aria-haspopup="true">Launch card modal</button>


<div class="modal-ter">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
  