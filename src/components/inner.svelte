<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
</script>

<button on:click="{() => { dispatch('message', { text: 'message from inner component'})}}">
  click me，iam from inner component
</button>