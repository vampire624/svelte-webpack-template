<script>
  import { createEventDispatcher } from 'svelte'
  import Inner from './inner.svelte'
  const dispatch = createEventDispatcher()
  export let name = 'defaultName'
  export let gender = 'male'
  export let age = 0
  export let value = ''
  let hovering

  function handleClick () {
    dispatch('custom', {
      content: 'this is message from component custom event'
    })
  }

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<h2 class="nest">this is nested component has its style configration! (color: darkred)</h2>
<hr>
<h4>name is {name}</h4>
<p>person'name is {gender}, and his age is {age}</p>
<hr>
<button on:click={handleClick}>click me trigger component custom event</button>
<hr>
<Inner on:message></Inner>
<hr>
<button on:click>unhandle click event button</button>
<hr>
ping: <input type="text" bind:value={value}>
<hr>
<div on:mouseenter={enter} on:mouseleave={leave}>
  <slot hovering={hovering}>
    <div>我是插槽的默认内容</div>
  </slot>
</div>

<slot name="namedSlot"></slot>

<style>
.nest {
  color: darkred;
}
</style>
