<script lang="ts">
	import '../app.css';
	import "tailwindcss/tailwind.css";
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte'
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte'
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte'
    import SignUpButton from 'clerk-sveltekit/client/SignUpButton.svelte';
    import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte';
</script>
<div class="container">
<div class="navbar bg-base-100">
	<div class="navbar-start">
	  <div class="dropdown">
		<div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
		  <svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor">
			<path
			  stroke-linecap="round"
			  stroke-linejoin="round"
			  stroke-width="2"
			  d="M4 6h16M4 12h8m-8 6h16" />
		  </svg>
		</div>
		<ul
		  tabindex="0"
		  class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
		  <li><a href="./collection">Our Collection</a></li>
		<li>
		  <details>
			<summary>About Us</summary>
			<ul class="p-2">
			  <li><a href="./buy-local">Buy Local</a></li>
			  <li><a href="./sell-local">Sell Local</a></li>
			</ul>
		  </details>
		</li>
		<li><a href="./admin/">Admin</a></li>
		</ul>
	  </div>
	  <a href="/" class="btn btn-ghost text-xl">LocalDemo</a>
	</div>
	<div class="navbar-center hidden lg:flex">
	  <ul class="menu menu-horizontal px-1">
		<li><a href="./collection">Our Collection</a></li>
		<li>
		  <details>
			<summary>About Us</summary>
			<ul class="p-2">
			  <li><a href="./buy-local">Buy Local</a></li>
			  <li><a href="./sell-local">Sell Local</a></li>
			</ul>
		  </details>
		</li>
		<li><a href="./admin/">Admin</a></li>
	  </ul>
	</div>
	<div class="navbar-end"> 
        <SignedIn>
            <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
            <SignInButton mode="modal" class="btn mr-4" /> <span> </span> <SignUpButton class="btn" mode="modal" />
        </SignedOut>
	</div>
  </div>
</div>

