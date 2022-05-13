<template>
    <div class="card">
        <div class="card-header bg-dark text-white">{{titulo}}</div>
        <div class="card-body">
            <p>{{descricao}}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Salário: R$ {{salario}} | Modalidade: {{modalidade}} | Tipo: {{tipo}} | Publicação: {{publicacao}}</small>
        </div>
    </div>
</template>

<script>
export default {
    name: "VagasRecebidas",
    props: {
        titulo: {
            type: String,
            required: true,
            validator(p) {
                if(p.length < 10) return false
                return true
            }
        },
        descricao: {
            type: String,
            default() {
                return 'Descrição não informada pelo contratante.'
            }
        },
        salario: {
            type: Number,
            required: true
        },
        modalidade: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        publicacao: {
            type: String,
            required: true
        }
    }
}
</script>