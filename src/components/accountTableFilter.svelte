<script>
    import {onMount} from "svelte";
    import requests from '../data/requests.js';
    export var id_user="";
    export var name="";
    export var password ="";
    export var mail_address="";
    $:accountStates = [];
    onMount(async function(){
        setInterval(async()=>{
            const response = await requests.accountStates();
            accountStates=response;
        },1000)
    });

    function accountUpdate(){
        try {
            requests.accountUpdata(id_user,name,password,mail_address).then(v =>{
                if( v[0]==="Already Updated!"){
                    name="";
                    password ="";
                    mail_address="";
                    id_user="Please select ID of User";
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    function accountCreate(){
        try {
            requests.accountCreate(id_user,name,password,mail_address).then(v =>{
                if(v[0]==="Already Added!"){
                    name="";
                    password ="";
                    mail_address="";
                    id_user="Please select ID of User";
                }
            });
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
            <div class="column is-2 is-offset-3">
                <div class="select">
                    <select bind:value={id_user}>
                        {#each accountStates as state}
                            <option value={state.id_user}>{state.id_user}</option>
                        {/each}
                        <option value={accountStates.length+1}>{accountStates.length+1}</option>
                        <option selected>Please select ID of User</option>                        
                    </select>
                </div>          
            </div>    
            <div class="column is-2 is-offset-2">
                <input type="text" class=input bind:value={name} placeholder="Please input User name">
            </div>        
        </div>
        <div class="columns">
            <div class="column is-2 is-offset-2">
                <input type="password" class=input bind:value={password} placeholder="Please input password">
            </div>
            <div class="column is-2 is-offset-1">
                <input type="text" class=input bind:value={mail_address} placeholder="Please input mail_address">
            </div>
            <div class="column is-2 is-offset-1">
                {#if id_user<=accountStates.length}
                    <button on:click={accountUpdate(id_user,name,password,mail_address)}>
                        Update
                    </button>
                {:else}
                    <button on:click={accountCreate(id_user,name,password,mail_address)}>
                        Addnew
                    </button>
                {/if}
            </div>
        </div>
    </div>
</div>

