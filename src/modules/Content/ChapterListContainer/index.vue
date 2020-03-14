<template>
	<v-card
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
	        	<v-list-item-content>
	            	<v-list-item-title> {{ chapter.title }} </v-list-item-title>
	        	</v-list-item-content>
	        </template>

	        <!-- Chapter Sections -->
	        <v-list-item
	        	v-for="subChapter in chapter.sections"
	        	:key="subChapter.title"
	        	@click=""
	        >
	          	<v-list-item-content>
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

export default {
	name: 'ChapterListContainer',
    data () {
      return {
      }
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
.ps {
  height: 80vh;
}
</style>