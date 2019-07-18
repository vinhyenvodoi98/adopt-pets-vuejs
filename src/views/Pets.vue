<template>
  <div>
    <h1>{{pet().name}}</h1>
    <p>{{pet().age}}</p>
    <p>{{pet().breed}}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return { animal: {} };
  },
  computed: {
    // cats(){
    //   return this.$store.state.cats
    // }
    ...mapState(["cats", "dogs"])
  },
  methods: {
    pet() {
      const animal = this[this.$route.params.species][this.$route.params.id];
      return animal;
    }
  }
};
</script>