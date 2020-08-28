<script>
  import Header from "./UI/Header.svelte";
  import MeetingCardGrid from "./Meetings/MeetingCardGrid.svelte";
  import TextInput from "./UI/TextInput.svelte";
  import Button from "./UI/Button.svelte";

  // Meetings var initialization
  let title = "",
    subtitle = "",
    description = "",
    imgUrl = "",
    comm = "",
    contactEmail = "";

  let meetings = [
    {
      id: "m1",
      title: "Anti-Racists",
      subtitle: "Fight racism together.",
      description:
        "A movement building meeting for people of color, specfially youth, women, queer and trans folks to form community and protect each other.",
      imgUrl:
        "https://images.unsplash.com/photo-1591826246299-9113fd782020?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      comm: "To be determined",
      contactEmail: "ar@test.com",
    },
    {
      id: "m2",
      title: "Dog-Friends",
      subtitle: "A place for humans with dogs.",
      description:
        "Share tips and other great information about taking care of your dogs.",
      imgUrl:
        "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      comm: "To be determined",
      contactEmail: "dog@test.com",
    },
  ];

  const addMeeting = () => {
    let newMeeting = {
      id: Math.random().toString(),
      title: title,
      subtitle: subtitle,
      description: description,
      imgUrl: imgUrl,
      comm: comm,
      contactEmail: contactEmail,
    };
    meetings = [...meetings, newMeeting];
  };
</script>

<style>
  main {
    margin-top: 5rem;
  }

  form {
    width: 30rem;
    max-width: 90%;
    margin: auto;
  }
</style>

<Header />

<main>
  <form on:submit|preventDefault={addMeeting}>

    <TextInput
      id="title"
      label="Title"
      type="text"
      value={title}
      on:input={e => (title = e.target.value)} />

    <TextInput
      id="subtitle"
      label="Subtitle"
      type="text"
      value={subtitle}
      on:input={e => (subtitle = e.target.value)} />

    <TextInput
      id="comm"
      label="Comm"
      type="text"
      value={comm}
      on:input={e => (comm = e.target.value)} />

    <TextInput
      id="imgUrl"
      label="Image URL"
      type="text"
      value={imgUrl}
      on:input={e => (imgUrl = e.target.value)} />

    <TextInput
      id="contactEmail"
      label="Admin Email"
      type="email"
      value={contactEmail}
      on:input={e => (contactEmail = e.target.value)} />

    <TextInput
      id="description"
      label="Description"
      controlType="textarea"
      value={description}
      on:input={e => (description = e.target.value)} />

    <Button type="submit" caption="Save" />

  </form>
  <MeetingCardGrid {meetings} />

</main>
