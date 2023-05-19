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
  <div class="row">
    <div class="col s12 center-align">
      <div class="card-title">
        <h2>
          <slot name="title"></slot>
        </h2>
      </div>
      <div>
        <slot name="detail"></slot>
      </div>
      <div>
        <PostTags :post="post" :blog_tags="blog_tags" :blog_tags_names="blog_tags_names"></PostTags>
      </div>
    </div>
  </div>

  <div>
    <slot name="text"></slot>
  </div>

  <div class="image">
    <slot name="image"></slot>
  </div>
</template>

<style scoped>
.image {
  margin: auto;
  margin-top: 1rem;
  width: 50%;
  border-radius: 8px;
}
</style>
