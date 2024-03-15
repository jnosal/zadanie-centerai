<template>
  <div class="shortened-link">
    <div class="shortened-link__result">
      <div class="shortened-link__result-text">
        <div v-if="source" class="shortened-link__source">
          {{ source }}
        </div>
        {{ url }}
      </div>
      <div class="shortened-link__result-copy">
        <img
          class="shortened-link__result-image"
          src="@/assets/images/file-copy.svg"
        />
      </div>
    </div>
  </div>
</template>

<script src="./shortened-link.js"></script>
<style src="./shortened-link.scss" lang="scss"></style>
