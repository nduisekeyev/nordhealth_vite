<template>
  <nord-empty-state>
    <h2>404 Not Found</h2>
    <p>
      Oops! The page you're looking for could not be found. It seems like
      there's a glitch in the matrix. Click "Get Back" to return to the home
      page or double-check the URL for any typos.
    </p>
    <nord-stack justify-content="center" gap="s" direction="horizontal">
      <router-link to="/"><nord-button>Get Back</nord-button></router-link>
    </nord-stack>
  </nord-empty-state>
</template>
