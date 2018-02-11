<template>
    <div class="container mt-5">
        <h4>Film</h4>
        <table class="table">
            <thead>
                <tr>
                    <th>Titre :</th>
                    <th>Date de sortie :</th>
                    <th>Genre :</th>
                    <th>Langue :</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input class="form-control" v-model="movie.title" id="titre"></td>
                    <td><input class="form-control" v-model="movie.year" id="annee"></td>
                    <td><input class="form-control" v-model="movie.kind" id="genre"></td>
                    <td><input class="form-control" v-model="movie.language" id="langue"></td>
                </tr>
            </tbody>
        </table>
        <h4>Réalisateur</h4>
        <table class="table">
            <thead>
                <tr>
                    <th>Nom Réalisateur :</th>
                    <th>Date de naissance :</th>
                    <th>Nationalité :</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input class="form-control" v-model="movie.reaName" id="realNom"></td>
                    <td><input class="form-control" v-model="movie.reaDate" id="dateN"></td>
                    <td><input class="form-control" v-model="movie.reaNatio" id="natio"></td>
                </tr>
            </tbody>
        </table>
        <h4>Poster</h4>
        <table class="table">
            <th>Lien :</th>
            <tr><input class="form-control" v-model="movie.poster" id="poster"></tr>
        </table>
        <router-link :to="{ name:'MovieList'}"><button class="btn btn-outline-success" v-on:click="editMovie">Enregistrer</button></router-link>
    </div>
</template>
<script>
    export default {
      data: function () {
        return{
          movie: this.$route.params.movie
        }
      },
      methods: {

        editMovie: function () {
          var movieM = this.movie;
          this.$store.commit('editMovie', {movie : movieM	})
        }
      }
    }
</script>
