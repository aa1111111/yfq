<template>
  <div class="app-wrapper">
    <!-- <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    /> -->
    <sidebar class="sidebar-container" />
      <app-main />
      <app-footer />
    </div>
  <!-- </div> -->
</template>

<script>
import { Sidebar, AppMain, AppFooter } from "./components";
export default {
  name: "Layout",
  components: {
    AppFooter,
    Sidebar,
    AppMain,
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("app/closeSideBar", { withoutAnimation: false });
    },
  },
};
</script>

