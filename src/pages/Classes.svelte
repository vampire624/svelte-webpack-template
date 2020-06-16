<script>
  export let location
  let hasColor = true
</script>

<p class="route">
  current pathname is {location.pathname} !
</p>

<h1>01 样式类 class</h1>
<!-- { } 这里并不是对象， -->
<div class="{hasColor ? 'shadow' : ''} foo bar">do i have a shadow?</div>

<!-- 多 class 会组装成一个 -->
<div class:shadow={hasColor} class="foo bar">svelte 内置active写法</div>

<h1>02 class 简写</h1>
<div class:hasColor>hasColor class</div>

<style>
.route {
  color: orange;
  font-size: 22px;
}

.shadow {
  width: 300px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: cadetblue;
  box-shadow: 0px 0 4px 4px #ccc;
  margin-bottom: 16px;
}

.hasColor {
  color: red;
}

</style>