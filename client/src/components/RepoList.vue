<template>
  <div>
    <v-card v-for="repo in msg" :key="repo" tile link>
      <v-card-text :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">{{ repo }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    async getRepos() {
      const response = await fetch('/v2/_catalog');
      this.msg = await response.json();
    }
  },
  beforeMount(){
    this.getRepos()
  },
  name: 'RepoList',
  props: {
    msg: {
      type: Array,
      default: function() {
        return [''];
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
