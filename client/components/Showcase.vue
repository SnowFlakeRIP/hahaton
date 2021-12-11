<template>
  <section>
    <div class="container">
      <userProfile />
      <div class="showcase">
        <h1>ОСТАВИТЬ ЧАЕВЫЕ</h1>
        <p>Введите сумму:</p>
        <div class="showcase__box">
          <button class="showcase__box-btn" @click="reduce()">-</button>
          <input type="text" v-if="count === '0 ₽'">
          <input type="text" v-model="count" v-else>
          <button class="showcase__box-btn" @click="add()">+</button>
        </div>
        <div class="showcase__tags">
          <button v-for="item in items" :key="item.id" @click="chooseNumber(item.number)">{{item.number}}</button>
        </div>
        <div class="showcase__options">
          <p>Оплатить</p>
          <div class="cards" v-for="option in options" :key="option.id">
            <img class="paycards" :src="require(`static/${option.img}`)" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "showcase",
  data() {
    return {
      count: '0 ₽',
      items: [
        {id: 1, number: '100'},
        {id: 2, number: '150'},
        {id: 3, number: '200'},
        {id: 4, number: '300'},
        {id: 5, number: '500'}
      ],
      options: [
        {id: 1, img: 'google-pay-brands.svg'},
        {id: 2, img: 'apple-pay-brands.svg'},
        {id: 3, img: 'cc-mastercard-brands.svg'},
      ]
    }
  },
  methods: {
    chooseNumber(num) {
      this.count = num + ' ₽'
    },
    add() {
      this.count = Number(this.count.split('₽')[0].trim()) + 50 + ' ₽'
    },
    reduce() {
      if (this.count !== '0 ₽') {
        this.count = Number(this.count.split('₽')[0].trim()) - 50 + ' ₽'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.showcase {
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    text-align: center;
    margin-bottom: 5px;
    color: gray;
  }

  &__box {
    display: flex;
    justify-content: center;

    &-btn {
      display: flex;
      align-items: center;
      font-size: 20px;
      padding: 5px 10px;
      cursor: pointer;
      color: #fff;
      border: none;
      outline: none;
      background-color: green;
    }
  }

  input {
    font-size: 18px;
    outline: none;
    text-align: center;
  }

  &__tags {
    display: flex;
    width: 272px;
    justify-content: space-between;
    margin: auto auto;
    padding-top: 10px;
    padding-bottom: 30px;

    button {
      font-size: 14px;
      width: 18%;
      color: grey;
      height: 30px;
      cursor: pointer;
      border: none;
      border-radius: 8px;
    }
  }

  &__options {

    div {
      display: flex;
      justify-content: center;
    }

    img {
      width: 272px;
      max-height: 60px;
      border: 1px solid lightgray;
    }
    .paycards{
      background-color: #FBD840;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.9s ease-in-out;
      outline: none;
      box-shadow: 3px 3px 3px #c1c5d5, -3px -3px 3px #363636;
    }
    .paycards:hover{
      background-color: #FBD800;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.9s ease-in-out;
    }
    .cards{
      margin-bottom: 20px;
    }
    .cards:last-child{
      margin-bottom: 0;
    }
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
