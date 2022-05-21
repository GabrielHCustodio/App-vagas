<template>
    <div>
        <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
            <div class="col">
                <vagas-recebidas v-bind="vaga" />
            </div>
        </div>
    </div>
</template>
<script>
import VagasRecebidas from "@/components/comuns/Vaga.vue"

export default {
    name: 'ListaVagas',
    data() {
        return {
            vagas: []
        }
    },
    components: {
        VagasRecebidas
    },
    mounted() {
      this.vagas = JSON.parse(localStorage.getItem('vagas'))
      
      this.$emitter.on('filtrarVagas' , (vaga) => {
        const vagas = this.vagas = JSON.parse(localStorage.getItem('vagas'))
        this.vagas = vagas.filter(req => req.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()))
      })
    },
}
</script>