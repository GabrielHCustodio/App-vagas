<template>
    <div :class="colorAlert" role="alert">
        <slot name='titulo'></slot>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "AlertaCadastro",
    props: { tipo: String},
    computed: {
        colorAlert() {
            switch(this.tipo) {
                case 'erro' : return 'alert alert-danger'
                case 'sucesso' : return 'alert alert-success'
                default: return 'alert alert-success'
            }
        }
    }
}
</script>