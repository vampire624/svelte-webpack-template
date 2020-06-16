<script>
  export let location
  let size = 'small'
  const colors = [
    {
      name: 'red',
      id: '001'
    },
    {
      name: 'blue',
      id: '002'
    },
    {
      name: 'green',
      id: '003'
    },
  ]
  const promise = new Promise((resolve, reject) => {
    const number = Math.random()
    setTimeout(() => {
      if (number > 0.5) {
        resolve(number)
      } else {
        reject('rejected!')
      }
    }, 2000)
  })
  function handleToggle () {
    if (size === 'small') {
      size = 'middle'
    } else if (size === 'middle') {
      size = 'large'
    } else {
      size = 'small'
    }
  }
</script>

<p class="route">
  current pathname is {location.pathname} !
</p>

<h3>01 判断 if / else if / else 逻辑块</h3>
{#if size === 'large'}
  <h3>size is {size}</h3>
{:else if size === 'middle'}
  <h4>size is {size}</h4>
{:else}
  <h5>sieze is {size}</h5>
{/if}
<button on:click={handleToggle}>toggle size</button>

<h3>02 循环 each 逻辑块</h3>
<ul>
  {#each colors as color, index (color.id)}
    <li>{index}: {color.name}</li>
  {/each}
</ul>

<h3>03 异步 await 逻辑块（new，类似vue-promised）</h3>
{#await promise}
  <p>wating...</p>
{:then number}
  <p>number is {number}</p>
{:catch error}
  <p>ops, there is an error!</p>
  <p>{error}</p>
{/await}

<style>
.route {
  color: orange;
  font-size: 22px;
}
</style>