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
  <RouterLink class="link" :to="'/post/' + post.id">
    <div class="card">
      <div class="image">
        <slot name="thumbnail"></slot>
      </div>
      <div class="card-content">
        <div class="card-title">
          <slot name="title"></slot>
        </div>
        <div class="detail">
          <slot name="detail"></slot>
        </div>
      </div>
      <div class="tags no-add">
        <PostTags :post="post" :blog_tags="blog_tags" :blog_tags_names="blog_tags_names"></PostTags>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  display: inline-block;
  font-size: 0;
  .image {
    display: block; /* Remove any vertical alignment */
    width: 100%;
    height: auto;
  }

  .card-content {
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    color: white;
    background-color: rgba(0, 0, 0, 0);
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    font-size: medium;

    transition: background-color 0.2s ease-in-out;

    @media only screen and (min-width: 993px) {
      font-size: small;
    }

    .card-title {
      font-size: 4cqw;
      margin-top: 2cqw;
      margin-bottom: 3cqw;

      @media only screen and (min-width: 993px) {
        font-size: 1.5cqw;
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    a {
      color: white;
    }

    .detail {
      transform: translateY(-50%) scaleY(0%);
      transition: transform 0.2s ease-in-out;
    }
  }

  .tags {
    position: absolute;
    width: 100%;
    bottom: 1rem;
    left: 50%;
    color: white;
    text-align: center;
    

    box-sizing: border-box;

    a {
      color: white;
    }

    transform: translateX(-50%) translateY(50%) scaleY(0%);
    transition: transform 0.2s ease-in-out;
  }


  &:hover {
    background-color: rgb(248, 248, 248);
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;

    .card-content {
      background-color: rgba(0, 0, 0, 0.322);
    }

    .detail {
      transform: translateY(0%) scaleY(100%);
    }

    .tags {
      transform: translateX(-50%) translateY(0%) scaleY(100%);
    }
  }
  
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  @media only screen and (max-width: 992px) {
    background-color: rgb(248, 248, 248);
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    
    .card-content {
      background-color: rgba(0, 0, 0, 0.322);
    }

    .card-content .detail {
      transform: translateY(0%) scaleY(100%);
    }

    .tags {
      transform: translateX(-50%) translateY(0%) scaleY(100%);
    }
  }
}
</style>
