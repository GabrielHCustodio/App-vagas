<template>
  <vagas-favoritas></vagas-favoritas>
  <topo-nav />
  <router-view/>
</template>

<script>
import TopoNav from "@/components/layouts/Topo.vue"
import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue"
export default {
  components: {
    TopoNav,
    VagasFavoritas
  }
}
</script>

<style>

</style>
