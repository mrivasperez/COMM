<script>
    import MeetingCard from "../UI/MeetingCard.svelte";
    export let meetings;
</script>

<style>
    section {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
}

@media (min-width: 768px) {
  section {
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>

<section id="meetings">
    {#each meetings as meeting }
        <MeetingCard 
            title={meeting.title}
            subtitle={meeting.subtitle}
            imgUrl={meeting.imgUrl}
            description={meeting.description}
            contactEmail={meeting.contactEmail}
            comm={meeting.comm}
        />

    {/each}
</section>