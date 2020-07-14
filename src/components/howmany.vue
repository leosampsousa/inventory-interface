<template>
  <div>
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Quantos itens</a>
      </div>
    </nav>

    <br>
    <div class="container">
        <table>
            <thead>
                <tr>
                    <th>Parametro</th>
                    <th>Número de itens no inventório</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{{parametro}}</th>
                    <th>{{valor}}</th>
                </tr>
            </tbody>
        
        </table>
    </div>

  </div>
</template>

<script>
import Inventory from "../services/inventory"
export default {
    data(){
        return{
            valor : '',
            parametro:''
        }
    },
    computed: {
        complete() {
            return this.$route.query.complete
        }
    },

    methods: {
        count() {
            Inventory.howMany(this.complete).then(resposta => {
                this.valor = resposta.data;
                this.parametro = this.$route.query.complete;
                if(this.parametro == null)
                    this.parametro = "Sem parametro (retorna todos os itens)";
            })
        }
    },

    created() {
        this.count()
    }
}
</script>

<style>
</style>