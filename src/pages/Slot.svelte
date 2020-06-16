<script>
  import Nest from '../components/nest.svelte' 
  export let location
  let active = false
</script>

<p class="route">
  current pathname is {location.pathname} !
</p>

<h3>01 组件插槽</h3>
<Nest>
  <div>这里是插槽的内容！</div>
</Nest>

<h3>02 组件默认插槽</h3>
<Nest></Nest>


<h3>03 组件命名插槽</h3>
<Nest>
  <div>命中默认插槽</div>
  <section slot="namedSlot">命中命名插槽 namedSlot</section>
</Nest>


<h3>04 组件插槽属性</h3>
<Nest let:hovering={active}>
  <div class:active>悬浮的时候我的状态会改变</div>
</Nest>


<style>
.route {
  color: orange;
  font-size: 22px;
}

.active {
  color: red;
  background-color: black;
}
</style>