<script setup lang="ts">
import { ref } from 'vue'
const actives= ref(['1'])
</script>

<template>
<div>
  <h1>按钮</h1>
  <CrButton plain type="primary">测试按钮</CrButton>
  <CrButtonGroup>
    <CrButton>测试按钮1</CrButton>
    <CrButton>测试按钮2</CrButton>
    <CrButton>测试按钮3</CrButton>
  </CrButtonGroup>
  <h1>Icon</h1>
  <CrIcon icon="spinner" spinner></CrIcon>
  <CrIcon  icon='edit'/>
  <h1>折叠面板</h1>
  <CrCollapse v-model="actives">
    <CrCollapseItem title="测试1" name="1">
      <div>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis molestias animi eligendi delectus nam est ipsa inventore minus hic maiores, assumenda totam recusandae labore iusto obcaecati magnam, voluptas, earum reprehenderit.

      </div>
    </CrCollapseItem>
    <CrCollapseItem title="测试2" name="2">
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus asperiores ex vel totam, voluptatum at eum repellendus consequatur obcaecati ad iure cumque suscipit delectus cupiditate facere? Eum beatae neque eaque!</div>
    </CrCollapseItem>
  </CrCollapse>
</div>
</template>

<style scoped>
</style>
