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
        <el-menu-item v-for="(item, index) in meunArr" :index="item.value">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
        </el-menu-item>



    </el-menu>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    @Component
    export default class SideMenu extends Vue {
        public activePage:string ="SidePage1";
        private  meunArr: any[] = [
        {
            "value":"sidepage1",
            "name" : "person1"
        },
        {
            "value":"sidepage2",
            "name" : "person2"
        },
        {
            "value":"sidepage3",
            "name" : "person3"
        },
        {
            "value":"sidepage4",
            "name" : "person4"
        },
        {
            "value":"sidepage5",
            "name" : "person5"
        },
        {
            "value":"sidepage6",
            "name" : "person6"
        }];

        public mounted() {
            let that = this;
            window.$globalBus.$on("addUser", function(value:any) {
                let obj = {
                    "value":value,
                    "name" :value
                };

                that.meunArr.push(obj);
                console.log("받아오는 값:", value);

            })
        }
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
</style>
