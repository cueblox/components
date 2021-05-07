<script>
    	import { createEventDispatcher } from 'svelte';
        const dispatch = createEventDispatcher();
        
    let menuOpen = false;

    function handleToggle(event) {
		menuOpen = !menuOpen;
	}

</script>

<nav class="bg-white shadow">
    <slot name="desktop"></slot>
    <slot name="mobile"></slot>
</nav>
