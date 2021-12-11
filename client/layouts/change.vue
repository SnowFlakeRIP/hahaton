<template>
  <div>
    <section class="section-showcase">
      <div class="modal__window">
        <div class="showcase__background"></div>
        <div class="window">
          <Nuxt />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" >
.section-showcase {
  position: relative;
}
.showcase__background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.7);
  z-index: 1;
}
.modal__window {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .window {
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    z-index: 2;
    max-width: 900px;
    max-height: 600px;
    width: 100%;
    height: 100%;
  }
}
</style>
