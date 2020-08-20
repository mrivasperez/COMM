<script>
    import Header from './UI/Header.svelte';
    import MeetingCard from './UI/MeetingCard.svelte';

    const meetings = [
        {
            id: 'm1',
            title: 'Anti-Racists',
            subtitle: 'Fight racism together.',
            description: 'A movement building meeting for people of color, specfially youth, women, queer and trans folks to form community and protect each other.',
            imgUrl: 'https://images.unsplash.com/photo-1591826246299-9113fd782020?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            comm: 'To be determined',
            contactEmail: 'ar@test.com'
        }, {
            id: 'm2',
            title: 'Dog-Friends',
            subtitle: 'A place for humans with dogs.',
            description: 'Share tips and other great information about taking care of your dogs.',
            imgUrl: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            comm: 'To be determined',
            contactEmail: 'dog@test.com'
        }
    ]

</script>

<style>
    #meetings {
        margin-top: 5rem;
    }
</style>

<Header />

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

