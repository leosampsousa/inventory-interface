<template>
  <div>

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Inventory - FrontEnd - Soma</a>
      </div>
    </nav>
 
    <div class="container">
      <p>Formulário para cadastro de items no inventório.</p>
      <form @submit.prevent="salvar">

          <label>Name</label>
          <input type="text" placeholder="Name" v-model="item.name">
          <label>Category</label>
          <input type="text" placeholder="Category" v-model='item.category'>
          <label>Value</label>
          <input type="number" step="0.01" placeholder="Value" v-model="item.value">
          <label>Complete</label>
          <input type="text" placeholder="true or false" v-model="item.complete">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>
      
        <p>Retornar quantos itens estão no inventório de acordo com o parametro complete.</p>
        <label>Complete</label>
        <input type="text" placeholder="all or true or false" v-model="complete">
        <button @click="howMany()" class="waves-effect waves-light btn-small">How many ?</button>


      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CATEGORY</th>
            <th>VALUE</th>
            <th>COMPLETE</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="item of items" :key="item.id">

            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.category}}</td>
            <td>{{item.value}}</td>
            <td>{{item.complete}}</td>
            <td>
              <button @click="atualizaItem(item.id)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="deletaItem(item.id)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

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
        return {
            item: {
                id:'',
                name : '',
                category : '',
                value: '',
                complete: ''
            },

            complete : '',

            items : []

        }
    },

    
    created(){
        this.listar();
        console.log(this.complete);
    },

    methods:{
        listar(){
            Inventory.listar().then(resposta => {
            this.items = resposta.data;
            });
        },

        salvar(){
            this.item.complete = (this.item.complete === "true");
            Inventory.salvar(this.item).then(resposta => {
                alert("Salvo com sucesso")
                console.log(resposta);
                this.listar();
            });
        },
        
        deletaItem(id){
            console.log(id);
            Inventory.deletar(id).then(resposta => {
                this.listar();
                console.log(resposta);

            })
        },

        atualizaItem(id){
            this.$router.push('/inventory/' + id)
        },

        howMany(){
            if(this.complete == '')
                return this.$router.push('/howmany')
            else
                return this.$router.push({path : 'howmany', query : {complete : this.complete}})
        },

        editar(item){
            this.item = item;
        }
    }
}
</script>

<style>

</style>
