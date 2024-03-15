<template>
  <div class="page-home">
    <div class="page-home__container">
      <div class="page-home__logo">
        <img class="page-home__logo-image" src="@/assets/images/logo.svg" />
      </div>
      <h3 class="page-home__title">Short link</h3>
      <z-input
        v-model="fields.link"
        placeholder="Type your link..."
        class="page-home__input"
      >
        <template v-slot:label> Link to shortcut </template>
      </z-input>
      <z-button class="page-home__button" :disabled="!isValid"
        >Shorten it</z-button
      >
      <shortened-link
        :url="result"
        v-if="result"
        class="page-home__result"
      ></shortened-link>
    </div>
    <div class="page-home__last-links">
      <h4 class="page-home__last-links-title">Last links</h4>
      <div class="page-home__last-links-list">
        <shortened-links-list></shortened-links-list>
      </div>
    </div>
  </div>
</template>

<script src="./page-home.js"></script>
<style src="./page-home.scss" lang="scss"></style>
