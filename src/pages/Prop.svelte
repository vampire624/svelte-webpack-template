<script>
  import Nest from '../components/nest.svelte'
  export let location
  let name = 'propName'
  const person = {
    gender: 'female',
    age: 24
  }
</script>

<p class="route">
  current pathname is {location.pathname} !
</p>

<h3>01 prop 属性传值</h3>
<Nest name={name}></Nest>

<h3>02 prop 默认属性值</h3>
<Nest></Nest>

<h3>03 prop spread 属性传值（与react相同）</h3>
<Nest {...person}></Nest>


<style>
.route {
  color: orange;
  font-size: 22px;
}
</style>