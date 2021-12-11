<template>
  <section>
    <div class="show-case__wrap">
      <div class="btn-box">
        <div v-for="howmarch in howmarchs" :key="howmarch.id" class="btn">
          <div class="button">{{ howmarch.value }}</div>
        </div>
      </div>
      <div class="input-box">
        <div class="box">
          <label>Другая сумма</label> <input v-model="otherSum" type="number" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      howmarchs: [
        { id: "1", value: "10" },
        { id: "2", value: "15" },
        { id: "3", value: "20" },
        { id: "4", value: "30" },
        { id: "5", value: "50" },
        { id: "6", value: "100" },
      ],
      otherSum: 0,
    };
  },
};
</script>
<style lang="scss" >
.btn-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .button {
      padding: 15px 40px;
      cursor: pointer;
      border-radius: 20px;
      border: none;
      background-color: gray;
      transition: all 0.9s ease-in-out;
      color: white;
    }
  }
  .button:hover {
    background-color: rgb(204, 204, 204);
    color: black;
    transition: all 0.9s ease-in-out;
  }
}
</style>