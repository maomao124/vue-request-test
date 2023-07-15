<template>
  <h2>{{ JSON.stringify(data) }}</h2>
</template>

<script setup lang="ts">

import {useRequest, useRequestProvider} from "vue-request";
import axios from "axios";
import {computed} from "vue";

const getUser = (id: number, userName: string) =>
{
  return axios.get('api/user', {
    params: {
      id: id,
      name: userName,
    },
  });
};

const {data, run} = useRequest(getUser, {
  defaultParams: [10001, '张三'],
});

setTimeout(() =>
{
  run(10002, "李四")
}, 2000)

</script>

<style scoped>

</style>
