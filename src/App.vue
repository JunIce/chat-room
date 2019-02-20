<template>
  <div class="main-body">
    <div class="msg-main">
      <el-row class="message-view" v-for="(m, idx) in msgs" :key="idx"><el-col :span=4><div class="userhead"></div></el-col><el-col :span=20><div class="message-main">{{m}}</div></el-col></el-row>
    </div>

    <div  class="g-chat-input">
        <input type="text" placeholder="请输入内容" v-model="input" class="msg-input"/> 
        <el-button type="primary" @click="sendMsg">发送</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      input: '',
      msgs: [],
    }
  },
  methods: {
    sendMsg() {
      console.log(this.input)
      this.msgs.push(this.input)
      this.input = ''
    }
  }
}
</script>

<style>
body{
  margin: 0;
  background-color: #F2F6FC;
}
.userhead{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rebeccapurple;
}
.g-chat-input{
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  background-color: #ffffff;
}
.message-view{
  margin-bottom: 10px;
}
.message-main{
  line-height: 36px;
  background-color: #0000ff;
  border-radius: 6px;
  text-align: center;
  color: #ffffff;
  display: inline-block;
  padding: 0 20px;
}
.msg-input{
  line-height: 20px;
  width: 77%;
  padding: 8px;
  box-sizing: border-box;
  background-color: aliceblue;
  outline: none;
  border: none;
}
.msg-main{
  padding: 8px;
  box-sizing: border-box;
}
</style>