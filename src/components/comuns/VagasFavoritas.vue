<template>
    <div>
        <div class="btn-favorita">
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Vagas Favoritas</button>
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">Vagas Favoritas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="list-group">
                <li class="list-group-item" v-for="(vaga, index) in vagas" :key="index">
                    {{vaga}}
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VagasFavoritas',
    data() {
        return {
            vagas: []
        }
    },
    mounted() {
         this.$emitter.on( 'favoritarVaga' , (titulo) => {
            this.vagas.push(titulo)
         })
        
        this.$emitter.on( 'desfavoritarVaga' , (titulo) => {
            let indiceArray = this.vagas.indexOf(titulo)
            if (indiceArray !== 1)
                this.vagas.splice(indiceArray, 1)
         })
    }
}
</script>

<style scoped>
    .btn-favorita{
        position: absolute;
        z-index: 1;
        top: 10px;
        right: 10px;
    }

    @media screen and (max-width: 990px) {
        .btn-favorita{
            position: absolute;
            z-index: 1;
            top: 10px;
            right: 180px;
        }
    }
</style>