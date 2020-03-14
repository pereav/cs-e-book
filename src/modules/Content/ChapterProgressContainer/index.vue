<template>
	<v-card dark>
		<v-list dense>
			<v-list-item-title> <b>COMPLETED</b> </v-list-item-title>

			<v-list-item
				v-for="chapter in chapters"
				:key="chapter.name"
			>
				{{ chapter.name }} : <v-card light> {{ chapter.progressPercentage }} </v-card>
			</v-list-item>

		</v-list>	
	</v-card>	
</template>

<script>
export default {
	name: 'ChapterProgressContainer',
	data: () => ({
		chapters: [
			{
				name: 'Chapter 1',
				progressPercentage: '0%'
			},
			{
				name: 'Chapter 2',
				progressPercentage: '0%'
			},
			{
				name: 'Chapter 3',
				progressPercentage: '0%'
			},
			{
				name: 'Chapter 4',
				progressPercentage: '0%'
			},
		]
	})
}
</script>

<style>
</style>
