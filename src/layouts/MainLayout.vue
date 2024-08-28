<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-tabs
      v-model="tab"
      class="text-dark bg-white shadow-3 fixed-bottom"
      color="black"
      fixed
      
    >
      <router-link to="/"><q-tab name="mails" icon="chat_bubble" label="Discussions" /></router-link>
      <router-link to="/actus"><q-tab name="actus" icon="rss_feed" label="Actus" /></router-link>
      <router-link to="/commun"><q-tab name="commun" icon="group" label="Commun" /></router-link> 
      <router-link to="/appels"><q-tab name="appels" icon="phone" label="Appels" /></router-link>
      
    </q-tabs>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const tab = ref("mails");
    
    return {
      tab,
    }
  }
})
</script>
