<template>
  <div>
    <div class="d-flex justify-content-center">
      <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping">↪</span>
        <input type="text"
        class="form-control"
        placeholder="할 일을 입력해주세요"
        aria-describedby="addon-wrapping"
        v-model.trim="todoTitle"
        @keyup.enter="createTodo"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      todoTitle: '',
    }
  },
  methods: {
    createTodo() {
      const todoItem = {
        title: this.todoTitle,
        isCompleted: false,
        checked: false,
        date: new Date().getTime(),
      }
      if (todoItem.title) {
        this.$store.dispatch('createTodo', todoItem)
      }
      this.todoTitle = ''
    }
  }
}
</script>

<style>

</style>