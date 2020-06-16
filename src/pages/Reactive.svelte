<script>
  export let location
  let numbers = [1, 2, 3]
  let count = 0
  let triple = 0
  const thing = { color: 'black' }

  $: double = 2 * count

  $: {
    triple = count * 3
    console.log(triple, 'triple')
  }
  let handleClick = () => count++

  function handleReset () { count = 0 }

  $: summary = numbers.reduce((p, c) => p + c, 0)

  function handleAdd () {
    numbers.push(numbers.length + 1)
    numbers = numbers

    // or use extend
    // numbers = [...numbers, numbers.length]

    // or use assignment
    // numbers[numbers.length] = numbers.length + 1
  }

  function handleChangeColor () {
    thing.color = 'white'
  }
</script>

<p class="route">
  current pathname is {location.pathname} !
</p>

<h3>01 响应系统</h3>
<button on:click={handleClick}>clicked {count} {count > 1 ? 'times' : 'time'}</button>
<button on:click={handleReset}>reset</button>

<h3>02 声明（more like computed）</h3>
<p>now count is {count}, and doubled count is {double}</p>

<h3>03 深入式声明 （watch all with immediate）</h3>
<p>now count is {count}, and tripled count is {triple}</p>

<h3>04 更新对象和数组</h3>
<p>{numbers.join(' + ')} = {summary}</p>
<button on:click={handleAdd}>add number</button>

<p>u see me in {thing.color}</p>
<button on:click={handleChangeColor}>change color</button>


<style>
.route {
  color: orange;
  font-size: 22px;
}
</style>