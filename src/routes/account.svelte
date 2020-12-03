<script>
    import {onMount} from "svelte";
    import requests from "../data/requests.js";
    import TableContainer from "../components/accountTableContainer.svelte"
    $:accountStates = [];
    onMount(async function(){
        setInterval(async ()=>{
            const response = await requests.accountStates();
            accountStates = response;
        },1000)
    })

</script>

<style>
    .section.header{
        margin-top: 5rem;
        text-align: center
    }
</style>

<svelte:head>
    <title>Admin info</title>
</svelte:head>

<div class="section header">
	<div class="container">
		<h1>Admin info</h1>
	</div>
</div>

<TableContainer data={accountStates}/>


