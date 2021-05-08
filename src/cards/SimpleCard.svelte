<script>
    export let color;
    export let title;
    export let description;
    export let link;
    

    const colorMap = {
	  "red": {
		  "bg": "bg-red-600"
	  },
	  "purple": {
		  "bg": "bg-purple-600"
	  },
	  "blue": {
		  "bg": "bg-blue-600"
	  },
	  "lime": {
		  "bg": "bg-lime-600"
	  },
	  "amber": {
		  "bg": "bg-amber-600"
	  },
	  "orange": {
		  "bg": "bg-orange-600"
	  },
	  "teal": {
		  "bg": "bg-teal-600"

	  },
	  "bluegray": {
		  "bg": "bg-bluegray-600"

	  },
  }


    function cardColor(color) {
		return (
			'flex-shrink-0 flex items-center justify-center w-16 ' +
			colorMap[color]["bg"] +
			' text-white text-sm font-medium rounded-l-md'
		);
	}
</script>

<li class="flex col-span-1 rounded-md shadow-sm">
    <div class={cardColor(color)}>
        {title.charAt(0)}
    </div>
    <div
        class="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-bg-200 rounded-r-md"
    >
        <div class="flex-1 px-4 py-2 text-sm truncate">
            <a
                sveltekit:prefetch
                href="{link}"
                class="font-medium text-main-900 hover:text-main-600">{title}</a
            >
            <p class="text-main-500">{description}</p>
        </div>
    </div>
</li>