<script>
  export let header = "";
  export let content = "";
  export let image = "";
  export let link = "";
  export let altColor = true;
</script>

<div class={`section-card ${altColor ? 'alt-color' : ''} p-4 bg-blue-500 bg-opacity-20 rounded-lg shadow-md`}>
  <h3 class="text-xl font-semibold mb-2">{header}</h3>
  <p class="text-white-700 mb-4">{content}</p>
  <img src={image} alt={header} class="w-full h-auto mb-4" />
  <a href={link} target="_blank" class="text-blue-600 hover:text-blue-800">Learn more</a>
</div>

<style lang="postcss">
  .section-card.alt-color {
    @apply bg-blue-500 bg-opacity-40;
  }
</style>
