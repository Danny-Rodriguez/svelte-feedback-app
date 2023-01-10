import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "Danny is a great web developer! He made my site for me just the way I wanted!"
  },
  {
    id: 2,
    rating: 9,
    text: "My website needed some work on the UI, Danny understood how to commnunicate UI design in a concise and effective matter."
  },
  {
    id: 3,
    rating: 8,
    text: "I hired Danny to make a fullstack application because he had both the frontend and backend skills needed to get the job done. Highly recommend him!"
  }
]);
