<template>
  <h2>{{ JSON.stringify(data) }}</h2>
</template>

<script setup lang="ts">

import {useRequest} from "vue-request";
import axios from "axios";
import {ref} from "vue";

const getUser = () =>
{
  return new Promise(resolve =>
  {
    setTimeout(() =>
    {
      resolve("张三");
    }, 1000);
  });
};
const name = ref('李四');
const {data, loading, mutate} = useRequest(getUser);

setTimeout(() =>
{
  mutate(name.value);
}, 3000);

</script>

<style scoped>

</style>
