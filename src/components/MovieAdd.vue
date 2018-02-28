<template>
    <div class="container mt-5">
        <h4>Nouveau Film</h4>
        <div class="row">
            <div class="col-sm-5">
                <form @submit.prevent="onaddMovie">
                    <label for="title">Titre :</label>
                    <input class="form-control" v-model="title" id="title">

                    <label for="date">Date de sortie :</label>
                    <input class="form-control" v-model="year" id="date">

                    <label for="genre">Genre :</label>
                    <input class="form-control" v-model="kind" id="genre">

                    <label for="langue">Langue :</label>
                    <input class="form-control" v-model="language" id="langue">

                    <label for="realisateur">Réalisateur :</label>
                    <input class="form-control" v-model="reaName" id="realisateur">

                    <label for="dateN">Date de naissance :</label>
                    <input class="form-control" v-model="reaDate" id="dateN">

                    <label for="Natio">Nationalité :</label>
                    <input class="form-control" v-model="reaNatio" id="Natio">

                    <label for="poster">Affiche :</label>
                    <input class="form-control" v-model="poster" id="poster">

                    <button class=" mt-3 btn btn-outline-success" type="submit">Enregistrer</button>
                </form>
            </div>
            <div class="col-sm-5">
                <img src="../assets/dead.jpg" alt="">
            </div>
        </div>
    </div>

</template>
<script>
export default{
  data () {
    return {
      title: '',
      year: '',
      language: '',
      kind: '',
      reaName: '',
      reaDate: '',
      reaNatio: '',
      poster: ''
    }
  },
  computed: {
  },
  methods: {
    onaddMovie () {
      const movieData = {
        title: this.title,
        year: this.year,
        language: this.language,
        kind: this.kind,
        reaName: this.reaName,
        reaDate: this.reaDate,
        reaNatio: this.reaNatio,
        poster: this.poster
      }
      this.$store.dispatch('addMovie', movieData)
      this.$router.push('/')
    }
  }
}
</script>
