<script setup>
import TagItem from '@components/tags/TagItem.vue'
import TagFilter from '@components/tags/Filter.vue'
import PostItem from '@components/posts/PostItem.vue'
import * as Api from '@js/api.js'
import * as Utils from '@js/utils.js'
import * as Pagination from '@js/pagination.js'
</script>

<script>
export default {
  name: 'Posts',
  components: {
  },
  props: [],
  data() {
    return {
      posts: [],
      blog_tags: [],
      blog_tags_names: {},
      blog_tags_ids: {},
      filter_tags: [],

      previousLocation: window.location
    }
  },
  methods: {
    toggle_filter(tag_id) {
      let elemet = document.querySelector("[tag-id='" + tag_id + "']");
      let index = this.filter_tags.indexOf(tag_id);
      if (index > -1) {
        this.filter_tags.splice(index, 1);
        elemet.classList.remove("active");
      } else {
        this.filter_tags.push(tag_id);
        elemet.classList.add("active");
      }

      Pagination.filter(this.filter_tags, this.posts);
      Pagination.init(2, this.filter_tags);
      this.$nextTick(() => {
        //Pagination.init(2, this.filter_tags);
        //this.bind_routes();
      });

      this.$router.push({ path: '/posts', query: { page: Pagination.get_page(), tags: this.filter_tags.join(',') } });

      /*this.$router.push({ path: '/posts', query: { page: Pagination.current_page(), tags: this.filter_tags.join(',') } });
      Pagination.filter(this.filter_tags);
      this.$nextTick(() => {
        Pagination.init(2, this.filter_tags);
        this.bind_routes();
      });*/
    },

    /*bind_routes() {
      let pagination_buttons = document.querySelectorAll(".pagination > li:not(.disabled) > div");
      for (let i = 0; i < pagination_buttons.length; i++) {
        pagination_buttons[i].addEventListener("click", (e) => {
          let href = e.target.href ? e.target.href : e.target.parentElement.href;
          const currentUrl = href;
          const urlParams = new URLSearchParams(currentUrl);
          const parameterValue = urlParams.get('page');
          this.$router.push({ path: '/posts', query: { page: parameterValue, tags: this.filter_tags.join(',') } });
          Pagination.init(2, this.filter_tags, parseInt(parameterValue));
          this.bind_routes();
        });
      }
    },*/

    async fetch_data() {
      await Api.get("tag").then((data) => {
        this.blog_tags = data;
        this.blog_tags_names = Utils.array_to_object(data);
      });

      await Api.get("blog").then((data) => {
        this.posts = data;
        this.$nextTick(() => {
          this.filter_tags = Pagination.get_filter();
          for (let i = 0; i < this.filter_tags.length; i++) {
            let elemet = document.querySelector("[tag-id='" + this.filter_tags[i] + "']");
            elemet.classList.add("active");
            this.filter_tags[i] = parseInt(this.filter_tags[i]);
          }
          Pagination.filter(this.filter_tags, this.posts);
          Pagination.init(2, this.filter_tags);
          //this.bind_routes();
        });
      });
    },
    
  },
  mounted() {
    this.fetch_data();
  }
}
</script>

<template>
  <TagFilter :toggle_filter="toggle_filter" :blog_tags="blog_tags"></TagFilter>
  <div id="items">
    <div v-for="post in posts" class="post-item">
      <PostItem :post="post" :blog_tags="blog_tags" :blog_tags_names="blog_tags_names">
        <template #title>{{ post.title }}</template>
        <template #detail>{{ post.detail }}</template>
        <template #thumbnail>
          <img class="thumbnail" :src="post.thumbnail" alt="" loading="lazy">
        </template>
      </PostItem>
    </div>
    <div v-if="posts.length == 0">
      <div class="loader"></div>
    </div>

  </div>
  <ul id="pagination" class="pagination">
  </ul>
</template>

<style scoped lang="scss">
.thumbnail {
  margin-top: 1rem;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}
</style>