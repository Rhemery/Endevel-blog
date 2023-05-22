<script setup>
import PostCardItem from '@components/posts/latest/PostCardItem.vue'

import * as Api from '@js/api.js'
import * as Utils from '@js/utils.js'
</script>

<script>
export default {
  name: 'PostsLatest',
  components: {
  },
  props: [],
  data() {
    return {
      posts: [],
      blog_tags: [],
      blog_tags_names: {},

      errors: []
    }
  },
  methods: {
    async fetch_data() {
      await Api.get("tag")
        .then((data) => {
          this.blog_tags = data;
          this.blog_tags_names = Utils.array_to_object(data);
        })
        .catch((error) => {
          this.errors.push(error);
        });

      await Api.get("")
        .then((data) => {
          this.posts = data;
        })
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
  mounted() {
    this.fetch_data();
  }
}
</script>

<template>
  <div v-if="errors.length == 0" class="row">
    <div v-for="post in posts" :key="post.id">
      <div class="col s12 l4">
        <PostCardItem :post="post" :blog_tags="blog_tags" :blog_tags_names="blog_tags_names">
          <template #title>{{ post.title }}</template>
          <template #detail>{{ post.detail }}</template>
          <template #thumbnail>
            <img class="thumbnail" :src="post.thumbnail" alt="" loading="lazy">
          </template>
        </PostCardItem>
      </div>
    </div>
  </div>
  <div v-if="errors.length > 0" class="center-align">
    Při načítání dat došlo k chybě.
  </div>
</template>

<style scoped lang="scss">
.thumbnail {
  width: 100%;
  height: 100%;
}

.loader {
  border: 10px solid #c9c9c9;
  /* Light grey */
  border-top: 10px solid #3498db;
  /* Blue */
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: auto;
  margin-top: 5rem;
  animation: spin 0.25s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>