<template>

    <q-page class="">

        <q-toolbar class=" text-dark q-pt-md bg-white fixed-top">
          <q-toolbar-title class=" text-h4">
            Actus
          </q-toolbar-title>
          <q-btn flat round dense icon="photo" class=" q-mr-md" />
          <q-btn flat round dense icon="search" class="q-mr-md" />
          <q-btn flat round dense icon="more_vert" />
        </q-toolbar>
        
        <section style="margin-top: 100px;">

          <div style="border-bottom: 1px solid lightblue; padding-bottom: 15px;">
            <h5 class=" q-pl-md bold">Statut</h5>

            <q-scroll-area style="width: 100%; height: 90px;" :visible="false" :thumb-style="{opacity: 0}" :bar-style="{opacity: 0}">
              <div class=" row no-wrap q-mr-md" style="height: min-content;">
                <div v-for="n in 10" :key="n" class=" q-pl-md" style="height: min-content;">
                  <q-avatar size="80px" font-size="40px" color="teal" text-color="white" icon="image" />
                </div>
              </div>    
            </q-scroll-area>
          </div>

          <div class=" q-mt-lg">
            <q-toolbar>
              <q-toolbar-title class=" text-h5">
                Chaine
              </q-toolbar-title>
              <span style="color: green; font-size: 19px;">Decouvrir ></span>
            </q-toolbar>
            <q-item class=" q-pa-md" v-for="dist in dists" :key="dist" clickable>
              <q-item-section avatar>
                <q-avatar color="green" text-color="white" style="width: 60px; height: 60px;" icon="image" />
              </q-item-section>
              <q-item-section>
                <q-item-label><span class=" text-h6 bold">{{ dist.title }}</span></q-item-label>
                <q-item-label caption lines="1"><span style="font-size: 15px;">{{ dist.text }}</span></q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-item-label caption class=""><span style="font-size: 16px;" class=" text-h5">13:57</span></q-item-label>
                <span class=" bg-green text-white" style="padding: 5px 10px; border-radius: 100%;">2</span>
              </q-item-section>
            </q-item>
          </div>

          <div class=" q-mt-lg">
            <span class="text-h5 bold q-pl-md" >Trouver des chaines</span>
            <q-scroll-area style="width: 100%; height: 220px; margin-top: 30px;" :visible="false" :thumb-style="{opacity: 0}" :bar-style="{opacity: 0}">
              <div class=" row no-wrap q-pr-md" style="height: min-content;">
                <div v-for="n in 10" :key="n" class=" q-pl-md " style="height: min-content;">
                  <div class="channels" style="width: 150px; height: 200px; border: 1px solid black; border-radius: 15px;">
                    <q-avatar size="80px" font-size="52px" color="primary" text-color="white" icon="image">
                      <q-badge color="green" text-color="white" style="width: 35px; height: 35px; border-radius: 50%; position: absolute; bottom: 5px; right: 0; transform: translate(10px, 2px);" icon="checked" />
                    </q-avatar>
                    <span style="font-size: 18px;">Youpi Startup</span>
                    <button style="font-size: 18px; padding: 2px 34px; color: green; background-color: rgba(0, 253, 17, 0.374); border: 0; border-radius: 13px;">Suivre</button>
                  </div>
                </div>
              </div>    
            </q-scroll-area>   
          </div>

        </section>
      
    </q-page>

  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'WActus',
    setup(){
      const dists = [
        {
          title: "Olympics",
          text: "On se revoit à New York"
        },
        {
          title: "Youpi Startup",
          text: "Le meuilleur du digital"
        }
      ]

      return { dists}
    }
  
  });
  </script>

<style>
  .channels{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
  }
</style>