<template>
  <div class="container mt-5">
    <div class="row">
        <div class="col-sm-4">
      <img class="card-img-top" :src="movie.poster" alt="Card image cap">
    </div>
      <div class="col-sm-8">
        <h2>  {{ movie.title }}</h2>
        <table class="table">
          <thead>
          <tr>
            <th>Date de sortie :</th>
            <th>Réalisateur :</th>
            <th>Genre :</th>
            <th>Langue :</th>
            <th>Note :</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{ movie.year }}</td>
            <td>{{ movie.reaName }}</td>
            <td>{{ movie.kind }}</td>
            <td>{{ movie.language }}</td>
            <td>{{ note }}</td>
          </tr>
          </tbody>
        </table>
        <router-link class="btn btn-outline-primary" :to="{ name:'MovieEdit', params:{ movie: this.movie }}">Modifier</router-link>
        <button class="btn btn-outline-danger" v-on:click="delMovie">Supprimer</button>
        <div class="row">
          <div class=" mt-3 col-sm-4">
            <form @submit.prevent="addNote">
              Notez : <select class="mt-3 form-control" v-model="selected">
                <option disabled value="">Note</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <button class=" mt-3 btn btn-outline-success" type='submit'>Valider</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-new */

  export default {
    computed: {
      movie () {
        return this.$store.getters.getMovieById(this.$route.params.id)
      },
      note () {
        var note = this.$store.getters.getNoteByMovieId(this.$route.params.id);
        if(note == null)
        {
          return 'Pas de note pour ce film';
        }
        else{
          return note ;
        }
      }
    },
    methods: {
      delMovie: function () {
        this.$store.dispatch('delMovie', {id :this.$route.params.id})
        this.$router.push('/')
      },
      addNote: function () {
        const note = this.selected
        this.$store.dispatch('addNote', {id: this.$route.params.id, note: note})
      }
    }
  }
</script>