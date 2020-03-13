<template>
	<v-card flat id="content-page-container">
		
		<v-card flat>
			{{ sampleText }}
		</v-card>	

		<navigation-toolbar class="nav-tbar"/>
	</v-card>		
</template>

<script>
import NavigationToolbar from '@/components/NavigationToolbar'

export default {
	name: 'PageContentContainer',
	components: {
		NavigationToolbar
	},
	data: () => {
		return {
			sampleText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."			
		}

	}
}
</script>
<style>
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
