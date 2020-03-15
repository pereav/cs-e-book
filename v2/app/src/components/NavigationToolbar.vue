<template>
	<v-card flat width="88%">
		<v-btn dark> PREV </v-btn>
		<v-btn
			:dark="!isDisabled" 
			:disabled="isDisabled"> NEXT </v-btn>				
	</v-card>	
</template>	

<script>
export default {
	name: 'NavigationToolbar',
	props: [
		'next_content_body',
	],
	computed: {
		isDisabled() {
			return this.next_content_body.read_status && this.next_content_body.read_status === 'Disabled'
		}
	}
}
</script>