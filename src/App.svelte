<script>
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";
</script>

<main class="container">
  <h1 class="text-center">Svelte Feedback App</h1>
  <FeedbackForm />
  <FeedbackStats />
  <FeedbackList />
</main>

<style>
  .text-center {
    text-align: center;
  }
</style>
