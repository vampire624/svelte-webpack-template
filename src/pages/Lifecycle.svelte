<script>
  // import Nest from '../components/nest.svelte'
  import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from 'svelte'
  export let location
  let color = 'blue'
  let timer = null
  let beforeDiv = null
  onMount(() => {
    timer = setTimeout(() => {
      color = 'red'
      tick().then((unknow) => {
        console.log('tick', unknow)
      })
    }, 3000)
    // 返回一个函数，组件卸载的时候调用
    return () => {
      clearTimeout(timer)
    }
  })

  onDestroy(() => {
    timer && clearTimeout(timer)
  })

  beforeUpdate(() => {
    console.log('beforeUpdate!')
    console.log(beforeDiv)
  })

  afterUpdate(() => {
    console.log('afaterUpdate!')
    console.log(beforeDiv)
  })
</script>

<p class="route">
  current pathname is {location.pathname} !
</p>

<h3>01 挂载</h3>
<div>onMount</div>
<div style="color: {color}">what's my color?</div>
<div>{ color }</div>

<h3>02 销毁</h3>
<div>onMount</div>

<h3>03 更新</h3>
<div bind:this={beforeDiv}>beforeUpdate</div>
<div>afterUpdate</div>


<h4>04 tick (vue: this.$nextTick())</h4>
<div>tick</div>


<style>
.route {
  color: orange;
  font-size: 22px;
}
</style>