<script>
	import Routing from './Routing.svelte';
	export let name;
</script>

<style>
	h1 {
		color: purple;
	}
</style>
<Routing></Routing>
<h1>Hello {name}!</h1>