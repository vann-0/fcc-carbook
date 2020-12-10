<script>
    import moment from 'moment';
    
    export let states;
    export let plate = "";
    let weekday = moment().day();
    // let year = moment().get('year');
    // let month = moment().get('month');
    // let date = moment().get('date');
    // let day = [year,month,date].join('-');
    // let daytime = [day,'T00:30'].join('');
    let formerSunday = moment().subtract(weekday, 'd').format("YYYY-MM-DDT00:00"); 
    let nextSaturday = moment().add(6-weekday, 'd').format("YYYY-MM-DDT00:00"); 

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
		/* font-family: 'Comic Sans MS', cursive; */
        font-size: 1em;
        width:9em;
		padding: 0.5em 1em;
		color: black;
		background: silver;
		border-radius: 1em;
		box-shadow: 2px 2px 2px rgb(0, 1, 0);
    }

</style>

<div class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-1 is-offset-2">
                <p>Starting:</p>
            </div>
            <div class="column is-2">
                <input type=datetime-local bind:value={formerSunday}>
            </div>
            <div class="column is-1 is-offset-2">
                <p>Ending:</p>
            </div>
            <div class="column is-2">
                <input type=datetime-local bind:value={nextSaturday}>
            </div>
        </div>
        <div class="columns">
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
    </div>
</div>

<div class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-2 is-offset-3">
                <button>Previous week</button>
            </div>
            <div class="column is-2 is-offset-3">
                <button>Next week</button>
            </div>
        </div>
    </div>
</div>
