<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>  
    <strong>Date</strong>: {{ date }}
  </div>
  
  <format-date :date="date"></format-date>
  <format-date format="date">{{ date }}</format-date>
  <format-date format="time">{{ date }}</format-date>
  <format-date format="short">{{ date }}</format-date>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      date: '2021-09-09 19:11:00'
    }
  }
}
</script>

<style>
time {
  display: block;
}
</style>
