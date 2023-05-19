<script setup>
import PostsLatest from '@components/posts/latest/PostsLatest.vue'
</script>

<template>
  <h1 class="center-align">
    Endevel blog
  </h1>
  <main>
    <PostsLatest />
  </main>
  <RouterLink to="/posts" class="show-all-posts">
    Zobrazit všechny příspěvky
    <i class="material-icons">
      arrow_forward
    </i>
  </RouterLink>
</template>

<style scoped lang="scss">
.show-all-posts {
  display: block;
  margin: auto;
  text-align: center;
  padding: 1rem;
  color: #000;

  transition: font-size 0.25s ease-in-out;

  & i {
    position: relative;
    top: 0.5rem;
  }

  &:hover {
    font-size: large;
  }
}
</style>
