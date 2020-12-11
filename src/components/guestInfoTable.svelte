<script>    
    export let plate = "";
    export let formerSunday,thisMonday,thisTuesday,thisWednesday,thisThursday,thisFriday, nextSaturday;;
    let user =true;
    export let guestInfoStates;
    function asf(){
        user=!user;
    }

    function tiemChecked(sun1){
        if(sun1 !=="")
        {user=!user}
    }
    let sun1,sun2,sun3,sun4,sun5,sun6,sun7,sun8;
    import {onMount} from 'svelte';
    onMount(async function(){
        setInterval(async()=>{
            if(guestInfoStates !== undefined)
                if(guestInfoStates[0].plate !== undefined)
                {sun1="spec"}
                else
                {sun1=""}
            else
            {sun1=""}
            
        },1000)
    });
</script>

<style>
    table{
        width: 100%;
        text-align: center;
    }
    .section{
        padding: 0.5rem 1.5rem;
    }
    .spec{
        background:gold;
        opacity:0.35;
    }
    
    .spec:hover{
        opacity:0.6;
    }
</style>




<div class="section" hidden={!user}>
    <div class="container">
        <table class="table is-bordered is-striped">
            <thead>
                <tr>
                    <th width=90px></th>
                    <th width=90px word-wrap=break-all>
                        {formerSunday} Sunday</th>
                    <th width=90px word-wrap=break-all>
                        {thisMonday} Monday</th>
                    <th width=90px word-wrap=break-all>
                        {thisTuesday} Tuesday</th>
                    <th width=90px word-wrap=break-all>
                        {thisWednesday} Wednesday</th>
                    <th width=90px word-wrap=break-all>
                        {thisThursday} Thursday</th>
                    <th width=90px word-wrap=break-all>
                        {thisFriday}  Friday</th>
                    <th width=90px word-wrap=break-all>
                        {nextSaturday} Saturday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>9:00-10:00</th>
                    <th class={sun1} on:click={tiemChecked(sun1)}></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>10:00-11:00</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>11:00-12:00</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>10:00-11:00</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>11:00-12:00</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>12:00-13:00</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>13:00-14:00</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>14:00-15:00</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>15:00-16:00</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>16:00-17:00</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <th>17:00-18:00</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tbody>
        </table>
    </div>    
</div>

<button class="button" on:click={asf} >showModal</button>

<div hidden={!user}>
    {#if guestInfoStates !== undefined }
        {#if guestInfoStates[0].plate !== undefined}
            <h1>{#each guestInfoStates as guestinfo (guestinfo.id_carusage)}
            <tr>{guestinfo.plate} {guestinfo.start_time}</tr>
            {/each}
            </h1>
        {/if}
    {/if}
</div>

<div class="modal-car" hidden={user}>
    <div class="modal-background" on:click={asf}></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" aria-label="close" on:click={asf}></button>
      </header>
      <section class="modal-card-body">
        {plate}
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button" on:click={asf} >Cancel</button>
      </footer>
    </div>
</div>