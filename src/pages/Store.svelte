<script>
  import { onDestroy } from 'svelte'
  import Increase from '../components/increase.svelte'
  import Decrease from '../components/decrease.svelte'
  import Reset from '../components/reset.svelte'
  import { count, time, doubleCount, name } from '../store'
  export let location

  let value
  const unsubscribe = count.subscribe(val => {
    value = val
  })
  onDestroy(unsubscribe)
</script>

<p class="route">
  current pathname is {location.pathname} !
</p>

<h1>可写store writable</h1>
<!-- 可以直接使用 $count, $为svelte保留字 -->
<!-- <p>{$count}</p> -->
<p>count: {value}</p>
<Increase></Increase>
<Decrease></Decrease>
<Reset></Reset>

<h1>只读store readable</h1>
<div>{$time}</div>

<h1>派生 store derived</h1>
<div>doubleCount: {$doubleCount}</div>


<h1>绑定 store </h1>
<div>hello, {$name}</div>
<input type="text" bind:value={$name}>
<!-- 因为 $name += '!' 等效于 name.set($name + '!')-->

<style>
.route {
  color: orange;
  font-size: 22px;
}
</style>