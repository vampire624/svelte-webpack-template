import { writable, readable, derived } from 'svelte/store'
export const count = writable(0)
export const time = readable(new Date(), (set) => {
  const timer = setInterval(() => {
		set(new Date());
  }, 1000)
  
  return () => {
    clearInterval(timer)
  }
})
export const doubleCount = derived(
  count,
  $count => $count * 2
)
export const name = writable('svelte')

