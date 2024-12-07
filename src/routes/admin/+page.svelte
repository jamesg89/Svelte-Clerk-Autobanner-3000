<script lang="ts">
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
    import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
    import type { PageData } from './$types';
    export let data: PageData;
</script>


<SignedOut>
    <h1 class="mb-4 text-4xl">You must be logged in to see this page. Info below is redacted</h1>
</SignedOut>

<SignedIn let:user>
    <h1 class="mb-4 text-4xl">Welcome to Protected Page, {user?.fullName}</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    <button class=" my-4 btn btn-primary">Hello daisyUI</button>
</SignedIn>