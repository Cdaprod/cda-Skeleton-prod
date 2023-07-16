<script>
  import { onMount } from 'svelte';
  import SectionCard from './SectionCard.svelte';
  
  let projects = [];

  onMount(async () => {
    const response = await fetch('/api/github');
    const { data } = await response.json();

    projects = data.viewer.repositories.nodes.map(node => ({
      header: node.name,
      content: node.description,
      image: node.openGraphImageUrl,
      link: node.url
    }));
  });
</script>

<div class="container mx-auto py-8 grid md:grid-cols-3 gap-x-4 gap-y-8">
  {#each projects as project, index}
    <SectionCard
      header={project.header}
      content={project.content}
      image={project.image}
      link={project.link}
      altColor={index % 2 === 1}
    />
  {/each}
</div>

<style lang="postcss">
  .section-card {
    @apply transition-all duration-200 transform hover:scale-105;
  }
</style>
