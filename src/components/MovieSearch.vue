<template>
    <div class="mt-5 container">
        <h4>Recherche</h4>
        <nav class="navbar mb-3 navbar-light bg-light justify-content-between">
            <form @submit.prevent="searchM">
                <input v-model="title" id="titre" class="form-control mr-sm-2" type="search" placeholder="Titre" >
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Rechercher</button>
            </form>
        </nav>

        <div class="card-deck mt-4" v-for="movie in tab" v-bind:key="movie.id">
            <div class="card" >
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-3">
                            <img class="img-fluid" :src="movie.poster" style="width: 200px" alt="Card image cap">
                        </div>
                        <div class="col-sm-4">
                            <h5 class="card-title">{{movie.title}}</h5>
                            <p class="card-text">Genre : {{movie.kind}}</p>
                            <p class="card-text">Date : {{movie.year}}</p>
                            <p class="card-text">Langue : {{movie.language}}</p>
                            <h5 class="card-text">Réalisateur : </h5>
                            <p class="card-text">{{movie.reaName}} {{movie.reaDate}}</p>
                            <p class="card-text">{{movie.reaNatio}} </p>

                        </div>
                    </div>

                </div>
                <div class="card-footer ">
                    <router-link class="btn btn-outline-primary"  :to="{ name:'Movie', params:{ id: movie.id }}">Voir</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
export default {
  data () {
    return {
      title: '',
      tab: []
    }
  },
  computed: {
    searchM () {
      var result = this.$store.getters.getMovieBySearch(this.title)
      if (result.length > 0) {
        this.tab = result
        return result
      } else {
        return null
      }
    }
  }
}
</script>
