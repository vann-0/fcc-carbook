<script>
    import moment from 'moment';
    import { onMount } from "svelte";
    export let states;
    export let plate = "";
    let weekday = moment().day();
    export let weekCounter = weekday;
    // let year = moment().get('year');
    // let month = moment().get('month');
    // let date = moment().get('date');
    // let day = [year,month,date].join('-');
    // let daytime = [day,'T00:30'].join('');
    export let formerSunday,thisMonday,thisTuesday,thisWednesday,thisThursday,thisFriday, nextSaturday; 
    onMount(async function() {
	  setInterval(async () => {
         const former = moment().subtract(weekCounter, 'd').format("YYYY-MM-DD");
         const next = moment().add(6-weekCounter, 'd').format("YYYY-MM-DD");
         const mon = moment().subtract(weekCounter-1, 'd').format("YYYY-MM-DD");
         const tue = moment().subtract(weekCounter-2, 'd').format("YYYY-MM-DD");
         const wed = moment().subtract(weekCounter-3, 'd').format("YYYY-MM-DD");
         const thu = moment().subtract(weekCounter-4, 'd').format("YYYY-MM-DD");
         const fri = moment().subtract(weekCounter-5, 'd').format("YYYY-MM-DD");
         thisMonday=mon;
         thisTuesday = tue;
         thisWednesday = wed;
         thisThursday = thu;
         thisFriday = fri;
         formerSunday=former;
         nextSaturday=next;
         }, 1000)
    });;
    
    let formerSundayShow= moment().subtract(weekday, 'd').format("YYYY-MM-DDT00:00"); 
    let nextSaturdayShow = moment().add(6-weekday, 'd').format("YYYY-MM-DDT00:00"); 
    function addWeek(){
        weekCounter=weekCounter+7;
    }
    function subWeek(){
        weekCounter=weekCounter-7;
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
    .button.is-primary{
        width: 8.5em;
    }
/*     
    button {
		font-family: 'Comic Sans MS', cursive;
        font-size: 1em;
        width:9em;
		padding: 0.5em 1em;
		color: black;
		background: silver;
		border-radius: 1em;
		box-shadow: 2px 2px 2px rgb(0, 1, 0);
    } */

</style>

<div class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-1 is-offset-1">
                <p>Starting:</p>
            </div>
            <div class="column is-2">
                <input type=datetime-local bind:value={formerSundayShow}>
            </div>
            <div class="column is-1 is-offset-2">
                <p>Ending:</p>
            </div>
            <div class="column is-2">
                <input type=datetime-local bind:value={nextSaturdayShow}>
            </div>
            <div class="column is-3 is-offset-2">
                <div class="select">
                    <select bind:value={plate}>
                        {#each states as state}
                             <option value={state.plate}>{state.plate}</option>
                        {/each}
                        <option value="">Please select plate number</option>
                    </select>
                </div>
             </div>
        </div>
        <!-- <div class="columns">
            <div class="column is-3 is-offset-2">
               <div class="select">
                   <select bind:value={plate}>
                       {#each states as state}
                            <option value={state.plate}>{state.plate}</option>
                       {/each}
                       <option value="">Please select plate number</option>
                   </select>
               </div>
            </div>
        </div> -->
        <div class="columns">
            <div class="column is-2 is-offset-3">
                <button class="button is-primary" 
                on:click={addWeek} >Previous week</button>
            </div>
            <div class="column is-2 is-offset-3">
                <button class="button is-primary"
                on:click={subWeek}>Next week</button>
            </div>
        </div>
    </div>
</div>
