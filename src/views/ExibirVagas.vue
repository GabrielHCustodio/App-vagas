<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vagas></pesquisar-vagas>
      </div>
    </div>

    <lista-vagas />

    <div class="row mt-5">
      <div class="col-4">
        <indicador-dados titulo="Vagas abertas" indicador="85" bg="bg-dark" color="text-white"></indicador-dados>
      </div>

      <div class="col-4">
        <indicador-dados titulo="Profissionais cadastrados" indicador="150" bg="bg-dark" color="text-white"></indicador-dados>
      </div>

      <div class="col-4">
        <indicador-dados titulo="Visitantes online" :indicador="usuariosOnline" bg="bg-light" color="text-dark"></indicador-dados>
      </div>
    </div>

  </div>
</template>

<script>
import PesquisarVagas from "@/components/comuns/PesquisarVagas.vue"
import IndicadorDados from "@/components/comuns/Indicador.vue"
import ListaVagas from "@/components/comuns/ListaVagas.vue"

export default {
    name: 'ExibirVagas',
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
      IndicadorDados,
      ListaVagas
    }
}
</script>
