<template>
  <vagas-favoritas></vagas-favoritas>
  <topo-nav />
  <alerta-cadastro v-if="exibirAlerta"/>
  <router-view/>
</template>

<script>
import TopoNav from "@/components/layouts/Topo.vue"
import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue"
import AlertaCadastro from "@/components/comuns/Alerta.vue"
export default {
  data() {
    return {
      exibirAlerta: false
    }
  },
  components: {
    TopoNav,
    VagasFavoritas,
    AlertaCadastro
  },
  mounted() {
    this.$emitter.on('alerta', () => {
      this.exibirAlerta = true
      setTimeout(() => this.exibirAlerta = false , 4000)
      console.log('Mensagem personalizada')
    })
  }
}
</script>

<style>

</style>
