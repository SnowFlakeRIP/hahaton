<template>
<div class="wrapper-user">
  <div class="user-photo"><img :src="require(`static/${users[0].photo}`)" alt=""></div>
  <div class="user-name"><p>{{users[0].name}} {{users[0].fname}}</p></div>
</div>
</template>

<script>
export default {
  name: "userProfile",
  data() {
    return{
      users: [
        {id: "1", name:"Alex", fname: "Shm" , photo:"icon.png"},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-user {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 20px;
}
.user-photo {
  margin-right: 10px;
  width: 50px;
  height: 50px;
  border: 1px solid grey;
  border-radius: 50%;

  img {
    line-height: 50px;
  }
}
</style>
