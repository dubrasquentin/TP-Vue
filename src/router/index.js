import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Movie from '@/components/Movie'
import MovieList from '@/components/MovieList'
import MovieEdit from '@/components/MovieEdit'
import MovieAdd from '@/components/MovieAdd'
import MovieSearch from '@/components/MovieSearch'

Vue.use(Router)
Vue.use(Vuetify)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'MovieList',
      component: MovieList
    },
    {
      path: '/movies/:id',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/movieEdit',
      name: 'MovieEdit',
      component: MovieEdit
    },
    {
      path: '/movieAdd',
      name: 'MovieAdd',
      component: MovieAdd
    },
    {
      path: '/search',
      name: 'MovieSearch',
      component: MovieSearch
    }
  ]
})
