<template>
  <h3 v-if="student==null">暂无数据</h3>
  <h2 v-else>{{ JSON.stringify(student) }}</h2>
  <button @click="ready=!ready">更改ready</button>
  <h3>{{ ready }}</h3>
</template>

<script setup lang="ts">

import {useRequest} from "vue-request";
import axios from "axios";
import {computed, ref} from "vue";

interface Student
{
  id: number,
  name?: string,
  sex?: string,
  age?: number,
}

const ready = ref(false);

const {data, loading, error} = useRequest<Student>(() => axios.get('/api/student/10001'),
    {
      pollingInterval: 2000,
      pollingWhenHidden: true,
      pollingWhenOffline: true,
      ready: ready
    })

const student = computed(() =>
{
  return data?.value || null
})
</script>

<style scoped>

</style>
