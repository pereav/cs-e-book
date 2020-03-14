<template>
	<v-card
	  	dark
	    max-width="500"
  	>
    <v-list>
    	<v-list-group
	        v-for="item in items"
	        :key="item.title"
	        v-model="item.active"
      	>
      		<!-- Chapter Title -->
	        <template v-slot:activator>
	        	<v-list-item-content>
	            	<v-list-item-title> <b>{{ item.title }}</b> </v-list-item-title>
	        	</v-list-item-content>
	        </template>

	        <!-- Chapter Sections -->
	        <v-list-item
	        	v-for="subItem in item.items"
	        	:key="subItem.title"
	        >
	          	<v-list-item-content>
	            	<v-list-item-title> {{ subItem.title }} </v-list-item-title>
	          	</v-list-item-content>
	        </v-list-item>
	        
      	</v-list-group>
    </v-list>
  </v-card>
</template>
<script>
  export default {
	name: 'ChapterListContainer',
    data () {
      return {
        items: [
          {
            title: 'Chapter 1',
            active: true,
            items: [
              { title: 'Section 1' },
            ],
          },
          {
            title: 'Chapter 2',
            active: true,
            items: [
              { title: 'Section 1' },
              { title: 'Section 2' },
              { title: 'Section 3' },
            ],
          },
          {
            title: 'Chapter 3',
            active: true,
            items: [
              { title: 'Section 1' },
            ],
          },
          {
            title: 'Chapter 4',
            active: true,
            items: [
              { title: 'Section 1' },
            ],
          },
          {
            title: 'Chapter 5',
            active: true,
            items: [
              { title: 'Section 1' },
            ],
          },
          {
            title: 'Chapter 6',
            active: true,
            items: [
              { title: 'Section 1' },
            ],
          },
          {
            title: 'Chapter 7',
            active: true,
            items: [
              { title: 'Section 1' },
            ],
          },
        ],
      }
    },
  }
</script>	