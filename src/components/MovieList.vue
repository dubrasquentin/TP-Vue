<template>

  <div class="container">
      <ul class="nav justify-content-center">
          <li class="nav-item">
              <img src="../assets/logo.png" alt="">
          </li>
      </ul>
      <div class="banner">
          <h4>Les Films</h4>
          <nav class="navbar mb-3 navbar-light bg-light justify-content-between">
              <router-link class="btn btn-outline-warning" :to="{ name:'MovieAdd'}">Ajouter</router-link>
              <form class="form-inline">
                  <router-link :to="{ name:'MovieSearch'}"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></router-link>
              </form>
          </nav>
      </div>
      <div class="card-deck mb-4" v-for="movie in movies" key="movie.id">
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
//script
<script>
  export default {
    computed: {
      movies () {
        return this.$store.getters.getMovies
      }
    },
    methods: {
      onLoadMovie (id) {
        this.$router.push('/movies/' + id)
      }
    }
  }
</script>