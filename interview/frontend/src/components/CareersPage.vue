<template>
  <div>
    <v-layout wrap fill-height>
      <v-flex xs12>
        <v-layout wrap justify-center pa-5> 
          <v-flex xs3>
        <v-card>
          <v-card-title>Submitted Data:</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item-group v-if="submittedData">
                <v-list-item v-for="(value, key) in submittedData" :key="key">
                  <v-list-item-content>
                    <v-list-item-title>{{ key }}:</v-list-item-title>
                    <v-list-item-subtitle>{{ value }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
        </v-layout>
      </v-flex>
      
    </v-layout>
  </div>
</template>

<script>
export default {
  computed: {
    submittedData() {
      const data = this.$store.getters.getJobData;
      console.log('Submitted Data:', data); // Add this line to log the data
      return data;
    },
  },
};
</script>

