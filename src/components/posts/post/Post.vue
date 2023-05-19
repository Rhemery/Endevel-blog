<script setup>
import PostDetailItem from '@components/posts/post/PostDetailItem.vue'

import * as Api from '@js/api.js'
import * as Utils from '@js/utils.js'
</script>

<script>
export default {
  name: 'Post',
  components: {
  },
  props: [],
  data() {
    return {
      post: {},
      blog_tags: [],
      blog_tags_names: {}
    }
  },
  methods: {
    async fetch_data() {
      await Api.get("tag").then((data) => {
        this.blog_tags = data;
        this.blog_tags_names = Utils.array_to_object(data);
      });

      await Api.get("blog/" + this.$route.params.id).then((data) => {
        this.post = data;
      });
    },
  },
  mounted() {
    this.fetch_data();
  }
}
</script>

<template>
  <PostDetailItem :post="post" :blog_tags="blog_tags" :blog_tags_names="blog_tags_names">
    <template #title>{{ post.title }}</template>
    <template #detail>{{ post.detail }}</template>
    <template #thumbnail>
      <img :src="post.thumbnail" alt="" style="width: 100%;">
    </template>
    <template #image>
      <img :src="post.image" alt="" style="width: 100%;">
    </template>
    <template #text>{{ post.text }}</template>
  </PostDetailItem>
</template>
