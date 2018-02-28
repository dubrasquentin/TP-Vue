import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    loadeMovies: [
      {
        id: 0,
        title: 'Life',
        year: 2017,
        language: 'Anglais',
        reaName: 'Daniel Espinosa',
        reaDate: 1977,
        reaNatio: 'Suédoise',
        kind: 'Science-fiction',
        poster: 'http://fr.web.img2.acsta.net/r_1280_720/pictures/17/02/15/09/25/520233.jpg',
        notes: []
      },

      {
        id: 1,
        title: 'The passenger',
        year: 2018,
        language: 'Anglais',
        reaName: 'Jaume Collet-Serra',
        reaDate: 1974,
        reaNatio: 'Espagnol',
        kind: 'Drame',
        poster: 'http://fr.web.img6.acsta.net/c_215_290/pictures/17/12/05/14/02/5796977.jpg',
        notes: []

      },
      {
        id: 2,
        title: 'Le Labyrinthe',
        year: 2018,
        language: 'Anglais',
        reaName: 'Wes Ball',
        reaDate: 1980,
        reaNatio: 'Américain',
        kind: 'Fantasy',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Fo-MxkUkt3KBeKVK-mwmz16A-8yDeymOVz9bS7PYMrnMeaTD',
        notes: []

      }
    ]
  },
  getters: {
    getMovies (state) {
      return state.loadeMovies
    },

    getMovieById (state) {
      return (movieId) => {
        return state.loadeMovies.find((movie) => {
          return movie.id === movieId
        })
      }
    },
    // Recherche d'un film avec son nom
    getMovieBySearch: state => text => {
      var movies = []
      for (var i = 0; i < state.loadeMovies.length; i++) {
        if (state.loadeMovies[i].title.includes(text)) {
          movies.push(state.loadeMovies[i])
        }
      }
      return movies
    },
    // Getters des notes pour un films + Moyenne
    getNoteByMovieId: (state) => (id) => {
      var movie = state.loadeMovies.find(movies => movies.id === id)
      if (movie.notes.length === 0) {
        return null
      } else {
        var sum = 0
        for (var i = 0; i < movie.notes.length; i++) {
          sum += parseInt(movie.notes[i], 10)
        }
        return sum / movie.notes.length
      }
    }
  },
  mutations: {
    editMovie (state, movie) {
      var film = state.loadeMovies.find(loadeMovies => loadeMovies.id === movie.id)
      film.title = movie.title
      film.year = movie.year
      film.language = movie.language
      film.reaName = movie.reaName
      film.reaNatio = movie.reaNatio
      film.reaDate = movie.reaDate
      film.kind = movie.kind
      film.poster = movie.poster
    },
    addMovie (state, payload) {
      state.loadeMovies.push(payload)
    },
    delMovie (state, payload) {
      var removeIndex = state.loadeMovies.map(function (item) {
        return item.id
      }).indexOf(payload)
      state.loadeMovies.splice(removeIndex, 1)
    },
    addNote (state, payload) {
      const movie = payload.movie
      movie.notes.push(payload.note)
    }
  },
  actions: {
    addMovie ({commit}, payload) {
      const movie = {
        id: this.state.loadeMovies[this.state.loadeMovies.length - 1].id + 1,
        title: payload.title,
        year: payload.year,
        language: payload.language,
        kind: payload.kind,
        reaName: payload.reaName,
        reaDate: payload.reaDate,
        reaNatio: payload.reaNatio,
        poster: payload.poster,
        notes: []
      }
      commit('addMovie', movie)
    },
    delMovie ({ commit }, payload) {
      commit('delMovie', payload.id)
    },
    addNote ({commit}, payload) {
      const movieToNote = this.state.loadeMovies.find(movies => movies.id === payload.id)
      commit('addNote', {movie: movieToNote, note: payload.note})
    }
  }
})
