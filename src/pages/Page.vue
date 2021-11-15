<template>
  <div class="page">
      <h1
        class="main-title"
        :style="{ color: inputValue.length < 5 ? 'red' : 'blue' }"
      >
        {{ title }}
      </h1>
      <div class="form">
        <input type="text" v-model="inputValue" @keypress.enter="addNewNote" />
      </div>
      <button class="add-btn" @click="addNewNote">Add</button>
      <hr />
      <ul class="list" v-if="notes.length !== 0">
        <li
          class="list-item"
          v-for="(note, idx) in notes"
          :key="idx"
          :style="{ color: note.length < 5 ? 'red' : 'blue' }"
        >
          ({{ idx + 1 }}) {{ toUpperCase(note) }}
          <button class="delete-btn" @click="removeNote(idx)">Delete</button>
        </li>
        <hr />
        <li class="strong-item">
          <strong class="strong">How many notes: {{ notes.length }}</strong>
        </li>
      </ul>
      <div class="else" v-else>Dont any notes.Write it on.</div>
      <div class="div-value">inputValue: {{ inputValue }}</div>
      <hr />
      <h2 class="second-title">{{ titleSecond }}</h2>
      <button class="change-btn" @click="show = !show">ПОМЕНЯТЬ</button>
    </div>
</template>
  
<script>
export default {
  data() {
    return {
      title: "Deals",
      notes: ["Notes 1", "Notes 2"],
      inputValue: "",
      titleSecond: "",
      show: false,
    };
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
  // watch: {
  //   inputValue(value){
  //     if (value.length > 10) {
  //       this.inputValue = ''
  //     }
  //   }
  // },
  computed: {
    titleSecond: function () {
      if (this.show) {
        return "Пока";
      }
      return "Привет";
    },
  },
}
</script>

<style scoped>

</style>