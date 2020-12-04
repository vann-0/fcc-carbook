<script>
    import requests from '../data/requests.js';
    export let states;
    import Modal from './modal.svelte';
    var showModal = false;
    function accountDelete(id_user){
        try {            
            requests.accountDelete(id_user).then(v=>{
                if(v[0]==="ok"){
                    // showModal = true;
                };
            });
            return showModal;            
        } catch (error) {
            console.log(error);
        }
    }
    // console.log(showModal,"showModal");
</script>

<style>
    .container{
        width:275px;
        text-align: center;
        margin: 0 auto;
    }
</style>

<div class="section">
    <div class="container">
        <table class="table is-bordered is-striped">
            <thead>
                <tr>
                    <th>ID_User</th>
                    <th>name</th>
                    <th>mail_address</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {#each states as account (account.id_user)}
                    <tr>
                        <td> 
                            {account.id_user}
                        </td>
                        <td>
                            {account.name}
                        </td>
                        <td>
                            {account.mail_address}
                        </td>
                        <td>
                            <button on:click={accountDelete(account.id_user)}>Delete</button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<!-- {#if showModal}
	<Modal on:close="{() => showModal = false}">

	</Modal>
{/if} -->

