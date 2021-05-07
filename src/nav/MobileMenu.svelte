<script>
    import {page} from '$app/stores';
	import ClickOutside from 'svelte-click-outside';

    export let navigation;

	let triggerEl;
  
    export let open;

    function onClickOutside() {
      console.log('Clicked outside!');
    }

  </script>
  

<!-- Mobile menu, show/hide based on menu state. -->
<ClickOutside on:clickoutside={onClickOutside} exclude={[triggerEl]}>

	<div bind:this={triggerEl} class="{open?"":"hidden"} lg:hidden" id="mobile-menu">
		<div class="pt-2 pb-3 space-y-1">
			<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-main-600 hover:bg-main-50 hover:border-main-300 hover:text-main-800" -->
			{#each navigation as item}
				<a
					href={item.route}
          			sveltekit:prefetch
					class="{item.route === $page.path?"bg-contrast-50 border-contrast-500 text-contrast-700":"border-transparent text-main-600 hover:bg-main-50 hover:border-main-300 hover:text-main-800"}  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
					>{item.name}</a
				>
			{/each}
		</div>
		<div class="pt-4 pb-3 border-t border-main-200" />
	</div>
</ClickOutside>