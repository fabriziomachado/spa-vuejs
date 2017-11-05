
<script>
  import localforage from 'localforage'
  import http from '@/service/http'
  export default {
    name: 'Authentication',
    mounted () {
      console.log(this.$route)
      // this.$route.query.test
      if (window.location.search.indexOf('expired=true') > -1) {
        this.$bus.$emit('display-alert', {
          type: 'error',
          message: 'Token expirado. Favor logar novamente!'
        })
      }
    },
    data () {
      return {
        email: 'fabrizio@unesc.net',
        password: '123456'
      }
    },
    methods: {
      // async
      async login () {
        try {
          const { email, password } = this

          // await
          const response = await http.post(
            'https://restify-fcm.c9users.io/autenticacao',
            { email, password }
          )

          const { token } = response.data
          console.log(token)
          localforage.setItem('token', token).then(() => {
            this.$router.push({ name: 'index' })
          })
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>

<template>
  <div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <form class="well top25" @submit.prevent="login">
          <div class="form-group">
            <label class="control-label">E-mail</label>
            <input v-model="email" type="email" class="form-control">
          </div>
          <div class="form-group">
            <label class="control-label">Password</label>
            <input v-model="password" type="password" class="form-control">
          </div>
          <div class="text-right">
            <button class="btn btn-primary btn-xs" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .top25 {
    margin-top: 25px;
  }
</style>
