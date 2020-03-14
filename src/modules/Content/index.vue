<template>
	<div>
		<page-header/>
		<v-card
			width="100%"
		>
			<v-layout row wrap>
				<v-flex class="content-col" xs2>
					<chapter-list-container/>	
				</v-flex>	
				<v-flex class="content-col" xs8>
					<page-content-container/>	
				</v-flex>
				<v-flex class="content-col" xs2>
					<chapter-progress-container/>	
				</v-flex>	
			</v-layout>	
		</v-card>	
	</div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import ChapterListContainer from './ChapterListContainer/'
import PageContentContainer from './PageContentContainer/'
import ChapterProgressContainer from './ChapterProgressContainer/'
import { CHAPTERS } from '@/constants/chapters/'

export default {
	name: 'Content',
	components: {
		PageHeader,
		ChapterListContainer,
		PageContentContainer,
		ChapterProgressContainer
	},
	data: () => ({
	}),
	mounted () {
		console.log('CHAPTERS ', CHAPTERS)
	}
}
</script>

<style>
.content-col > .v-card{
	height: 90vh!important;
}
</style>	