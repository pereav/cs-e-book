<template>
	<v-card dark>
		<v-list dense>
			<v-list-item-title> <b>COMPLETED</b> </v-list-item-title>

			<v-list-item
				v-for="chapter in chapters"
				:key="chapter.title"
			>
				{{ chapter.title }} : <v-card light> {{ chapter.progressPercentage }} </v-card>
			</v-list-item>

		</v-list>	
	</v-card>	
</template>

<script>
import { CHAPTERS } from '@/constants/chapters'

export default {
	name: 'ChapterProgressContainer',
	data: () => ({

	}),
	computed: {
		chapters: (v) => {
			return CHAPTERS.map(v => {
				let obj = v;
				v.progressPercentage = '0%'

				return v;
			})
		}
	}
}
</script>

<style>
</style>
