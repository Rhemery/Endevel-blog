<script setup>
import TagItem from '@components/tags/TagItem.vue'

import * as Api from '@js/api.js'

defineProps({
  toggle_filter: {
    type: Function,
    required: true
  },
  blog_tags: {
    type: Object,
    required: true
  }
})
</script>

<script>
/*global M*/

export default {
  name: "FilterComponent",
  data() {
    return {
      create_tag_modal_instance: null,
      new_tag_id: 0
    }
  },
  methods: {
    edit_tags() {
      let tag_names = document.getElementsByClassName("tag_name_input");
      for (let i = 0; i < tag_names.length; i++) {
        if (tag_names[i].value != this.blog_tags[i].name) {
          console.log(tag_names[i].value);  
          Api.update_tag(this.blog_tags[i].id, tag_names[i].value).catch((error) => {
            M.toast({html: 'Úprava byla neúspěšná a nebyla uložena.'})
          });
        }
      }
      //Api.post_tag(tag_id, name);
    }
  },
  mounted() {
    let elemet = document.getElementById("create_tag_modal");
    this.create_tag_modal_instance = M.Modal.init(elemet, {});
  }
}
</script>

<template>
  <div class="tags">
    <div class="filter" style="margin-bottom: 1rem;">
      <TagItem v-for="tag in blog_tags" :key="tag.id" :tag-id="tag.id" @click="toggle_filter(tag.id)">
        <template #name>{{ tag.name }}</template>
      </TagItem>
      <TagItem class="edit" @click="create_tag_modal_instance.open()">
        <template #name>Upravit</template>
      </TagItem>
    </div>
  </div>

  <div id="create_tag_modal" class="modal">
    <div class="modal-content">
      <h4>Upravit tagy</h4>
      <div v-for="tag in blog_tags" :key="tag.id" class="row">
        <div class="input-field col s6">
          <input :id="'tag_name_' + tag.id" class="tag_name_input" type="text" :value="tag.name">
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <div class="waves-effect waves-green btn-flat" @click="edit_tags">Save</div>
      <div class="waves-effect waves-green btn-flat" @click="create_tag_modal_instance.close()">Cancel</div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
