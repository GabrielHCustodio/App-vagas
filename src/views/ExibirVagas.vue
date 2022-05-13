<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vagas></pesquisar-vagas>
      </div>
    </div>

    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vagas-recebidas v-bind="vaga" />
      </div>
    </div>

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
import VagasRecebidas from "@/components/comuns/Vaga.vue"

export default {
    name: 'ExibirVagas',
    data() {
      return {
        usuariosOnline: 0,
        vagas: [
          {
            titulo: 'Analista Programador PHP Pleno',
            descricao: 'Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiências. Atuará na manutenção de sistemas legados da empresa.',
            salario: 6000,
            modalidade: 'Home Office',
            tipo: 'PJ',
            publicacao: '2022-05-10'
          },
          {
            titulo: 'Programador JavaScript Angular',
            descricao: 'Profissional com conhecimentos avançados em JavaScript e Angular.',
            salario: 5000,
            modalidade: 'Presencial',
            tipo: 'CLT',
            publicacao: '2022-04-30'
          },
          {
            titulo: 'Programador JavaScript Vue',
            descricao: 'Profissional com conhecimentos avançados em JavaScript e Vue.',
            salario: 5000,
            modalidade: 'Home Office',
            tipo: 'CLT',
            publicacao: '2022-05-02'
          },
          {
            titulo: 'Analista de Banco de Dados Sênior',
            descricao: 'Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL',
            salario: 9000,
            modalidade: 'Presencial',
            tipo: 'PJ',
            publicacao: '2022-05-05'
          },
          {
            titulo: 'Programador Web Júnior',
            descricao: 'Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL',
            salario: 3000,
            modalidade: 'Presencial',
            tipo: 'CLT',
            publicacao: '2022-03-18'
          }
        ]     
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
      VagasRecebidas
    }
}
</script>
