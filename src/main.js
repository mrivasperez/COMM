import App from "./App.svelte";
import Header from "./UI/Header.svelte";

const app = new App({
  target: document.body,
});

// Don't do this because it basically creates two apps! Only do this if the components are completely individual
// const header = new Header({
//   target: document.querySelector("#header"),
// });

export default app;
