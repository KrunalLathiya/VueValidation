<template>
  <div class="container">
      <div class="panel panel-primary">
        <div class="panel-heading">
           Add Network
        </div>
        <div class="panel-body">
          <form @submit.prevent="validateBeforeSubmit" novalidate>
            <div :class="{'form-group': true, 'has-error': errors.has('name') }">
              <label>Network Name</label>
              <input type="text" v-validate="'required'"  :class="{ 'input form-control': true }" name="name"/>
              <p class="text-danger" v-if="errors.has('name')">{{ errors.first('name') }}</p>
            </div>
            <div :class="{'form-group': true, 'has-error': errors.has('bandwidth') }">
              <label>Network Bandwidth</label>
              <input type="text" v-validate="'required'" :class="{'input form-control': true }" name="bandwidth"/>
              <p class="text-danger" v-if="errors.has('bandwidth')">{{ errors.first('bandwidth') }}</p>
            </div>
            <div>
              <button :disabled="errors.any()"  class="btn btn-primary">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      bandwidth: ''
    }
  },
  computed: {
  isComplete() {
      return this.name && this.bandwidth;
    }
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          alert('From Submitted!');
          return;
        }
      });
    }
  }
}
</script>