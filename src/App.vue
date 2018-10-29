<template>

      <el-container id="app">
          <el-header class="header">
              <div id="nav">
                  <el-menu :default-active="activePage" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                      <el-menu-item index="sidepage">채팅페이지</el-menu-item>
                  </el-menu>

              </div>
              <div id="icon">
                  <i id="info" class="el-icon-info"></i>
              </div>

          </el-header>

          <router-view/>

      </el-container>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    @Component({

    })
    export default class Home extends Vue {
        public activePage:string ="sidepage";
        handleSelect(key:string, keyPath:string) {
            this.$router.replace("/"+key);
        }
    }
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
}

.el-main {
    color: #333;
    text-align: center;
    overflow: hidden;
}

body > .el-container {
    margin-bottom: 40px;
}

    #info{
        position:fixed;
        top: 30px;
        right: 10px;
    }

</style>
