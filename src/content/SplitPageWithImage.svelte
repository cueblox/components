<script>
export let headline;
export let title;
export let lede;
export let image;
export let image_alt;

</script>
<div class="relative bg-white">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <img class="h-56 w-full object-cover lg:absolute lg:h-full" src="{image.file_name}" alt="{image_alt}">
      </div>
    </div>
    <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
      <div class="lg:col-start-2 lg:pl-8">
        <div class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
          <h2 class="leading-6 text-highlight-600 font-semibold tracking-wide uppercase">{headline}</h2>
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-main-900 sm:text-4xl">{title}</h3>
          <p class="mt-8 text-lg text-main-500">{lede}</p>
          <div class="mt-5 prose prose-highlight text-main-500">
            <slot></slot>
         </div>
        </div>
      </div>
    </div>
  </div>
  