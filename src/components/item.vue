<template>
  <div>

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Atualizar Item</a>
      </div>
    </nav>
 
    <div class="container">

      <form @submit.prevent="submit()">

          <label>Name</label>
          <input type="text" placeholder="Name" v-model="item.name">
          <label>Category</label>
          <input type="text" placeholder="Category" v-model='item.category'>
          <label>Value</label>
          <input type="number" step="0.01" placeholder="Value" v-model="item.value">
          <label>Complete</label>
          <input type="text" placeholder="true or false" v-model="item.complete">

          <button class="waves-effect waves-light btn-small">Atualizar<i class="material-icons left">save</i></button>
          

      </form>
      <br>
      <button @click="voltar()" class="waves-effect waves-light btn-small">Voltar</button>

    </div>

  </div>
</template>

<script>
import Inventory from "../services/inventory"
export default {
    name: "itemUpdate",
    data() {
        return {
            item: {
                id:'',
                name : '',
                category : '',
                value: '',
                complete: ''
            }

        }
    },

    
    computed: {
        id() {
            return this.$route.params.id;
        }
    },

    methods: {
        carregarItem() {
            Inventory.listarItem(this.id).then(resposta => {
                this.item.name = resposta.data.name;
                this.item.category = resposta.data.category;
                this.item.value = resposta.data.value;
                this.item.complete = resposta.data.complete;
            });
        },

        submit(){
            Inventory.atualizaItem(this.id, this.item).then(() =>{
                alert("Item atualizado com sucesso")
            })
            
            
        },

        voltar(){
            this.$router.push("/inventory");
        }
    },

    created() {
        this.carregarItem();
    }

    
};
</script>

<style>
</style>