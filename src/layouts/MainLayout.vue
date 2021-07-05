<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->

        <q-toolbar-title class="absolute-center"> My-TODO </q-toolbar-title>


      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="240"
      :breakpoint="767"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header class="text-grey-8"> Navigation </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer>
      <q-tabs inline-label class="bg-gray text-white shadow-1">
        <q-route-tab :key="tab.title" v-for="tab in essentialLinks" :to="tab.to" :icon="tab.icon" :label="tab.title" />
       

      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Todo",
    caption: "",
    icon: "assignment_turned_in",
    to: "/",
    // link: 'https://quasar.dev'
  },
  {
    title: "Settings",
    caption: "",
    icon: "settings",
    to: "/settings",
    // link: 'https://quasar.dev'
  },
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
};
</script>


<style scoped>
@media screen and (min-width:768px) {
.q-footer{
  display: none;
}
  
}
</style>
