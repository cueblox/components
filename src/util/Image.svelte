<script>
    let _class = ''
    export { _class as class }

    export let src
    export let alt = 'Alt'
    export let width
    export let height

    $: path = '/optimized/' + src
    $: extension = path.split('.').pop()
    $: pathWithoutExtension = path.substr(0, path.length - extension.length)
</script>

<picture>
    <source srcset={pathWithoutExtension + 'webp'} type="image/webp">
    <source srcset={path} type={extension === 'png' ? 'image/png' : 'image/jpeg'}>
    <img
        src={path}
        {alt}
        class="{_class}"
        width={width}
        height={height}
    >
</picture>
