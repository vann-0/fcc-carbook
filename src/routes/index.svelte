<script>
    export let loginID="";
    export let password="";
    let user = { loggedIn: false };

    function toggle() {
        user.loggedIn = !user.loggedIn;
    }
</script>

<style>
    .section.header{
        text-align: center
    }

    .section{
        margin-top:10rem;
	    margin-bottom:10rem;
	    margin-right:5rem;
	    margin-left:5rem;
    }

    .footer{
        height:5rem;
        width:100%;
        position: fixed;
        bottom:0px;
        border-top: solid gray 1px;
    }

    button {
		font-family: 'Comic Sans MS', cursive;
		font-size: 1.5em;
		padding: 0.5em 2em;
		color: royalblue;
		background: gold;
		border-radius: 1em;
		box-shadow: 2px 2px 2px rgb(0, 0, 0.5);
    }
</style>

<svelte:head>
    <title>Car book system</title>
</svelte:head>

<div class="section header">
    <h1>booking system login</h1>
</div>

<div class="section">
	<div class="container">
        <div class="columns">
            <div class="column is-1 is-offset-3">
                Login ID: 
            </div>
            <div class="column is-4 is-offset-1">
                <input type="text" class="input" bind:value={loginID}>
            </div>
        </div>

        <div class="columns">
            <div class="column is-1 is-offset-3">
                Password: 
            </div>
            <div class="column is-4 is-offset-1">
                <input type="password" class="input" bind:value={password}>
            </div>
        </div>
		<div class="columns">
            <div class="column is-2 is-offset-5">
                {#if user.loggedIn}
                <button on:click={toggle}>
                    Log out
                </button>
                {:else}
                <button on:click={toggle}>
                    Log in
                </button>
                {/if}
            </div>
        </div>
    </div>
</div>

<div class="footer"></div>
