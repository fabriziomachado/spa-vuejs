
<script>
import http from '@/service/http'

export default {
  name: 'Categories',
  data () {
    return {
      categories: [],
      errors: []
    }
  },
  async mounted () {
    const response = await http.get('/categoria')

    if (response != null) {
      this.categories = response.data.categories
    }
  }
}
</script>

<template>
  <div>
    <h2>
      <div class="row">
        <div class="col-md-6">
          Categorias
        </div>
        <div class="col-md-6 text-right">
          <button>nova</button>
          <button>voltar</button>
        </div>
      </div>
    </h2>

    <transition name="slide-fade">
      <router-view></router-view>
    </transition>

    <div class="row">
      <div class="col-sm-6 col-md-4"
        v-for="category in categories"
        :key="category.id">
        <div class="thumbnail">
          <div class="caption">
            <h3>{{ category.name }}</h3>
            <p class="text-right">
              <router-link class="btn btn-default btn-xs" :to="{}">editar</router-link>
              <a href="#" class="btn btn-default btn-xs" role="button">excluir</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
