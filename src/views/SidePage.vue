<template>
    <el-container>

        <el-aside width="280px" class="aside" style="background: white;">

            <side-menu></side-menu>
        </el-aside>
        <el-main><router-view/></el-main>
    </el-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import SideMenu from './side-page-sub/SideMenu.vue';
    import SidePage0 from './side-page-sub/SidePage0.vue';
    import SidePage1 from './side-page-sub/SidePage1.vue';
    import SidePage2 from './side-page-sub/SidePage2.vue';
    import SidePage3 from './side-page-sub/SidePage3.vue';
    import SidePage4 from './side-page-sub/SidePage4.vue';
    import SidePage5 from './side-page-sub/SidePage5.vue';
    import SidePage6 from './side-page-sub/SidePage6.vue';

    @Component({
        components: {
            SideMenu,
            SidePage0,
            SidePage1,
            SidePage2,
            SidePage3,
            SidePage4,
            SidePage5,
            SidePage6
        }
    })
    export default class SidePage extends Vue {
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

<style scoped>
    

</style>