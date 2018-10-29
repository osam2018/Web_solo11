<template>
    <el-main>
        <div style="width: 300px; margin: 0 auto;">
            <el-input placeholder="Please input" v-on:keyup.native.enter="onAddUser()" v-model="input"/>
        </div>
        <el-button type="primary" @click="onAddUser()">Primary</el-button>
    </el-main>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({})
    export default class Home extends Vue {
        public input: string = "";

        public onAddUser() {
            window.$globalBus.$emit("addUser", this.input);
            console.log("test :", this.input);
            this.input = '';
        }


    }

    class SearchData {
        public value: string = "";
        public label: string = "";
    }


</script>

<style scoped>
    .about {
        line-height: 30px;
    }

    #window > #main_textarea {
        height: 480px;
        width: 70%;
    }


</style>