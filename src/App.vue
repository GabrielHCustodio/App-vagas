<template>
  <vagas-favoritas></vagas-favoritas>
  <topo-nav />
  <alerta-cadastro v-if="exibirAlerta" :tipo="alerta.tipo">
    <template v-slot:titulo>
      <h3>{{ alerta.titulo }}</h3>
    </template>

    <p>{{alerta.descricao}}</p>
  </alerta-cadastro>
  <router-view/>
</template>

<script>
import TopoNav from "@/components/layouts/Topo.vue"
import VagasFavoritas from "@/components/comuns/VagasFavoritas.vue"
import AlertaCadastro from "@/components/comuns/Alerta.vue"
export default {
  data() {
    return {
      alerta: { titulo: '' , descricao: '' , tipo: ''},
      exibirAlerta: false
    }
  },
  components: {
    TopoNav,
    VagasFavoritas,
    AlertaCadastro
  },
  mounted() {
    this.$emitter.on('alerta', (a) => {
      this.alerta = a
      this.exibirAlerta = true
      setTimeout(() => this.exibirAlerta = false , 4000)
    })
  }
}
</script>

<style>

</style>
