<script setup>
import PostTags from '@components/tags/PostTags.vue'

defineProps({
  post: {
    type: Object,
    required: true
  },
  blog_tags: {
    type: Object,
    required: true
  },
  blog_tags_names: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="row">
        <div class="col l2 m4">
          <RouterLink class="link" :to="'/post/' + post.id">
            <slot name="thumbnail"></slot>
          </RouterLink>
        </div>
        <div class="col l10 m6">
          <div class="card-title">
            <RouterLink class="link" :to="'/post/' + post.id">
              <slot name="title"></slot>
            </RouterLink>
          </div>
          <div>
            <slot name="detail"></slot>
          </div>
          <div :data-tags="post.tags">
            <PostTags :post="post" :blog_tags="blog_tags" :blog_tags_names="blog_tags_names"></PostTags>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  .card-title a.link {
    text-shadow: 0 0 5px rgba(0, 0, 0, 0);

    transition: text-shadow 0.2s ease-in-out, border-bottom 0.2s ease-in-out;

    &:hover {
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    }
  }

  &:hover {
    background-color: rgb(248, 248, 248);
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
