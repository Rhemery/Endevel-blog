<script setup>
import TagItem from '@components/tags/TagItem.vue'

import * as Api from '@js/api.js'

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

<script>
/*global M*/

export default {
  data() {
    return {
      available_tags: [],
      add_tag_modal_id: 'add_tag_modal' + Math.random().toString(36).substring(7),
      modal_instance: null
    }
  },
  methods: {
    add_tag() {
      this.post.tags.push(1);
    },

    remove_tag(tag_id) {
      this.post.tags = this.post.tags.filter(item => item !== tag_id);
    },

    toggle_tag(tag_id) {
      let index = this.post.tags.indexOf(tag_id);
      if (index > -1) {
        this.post.tags.splice(index, 1);
      } else {
        this.post.tags.push(tag_id);
      }
    },

    show_add_tag_modal() {
      this.modal_instance.open();
    },

    close_add_tag_modal() {
      this.modal_instance.close();
    }
  },
  mounted() {
    let elemet = document.getElementById(this.add_tag_modal_id);
    this.modal_instance = M.Modal.init(elemet, {
      onCloseStart: () => {
        Api.update_post_tags(this.post).catch((error) => {
          M.toast({html: 'Úprava byla neúspěšná a nebyla uložena.'})
        });
      }
    });

    this.available_tags = Object.keys(this.blog_tags_names).filter(item => !this.post.tags.includes(parseInt(item)));
  }
}
</script>


<template>
  <div class="tags">
    <TagItem v-for="tag_id in post.tags" :key="tag_id">
      <template #name>{{ blog_tags_names[tag_id] }}</template>
    </TagItem>
    <TagItem class="add-tag" @click="show_add_tag_modal">
      <template #name>+</template>
    </TagItem>
  </div>

  <div :id="add_tag_modal_id" class="modal">
    <div class="modal-content">
      <h4>Přidat tag</h4>
      <TagItem v-for="tag in blog_tags" :key="tag.id" :class="post.id ? post.tags.includes(tag.id) ? 'active' : '' : ''"
        @click="toggle_tag(tag.id)">
        <template #name>{{ tag.name }}</template>
      </TagItem>
    </div>
    <div class="modal-footer">
      <div class="waves-effect waves-green btn-flat" @click="close_add_tag_modal">Agree</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  width: 50%;
}
</style>
