<script>
	import { count } from '../store/index.js';

	function increment() {
		count.update(count => count + 1)
	}
</script>

<button on:click={increment}>
	+
</button>