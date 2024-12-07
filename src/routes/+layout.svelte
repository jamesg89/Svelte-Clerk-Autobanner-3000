<script lang="ts">
 	import Navigation from './Navigation.svelte';
	import '../app.css';
	import "tailwindcss/tailwind.css";
	let { children } = $props();
    import type { PageData } from './$types';
</script>


	<Navigation />

  <div class="container mx-auto mt-10">
  {@render children()}
  </div>