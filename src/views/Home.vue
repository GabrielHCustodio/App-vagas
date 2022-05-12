<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vagas></pesquisar-vagas>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-4">
        <indicador titulo="Vagas abertas" indicador="85" bg="bg-dark" color="text-white"></indicador>
      </div>

      <div class="col-4">
        <indicador titulo="Profissionais cadastrados" indicador="150" bg="bg-dark" color="text-white"></indicador>
      </div>

      <div class="col-4">
        <indicador titulo="Visitantes online" :indicador="usuariosOnline" bg="bg-light" color="text-dark"></indicador>
      </div>
    </div>

  </div>
</template>

<script>
import PesquisarVagas from "@/components/comuns/PesquisarVagas.vue"
import Indicador from "@/components/comuns/Indicador.vue"

export default {
    name: 'Home',
    data() {
      return {
        usuariosOnline: 0
      }
    },
    methods: {
      getUsuariosOnline() {
        this.usuariosOnline = Math.floor( Math.random() * 101 )
      }
    },
    created() {
      setInterval(this.getUsuariosOnline, 1000)
    },
    components: {
      PesquisarVagas,
      Indicador
    }
}
</script>
