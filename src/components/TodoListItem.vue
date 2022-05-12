<template>
  <div class="my-3 d-flex justify-content-between">
    <div>
      <input 
      type="checkbox"
      @click="changeCheckStatus(todo)"
      > 
      <!-- @click="changeCheckStatus(todo)" -->
      <span 
      @click="updateTodoStatus(todo)"
      class="justify-content-start pointer"
      :class="{ 'is-completed': todo.isCompleted }"
      >
      {{ todo.title }}
      </span>
    </div>
    <div>
      <!-- <button @click="deleteTodo(todo)"><i class="fa-solid fa-trash-can"></i></button> -->
      <i class="fa-solid fa-trash-can fa-lg justify-content-end" @click="deleteTodo(todo)"></i>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
    }
  },
  // data(){
  //   return {
  //     checked: false,
  //   }
  // },
  methods: {
    // deleteTodo() {
    //   this.$store.dispatch('deleteTodo', this.todo)
    // },
    // updateTodoStatus() {
    //   this.$store.dispatch('updateTodoStatus', this.todo)
    // }
    ...mapActions([
      'deleteTodo',
      'updateTodoStatus',
      "changeCheckStatus",
    ])
  }
}
</script>

<style>
.is-completed {
  text-decoration: line-through;
}

.pointer {
  cursor: grab;
}
</style>