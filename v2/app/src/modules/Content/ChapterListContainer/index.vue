<template>
	<v-card
		id="chapter-list-container"
	  	dark
	    max-width="500"
  	>
  	<perfect-scrollbar>
    <list-container :nodes="chaptersList"/>

<!--     <v-list>
    	<v-list-group
	        v-for="chapter in chaptersList"
	        :key="chapter.title"
	        v-model="chapter.active"
      	>
	        <template v-slot:activator>
	        	<v-list-item-content
					@click="changeContentView(chapter)"
	        	>
	            	<v-list-item-title> {{ chapter.title }} </v-list-item-title>
	        	</v-list-item-content>
	        </template>

	        <v-list-item
	        	v-for="subChapter in chapter.sections"
	        	:key="subChapter.title"
	        >
	          	<v-list-item-content
		        	@click="changeContentView(subChapter)"
	          	>
	            	<v-list-item-title> <pre> {{ subChapter.title }} </pre> </v-list-item-title>
	          	</v-list-item-content>
	        </v-list-item>
	        
      	</v-list-group>
    </v-list> -->
	</perfect-scrollbar>
  </v-card>
</template>
<script>
import ListContainer from './ListContainer'
import { CHAPTERS } from '@/constants/chapters/'
import { bus } from '@/main.js'

export default {
	name: 'ChapterListContainer',
  components: {
    ListContainer
  },
    data () {
      return {
      }
    },
    mounted () {

    },
    beforeDestroy () {

    },
    watch: {
    	chaptersList: (v) => {
    		console.log('CHAPTERS ', v)
    	}
    },
    computed: {
    	chaptersList: () => {
    		return CHAPTERS.map(v => {
    			let obj = v;
    			v.active = true;

    			return obj
    		})
    	}
    }
  }
</script>	

<style>
#chapter-list-container .ps {
  height: 80vh;
}
</style>