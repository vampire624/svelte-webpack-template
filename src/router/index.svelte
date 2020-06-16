<script>
  import { Router, Link, Route } from 'svelte-routing'
  import Loadable from 'svelte-loadable'
  import { config } from './config.js'
  let location = null
  let routes = []
  for (let route of config) {
    routes.push({
      ...route,
      component: () => import(`../pages/${route.componentName}.svelte`)
    })
  }
</script>

<Router>
  <nav class="nav">
    {#each routes as route, index (index)}
      <Link to={route.path}>{`${route.componentName} | `}</Link>
    {/each}
  </nav>
  <section>
    {#each routes as route, index (index)}
      <Route path={route.path} let:location={location}>
        <Loadable loader={route.component} location={location}></Loadable>
      </Route>
    {/each}
  </section>
</Router>

<style>
.nav {
  padding-bottom: 16px;
  transform-origin: 0;
}
</style>