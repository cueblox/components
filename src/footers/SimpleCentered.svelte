<script>
	import SocialLink from '..social/SocialLink.svelte';

	export let navigation;
	export let profile;
</script>

<footer class="bg-white">
	<div class="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
		<nav class="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
			{#each navigation as item}
				<div class="px-5 py-2">
					<a href={item.route} class="text-base text-main-500 hover:text-main-900">
						{item.name}
					</a>
				</div>
			{/each}
		</nav>
		<div class="flex justify-center mt-8 space-x-6">
			{#each profile.social_accounts as social (social.id)}
				<SocialLink network={social.network} url={social.url} username={social.username} />
			{/each}
		</div>
		<p class="mt-8 text-base text-center text-main-400">
			&copy; 2020 Workflow, Inc. All rights reserved.
		</p>
	</div>
</footer>
