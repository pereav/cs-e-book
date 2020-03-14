<template>
    <v-list>
      <template v-for='node in nodes'>
          <v-list-group
            v-if='node.sub && node.sub.length'
            v-model='node.active'
          >
            <v-list-item @click='changeContentView(node)' slot='activator'>
                <v-list-item>
                  <v-list-item-title> <pre> {{node.title}} </pre> </v-list-item-title>
                </v-list-item>  
            </v-list-item>
            <list-container class='py-0 pl-3' :nodes='node.sub'/>
          </v-list-group>
          <v-list-item @click='changeContentView(node)' v-else>
              <v-list-item>
                <v-list-item-title> <pre> {{node.title}} </pre> </v-list-item-title>
              </v-list-item>
          </v-list-item>
      </template>
    </v-list>
</template>
<script>
import ListContainer from './'
import { bus } from '@/main.js'

export default {
	name: 'ListContainer',
  components: {
    ListContainer
  },
  props: [
    'nodes'
  ],
  methods: {
  	changeContentView (content) {
  		bus.$emit('changeContentView', content)
  	},
  }
}
</script>	

<style>
.has-children {
  margin-left: -24px!important;
}
.v-list-item__content > .v-list-item__title {
	cursor: pointer!important;
}
</style>