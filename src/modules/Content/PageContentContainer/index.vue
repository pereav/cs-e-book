<template>
	<v-card flat id="content-page-container">
	  	<perfect-scrollbar>

	  		<v-card flat v-html="contentBody.description"/>
			<v-card flat v-html="contentBody.content"/>

	  	</perfect-scrollbar>

		<navigation-toolbar class="nav-tbar"/>
	</v-card>		
</template>

<script>
import NavigationToolbar from '@/components/NavigationToolbar'
import { CHAPTERS } from '@/constants/chapters/'
import { bus } from '@/main.js'

export default {
	name: 'PageContentContainer',
	components: {
		NavigationToolbar
	},
	data: () => {
		return {
			contentBody: CHAPTERS[0]
		}
	},
	mounted () {
		bus.$on('changeContentView', (data) => {
			this.contentBody = data;
		})
	},
	beforeDestory () {
		bus.$off('changeContentView');	
	}
}
</script>
<style>
#content-page-container .ps {
  height: 60vh;
}
#content-page-container {
	position: relative;
	padding: 50px 50px;
	font-size: 1.5rem;
}
.nav-tbar {
	position: absolute;
	bottom: 10%;
}
</style>
