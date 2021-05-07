<script>
    import {page} from '$app/stores';
    export let navigation;
  
    let open = false;
   
    function handleOpen(event){
      open = !open;
    }
  
  </script>
  

<!-- Mobile menu, show/hide based on menu state. -->
	<div class="{open?"":"hidden"} lg:hidden" id="mobile-menu">
		<div class="pt-2 pb-3 space-y-1">
			<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" -->
			{#each navigation as item}
				<a
					href={item.route}
          			sveltekit:prefetch
					class="{item.route === $page.path?"bg-cyan-50 border-cyan-500 text-cyan-700":"border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"}  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
					>{item.name}</a
				>
			{/each}
		</div>
		<div class="pt-4 pb-3 border-t border-gray-200" />
	</div>