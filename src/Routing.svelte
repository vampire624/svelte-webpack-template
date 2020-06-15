<script>
  import { Router, Link, Route } from "svelte-routing";
  /* import About from "./About.svelte";
  import Blog from "./Blog.svelte";
  import Home from "./Home.svelte"; */
  const About = import(/* webpackChunkName: "about" */ '@/About.svelte');
  const Blog = import(/* webpackChunkName: 'blog' */ '@/Blog.svelte');
  const Home = import(/* webpackChunkName: 'home' */ '@/Home.svelte');
 
  export let url = "/";
</script> 
 
<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="blog">Blog</Link>
  </nav>
  <div>
    <Route path="/" component={Home} />
    <Route path="blog" component={Blog} />
    <Route path="about" component={About} />
  </div>
</Router>