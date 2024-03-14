<template>
  <div>
      <router-view v-slot="{ Component }">
        <transition name="z-transition-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
  </div>
</template>

<script src="./app.js"></script>
