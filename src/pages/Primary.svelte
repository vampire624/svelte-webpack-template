<script>
  import Nest from '../components/nest.svelte'
  export let location;
  const name = 'svelte';
  let title = 'this is title from dynamic'
  console.log(location);
</script>

<p class="route">
  current pathname is {location.pathname} !
</p>

<h3>01 数据</h3>
<div>
  hello {name}!
</div>

<h3>02 动态属性</h3>
<p title={title}>p dom has dynamic title attribute</p>

<h3>03 嵌套组件：scope 样式</h3>
<Nest></Nest>


<style>
.route {
  color: orange;
  font-size: 22px;
}
</style>
