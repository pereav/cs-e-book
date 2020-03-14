<template>
	<v-card
		id="chapter-list-container"
	  	dark
	    max-width="500"
  	>
  	<perfect-scrollbar>
    <v-list>
    	<v-list-group
	        v-for="chapter in chaptersList"
	        :key="chapter.title"
	        v-model="chapter.active"
      	>
      		<!-- Chapter Title -->
	        <template v-slot:activator>
	        	<v-list-item-content
					@click="changeContentView(chapter)"
	        	>
	            	<v-list-item-title> {{ chapter.title }} </v-list-item-title>
	        	</v-list-item-content>
	        </template>

	        <!-- Chapter Sections -->
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
    </v-list>
	</perfect-scrollbar>
  </v-card>
</template>
<script>
import { CHAPTERS } from '@/constants/chapters/'
import { bus } from '@/main.js'

export default {
	name: 'ChapterListContainer',
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
    },
    methods: {
    	changeContentView (subChapterContent) {
    		console.log('SUB CONTENT ', subChapterContent)
    		bus.$emit('changeContentView', subChapterContent)
    	},
    }
  }
</script>	

<style>
#chapter-list-container .ps {
  height: 80vh;
}
.v-list-item__content > .v-list-item__title {
	cursor: pointer!important;
}
</style>