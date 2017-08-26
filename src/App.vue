<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav" class="purple darken-4">
      <v-list dark class="purple darken-4">
      <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
      <v-list-tile-action>
        <v-icon dark>{{ item.icon }}</v-icon>
      </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <div class ="hidden-sm-and-up">
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      </div>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">MeetUP</router-link>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>

  </v-app>
</template>

<script>

  export default {
    data () {
      return {
        sideNav: false
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          {icon: 'face', title: 'sign up', link: '/signup'},
          {icon: 'lock_open', title: 'sign in', link: '/signin'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'supervisor_account', title: 'View Meet-ups', link: '/meetups'},
            {icon: 'room', title: 'Organize Meet-up', link: '/meet-up/new'},
            {icon: 'person', title: 'Profile', link: '/profile'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
