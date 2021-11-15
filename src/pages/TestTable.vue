<template>
  <div class="app">
    <div class="container">
      <table>
        <caption>
          List
        </caption>
        <tr @keypress.enter="addNewNote">
          <td>
            <input
              class="input-main"
              type="text"
              placeholder="add new name"
              v-model="title"
            />
          </td>
          <td>
            <input
              class="input-main"
              type="text"
              placeholder="add new description"
              v-model="body"
            />
            <button 
              class="btn__add" 
              @click="addNewNote"
              >Add 
            </button>
          </td>
        </tr>
        <tr v-for="(post, idx) in posts" :key="idx">
          <td>
            <input 
              type="text" 
              :disabled="post.disabled" 
              v-model="post.title"
            />
          </td>
          <td>
            <input 
              type="text" 
              :disabled="post.disabled" 
              v-model="post.body" 
            />

            <button 
              class="btn__delete" 
              @click="removeNote(idx)"
              >Delete
            </button>

            <button 
              class="btn__edit" 
              @click="changeNote(idx)"
              >{{ posts[idx].disabled ? "Edit" : "Save" }}
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { title: "Ivan", body: "Shansonov", disabled: true },
        { title: "Sergei", body: "Laboda", disabled: true },
        { title: "Igor", body: "Grachenko", disabled: true },
      ],
      title: "",
      body: "",
      // disabled: true
    };
  },
  methods: {
    addNewNote() {
      if (this.title && this.body) {
        const newNote = {
          title: this.title,
          body: this.body,
          disabled: true
        };
        this.posts.push(newNote);
        this.title = "";
        this.body = "";
      }
    },
    removeNote(idx) {
      this.posts.splice(idx, 1);
    },
    changeNote(idx) { 
      this.posts[idx].disabled = !this.posts[idx].disabled
      console.log(idx)
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 35px;
}
caption {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: darkslategray;
}
input {
  padding: 10px;
  width: 300px;
  border: 2px solid teal;
  border-radius: 50px;
  text-align: center;
  font-size: 20px;
  background: #fff;
}
input:disabled{
  background: lavender;
}
button {
  padding: 10px;
  width: 80px;
  border: 2px solid teal;
  border-radius: 50px;
  text-align: center;
  font-size: 20px;
  background: none;
}
.btn__delete {
  background: red;
}
.btn__edit {
  background: dodgerblue;
}
.btn__add {
  background: none;
  transition: all 0.5s;
}
.btn__add:hover {
  background: fuchsia;
}
.input-main {
  margin-bottom: 45px;
  border: 2px solid dimgray;
}
</style>