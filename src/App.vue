<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>

export default {
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  mounted() {
    /*window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })*/
  }
}
</script>

<template>
  <header>
    <nav class="nav-extended">
      <div class="nav-content">
        <ul id="nav-tabs" class="tabs tabs-transparent custom">
          <li id="donate-button-container" style="position: absolute; top: 0.75rem; left: 1%;">
            <div id="donate-button"></div>
          </li>
          <li class="tab custom">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="tab custom">
            <RouterLink to="/about">About</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <div class="container">
    <div class="row">
      <div class="col s12">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
