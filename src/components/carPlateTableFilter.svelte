<script>
    import { onMount } from "svelte";
import { each } from "svelte/internal";
    import requests from '../data/requests.js';
    export let id_car=1;
    export let brand ="";
    export let driver ="";
    export let tel_number="";
    export let carPlate = "";
    $: carPlateStates = [];
    onMount(async function() {
	  setInterval(async () => {
        const response = await requests.carplateState();
        carPlateStates=response;
    }, 1000)
  });

  function carPlateUpdate(id_car,brand,driver,tel_number,carPlate){
      try {
            if(carPlateStates.find(d =>d.plate===carPlate))
            {
                alert("Pls input a different plate number!");
            }
            else
            {
                requests.carPlateUpdate(id_car,brand,driver,tel_number,carPlate);
            }
      } catch (error) {
          console.log(error);
      }
  }
 
</script>

<style>
    input,
    .select,
    select {
        width: 100%;
    }

    .column{
        padding-left: 0;
    }
    
    button {
		font-family: 'Comic Sans MS', cursive;
		font-size: 1.5em;
		padding: 0.5em 2em;
		color: black;
		background: silver;
		border-radius: 1em;
		box-shadow: 2px 2px 2px rgb(0, 1, 0);
    }

</style>

<div class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-2 is-offset-2">
                    <div class="select">
                        <select bind:value={id_car}>
                            {#each carPlateStates as state}
                                <option value={state.id_car}>{state.id_car}</option>
                            {/each}
                            <option value={carPlateStates.length+1}>{carPlateStates.length+1}</option>
                    </select>
                </div>
            </div>
            <div class="column is-2 is-offset-1">
                <input type="text" class=input bind:value={carPlate} placeholder="Please input Plate Number" >
            </div>
            
            <div class="column is-2 is-offset-1">
                
                {#if id_car<=carPlateStates.length}
                <button on:click={carPlateUpdate(id_car,brand,driver,tel_number,carPlate)}>
                    Update
                </button>
                {:else}
                <button >
                    Addnew
                </button>
                {/if}
            </div>
        </div>
        <div class="columns">
            <div class="column is-2 is-offset-2">
                <input type="text" class=input bind:value={brand} placeholder="Please input Car Brand" >
            </div>
            <div class="column is-2 is-offset-1">
                <input type="text" class=input bind:value={driver} placeholder="Please input Driver Name" >
            </div>
            <div class="column is-2 is-offset-1">
                <input type="text" class=input bind:value={tel_number} placeholder="Please input Tel Number" >
            </div>
        </div>
    </div>
</div>
