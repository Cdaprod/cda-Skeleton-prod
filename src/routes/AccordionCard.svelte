<script>
  export let header = "";
  export let content = "";
  export let image = "";
  export let link = "";
  export let altColor = true;
</script>

<div class="bg-blue-500 bg-opacity-20 rounded-lg shadow-md container min-h-screen mx-30 flex flex-col md:flex-row md:grid md:grid-cols-3 gap-x-3 gap-y-6 justify-center items-center overflow-y-auto pl-5 md:px-auto">
{#if pageContent && pageContent.sections}
 {#each pageContent.sections as section, index}
  <Accordion>
	<AccordionItem>
		<svelte:fragment slot="summary">{section.header}</svelte:fragment>
		<svelte:fragment slot="content">{section.content}</svelte:fragment>
	</AccordionItem>
	<!-- ... -->
   </Accordion>
 {/each}
{/if}
</div>

<style>
  .section-card.alt-color {
    @apply bg-blue-500 bg-opacity-40;
  }
</style>