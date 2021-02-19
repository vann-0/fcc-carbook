<script>    
    export const plate = "";
    export let formerSunday,thisMonday,thisTuesday,thisWednesday,thisThursday,thisFriday, nextSaturday;
    let user =true;
    export let guestInfoStates;
    let infoUser="";
    let infoStartTime="";
    let infoEndTime="";
    function asf(){
        user=!user;
    }
   
    function timeChecked(sun1,t1,t2){
        for (var i in guestInfoStates)
        {
            if(sun1 !==""&t1<guestInfoStates[i].end_time&t2>guestInfoStates[i].start_time)
            {
                infoUser=guestInfoStates[i].user;
                infoStartTime=guestInfoStates[i].start_time;
                infoEndTime=guestInfoStates[i].end_time;
                // console.log(t1,guestInfoStates[i].start_time);
                break;
            }
        }
        if(sun1 !==""&sun1!=undefined)
        {
            user=!user;
        }
    }
    let sun1,sun2,sun3,sun4,sun5,sun6,sun7,sun8;
    import {onMount} from 'svelte';
import { each } from 'svelte/internal';
    onMount(async function(){
        setInterval(async()=>{
            if(guestInfoStates !== undefined)
                for (var i in guestInfoStates)
                    {
                        if(guestInfoStates[i].plate !== undefined&formerSunday+' 09:00:00'<guestInfoStates[i].end_time&formerSunday+' 10:00:00'>guestInfoStates[i].start_time)
                        {
                            sun1="spec";
                            break;
                        }
                        else                    
                        {sun1=""}
                    }
            else
            {
                // sun1=""
            }
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
                        <div>{formerSunday}</div> Sunday</th>
                    <th width=90px word-wrap=break-all>
                        <div>{thisMonday}</div> Monday</th>
                    <th width=90px word-wrap=break-all>
                        <div>{thisTuesday}</div> Tuesday</th>
                    <th width=90px word-wrap=break-all>
                        <div>{thisWednesday}</div> Wednesday</th>
                    <th width=90px word-wrap=break-all>
                        <div>{thisThursday}</div> Thursday</th>
                    <th width=90px word-wrap=break-all>
                        <div>{thisFriday}</div> Friday</th>
                    <th width=90px word-wrap=break-all>
                        <div>{nextSaturday}</div> Saturday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>9:00-10:00</th>
                    <th class={sun1} on:click={timeChecked(sun1,formerSunday+' 09:00:00',formerSunday+' 10:00:00')}></th>
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
        <p class="modal-card-title">Car Booking Info</p>
        <button class="delete" aria-label="close" on:click={asf}></button>
      </header>
      <section class="modal-card-body">
        <div class="column is-6 is-offset-3">username  :{infoUser}</div>
        <div class="column is-6 is-offset-3">start_time:{infoStartTime}</div>
        <div class="column is-6 is-offset-3">end_time  :{infoEndTime}</div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" on:click={asf}>Confirmed</button>
        <!-- <button class="button" on:click={asf} >Cancel</button> -->
      </footer>
    </div>
</div>