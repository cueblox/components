<script>
    export let color;
    export let title;
    export let description;
    export let link;
    

    const colorMap = {
	  "red": {
		  "bg": "bg-red-100"
	  },
	  "purple": {
		  "bg": "bg-purple-100"
	  },
	  "blue": {
		  "bg": "bg-blue-100"
	  },
	  "lime": {
		  "bg": "bg-lime-100"
	  },
	  "amber": {
		  "bg": "bg-amber-100"
	  },
	  "orange": {
		  "bg": "bg-orange-100"
	  },
	  "teal": {
		  "bg": "bg-teal-100"

	  },
	  "bluegray": {
		  "bg": "bg-bluegray-100"

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