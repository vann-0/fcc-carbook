<script>
	let isOpen =false;
	export let segment;
	function toggleNav(){
		isOpen = !isOpen;
	}
</script>
<style>
	@media(min-width:769px){
		nav{
			border-bottom: solid gray 1px;
		}
	}
</style>

<nav class="navbar" role='navigation' aria-label="main navigation">
	<div class="navbar-brand">
		<a href="/" class="navbar-item">
			<img src="logo.jpg" alt="logo">
		</a>
		<span
		class="navbar-burger"
		class:is-active={isOpen}
		on:click={toggleNav}
		aria-label="menu"
		aria-expanded="false"
		>
		<span aria-hidden="true"></span>
		<span aria-hidden="true"></span>
		<span aria-hidden="true"></span>
		</span>
	</div>
	<div class="navbar-menu" class:is-active={isOpen}>
		<div class="navbar-start">
			<a href="/" class="navbar-item" class:is-active={segment===undefined}>Log in</a>
			<a href="/guestInfo" class="navbar-item" class:is-active={segment==='guestInfo'}>guestInfo</a>
			<a href="/carUser" class="navbar-item" class:is-active={segment==='carUser'}>Caruser</a>
			<a href="/carPlate" class="navbar-item" class:is-active={segment==='carPlate'}>Carplate</a>
			<a href="/account" class="navbar-item" class:is-active={segment==='account'}>Account</a>
			<a href="/about" class="navbar-item" class:is-active={segment==='about'}>About</a>
		</div>
	</div>
</nav>