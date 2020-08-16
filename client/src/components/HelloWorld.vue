<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="getRepos">Get repo list</button>
</template>

<script>
export default {
  methods: {
    async getRepos() {
      const response = await fetch('/v2/_catalog');
      this.msg = await response.json();
    }
  },
  name: 'HelloWorld',
  props: {
    msg: {
      type: Array,
      default: function() {
        return ['kek'];
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
