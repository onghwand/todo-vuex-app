<template>
  <div id="app" class="background zindex-dropdown d-flex justify-content-center" >
    <!-- <img :src="loadPic" alt="background img"> -->
    <div class="container bg-light zindex-sticky position-absolute mt-5 p-3">
      <h1 class="mb-3">TO DO LIST</h1>
      <todo-form></todo-form>
      <todo-list></todo-list>
      <!-- <p>Total todo: {{totalTodosCount}}</p>
      <p>Completed Todo: {{completedTodosCount}}</p> -->
      <div class="d-flex justify-content-between">
        <p>남은 할일: {{uncompletedTodosCount}}</p>
        <div>
          <button type="button" class="btn btn-secondary me-3" @click="deleteChecked">선택 삭제</button> 
          <button type="button" class="btn btn-secondary" @click="clearAll">전체 삭제</button>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import TodoForm  from '@/components/TodoForm'
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
//import axios from 'axios'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm
  },
  methods: {
    ...mapActions([
      'clearAll',
      'deleteChecked',
    ])
    // loadPic(){
    //   const URL='https://api.unsplash.com/photos/random'
    //   axios.get(URL)
    //   .then(res => {
    //     console.log(res)
    //     return res
    //   })
    //   .catch(err => console.log(err)) 
    // }
  },
  computed: {
    ...mapGetters([
      'completedTodosCount',
      'uncompletedTodosCount',
      'totalTodosCount',
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px;  */
}

.background {
  /* background-image:url(http://source.unsplash.com/random/900x900); */
  background-image: url(./assets/bg.jpg);
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* z-index: -1; */
}

</style>
