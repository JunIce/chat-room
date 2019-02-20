<template>
  <div class="main-body">
    <div class="msg-main">
      <el-row  v-for="(m, idx) in msgs" :class="['message-view', m.isself ? 'isself': '']" :key="idx">
        <template v-if="m.isself">
          <el-col :span=20><div class="message-main">{{m.val}}</div></el-col>
          <el-col  :span=4><div class="u-name">{{m.name}}</div></el-col>
        </template>
        <template v-else>
          <el-col  :span=4><div class="u-name">{{m.name}}</div></el-col>
          <el-col :span=20><div class="message-main">{{m.val}}</div></el-col>
        </template>
      </el-row>
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
      uid: '',
      uname: '',
      input: '',
      msgs: [
      ],
    }
  },
  mounted() {
    this.uid = this.$socket.id
    this.uname = 'jack'
    this.$socket.on('zpzpzpzpzp', (data) => {
      console.log(data)
      this.msgs.push({isself: false, ...data})
    })
  },
  methods: {
    sendMsg() {
      console.log(this.input)
      this.msgs.push({
        isself: true,
        name: this.uname,
        val: this.input
      })
      this.$socket.emit('chat message', this.input)
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
.u-name{
  font-size: 20px;
  font-weight: bold;
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
  flex-grow: 1;
  padding: 8px;
  box-sizing: border-box;
  background-color: aliceblue;
  outline: none;
  border: none;
  margin-right: 8px;
}
.msg-main{
  padding: 8px;
  box-sizing: border-box;
}
.isself .message-main{
  background-color: blueviolet;
  float: right;
}
.isself .u-name{
  text-align: right;
}
</style>