import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "The service as amazing! The waiters were very prompt and the food was very good!"
  },
  {
    id: 2,
    rating: 9,
    text: "I'm going to need to bring my family back here for a celebration!"
  },
  {
    id: 3,
    rating: 8,
    text: "I loved the decore of the place. Very great European inspired design."
  }
]);
