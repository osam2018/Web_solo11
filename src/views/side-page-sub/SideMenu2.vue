<template>
    <el-menu
            default-active="sidepage1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @select="handleSelect"
            @close="handleClose">
        <el-menu-item index="sidepage0">
            <i class="el-icon-circle-plus-outline"></i>
            <span>추가하기</span>
        </el-menu-item>
        <el-menu-item index="sidepage1">
            <i class="el-icon-location"></i>
            <span>person1</span>
        </el-menu-item>
        <el-menu-item index="sidepage2">
            <i class="el-icon-location"></i>
            <span>person2</span>
        </el-menu-item>
        <el-menu-item index="sidepage3">
            <i class="el-icon-location"></i>
            <span>person3</span>
        </el-menu-item>
        <el-menu-item index="sidepage4">
            <i class="el-icon-location"></i>
            <span>person4</span>
        </el-menu-item>
        <el-menu-item index="sidepage5">
            <i class="el-icon-location"></i>
            <span>person5</span>
        </el-menu-item>
        <el-menu-item index="sidepage6">
            <i class="el-icon-location"></i>
            <span>person6</span>
        </el-menu-item>

    </el-menu>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    @Component
    export default class SideMenu extends Vue {
        public activePage:string ="SidePage1";

        handleOpen(key:string, keyPath:string) {
            console.log("open ", key, keyPath);
        }

        handleClose(key:string, keyPath:string) {
            console.log("close", key, keyPath);
        }

        handleSelect(key:string, keyPath:string){
            console.log("select", key, keyPath);
            this.$router.replace("/sidepage/"+key);
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    #img_box{
        width: ;
    }
</style>
