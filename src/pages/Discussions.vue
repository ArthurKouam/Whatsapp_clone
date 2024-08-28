<template>
  <q-page class="">
    <q-toolbar class=" text-dark q-pt-md">
      <q-toolbar-title class=" text-bold text-h4 text-green">
        WhatsApp
      </q-toolbar-title>
      <q-btn flat round dense icon="photo" class="q-mr-xs" />
      <q-btn flat round dense icon="more_vert" />
    </q-toolbar>
    
    <q-input v-model="text" type="text" bg-color="bg-blue-grey-1" style="margin: 12px 15px;" filled class="q-mt-sm  no-border text-h6" placeholder="Demander à Meta AI ou rechercher" />

    <div class="flex justify-around text-dark q-mx-sm q-mt-lg no-wrap">
      <span style="border-radius: 13px; padding: 5px 25px;" class=" bg-grey-2">Toutes</span>
      <span style="border-radius: 13px; padding: 5px 15px;" class="bg-grey-2">Non lues</span>
      <span style="border-radius: 13px; padding: 5px 15px;" class="bg-grey-2">Favoris</span>
      <span style="border-radius: 13px; padding: 5px 15px;" class="bg-grey-2">Groupes</span>
    </div>

    <q-item class=" q-pa-md" v-for="dist in dists" :key="dist" clickable>
      <q-item-section avatar>
        <q-avatar color="green" text-color="white" icon="image" />
      </q-item-section>
      <q-item-section>
        <q-item-label><span class=" text-h6 bold">{{ dist }}</span></q-item-label>
        <q-item-label caption lines="1"><span style="font-size: 15px;">Comment tu vas aujoud'hui?</span></q-item-label>
      </q-item-section>
      <q-item-section side top>
        <q-item-label caption class=""><span style="font-size: 16px;" class=" text-h5">13:57</span></q-item-label>
        <span class=" bg-green text-white" style="padding: 5px 10px; border-radius: 100%;">2</span>
      </q-item-section>
    </q-item>
    <q-btn color="green" icon="message" style="position: fixed; bottom: 100px; right: 15px; padding: 15px; border-radius: 10px;" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WDiscussions',

  setup(){
    const dists = [
      "Charles","Christian","Ange","Valere","Chris","Mr le maire","MTN","Orange","Billy","Daniel"
    ];

    return {dists, }
  }

});
</script>
