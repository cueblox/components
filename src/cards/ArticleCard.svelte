<script>
  export let article;
</script>

<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
  <div class="flex-shrink-0">
    <img
      class="object-cover w-full h-48"
      src="/{article.image.file_name}"
      alt={article.title}
      width={article.image.width}
      height={article.image.height}
    />
  </div>
  <div class="flex flex-col justify-between flex-1 p-6 bg-white">
    <div class="flex-1">
      <p class="text-sm font-medium text-contrast-600">
        <a href="/categories/{article.category_id}" class="hover:underline">
          {article.category && article.category.name}
        </a>
      </p>
      <a href="/articles/{article.id}" class="block mt-2">
        <p class="text-xl font-semibold text-contrast-900">
          {article.title}
        </p>
        <p class="mt-3 text-base text-main-500">
          {article.excerpt}
        </p>
      </a>
    </div>
    <div class="flex items-center mt-6">
      <div>
        <div class="flex text-sm space-x-1 text-main-500">
          <time datetime="2020-03-10"> Mar 10, 2020 </time>
          <span aria-hidden="true"> &middot; </span>
          <span> 4 min read </span>
        </div>
      </div>
    </div>
  </div>
</div>
