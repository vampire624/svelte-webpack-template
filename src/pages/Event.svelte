<script>
  import Nest from '../components/nest.svelte'
  export let location
  let content = ''
  let mouse = {
    x: 0,
    y: 0,
  }
  function handleMouseMove ({clientX, clientY}) {
    mouse.x = clientX
    mouse.y = clientY
  }
  function handleOnceClick () {
    alert('first time,next time u click without me')
  }
  function handleCustomEvent ({ detail }) {
    // 有个小问题，解构 content 赋值为 content = content
    content = detail.content
  }
  function handleMessage ({ detail: { text }}) {
    alert(text)
  }
  function handlePrimaryClcik () {
    alert('unhandle click event button clicked!')
  }
</script>

<p class="route">
  current pathname is {location.pathname} !
</p>

<h3>01 on 指令</h3>
<div on:mousemove={handleMouseMove} class="panel">
  now mouse position is {mouse.x} x {mouse.y}
</div>

<h3>02 on 指令 内联事件处理</h3>
<div on:mousemove="{({clientX, clientY}) =>  mouse = { x: clientX, y: clientY }}" class="panel">
  now mouse position is {mouse.x} x {mouse.y}
</div>

<h3>03 事件修饰符</h3>
<div>事件修饰符包括：preventDefault stopPropagation passive capture once self </div>
<button on:click|once={handleOnceClick}>click me once</button>

<h3>04 组件自定义事件（vue 中的 this.$emit 功能）</h3>
<p>content: {content}</p>
<Nest on:custom={handleCustomEvent}></Nest>

<h3>05 事件转发（自定义或原生都可以）</h3>
<p>content: {content}</p>
<Nest on:custom={handleCustomEvent} on:message={handleMessage} on:click={handlePrimaryClcik}></Nest>


<style>
.route {
  color: orange;
  font-size: 22px;
}

.panel {
  height: 160px;
  background-color: #ccc;
}
</style>