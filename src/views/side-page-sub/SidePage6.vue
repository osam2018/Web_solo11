<template>
    <el-main >

        <div id="window" style="border: 1px solid black; width: 915px; height: 480px; margin:0 auto" >
            <div style="height: 50px; width: 30px; float:right"><el-row :gutter="10">
                <el-col :span="6" :offset="18">
                    <div id="message" v-for="i in inputList">{{i}}<img src="./Penguins.jpg" style="width: 30px; height: 30px; padding-left:3px;border-radius: 10px"></div>
                    <div class="grid-content bg-purple"></div>
                </el-col>
            </el-row>
        </div>
        </div >
        <el-input
                style="height:100px; width:600px "
                placeholder="Please input"
                @keydown.native.enter="onSend()"
                v-model="input10"
                clearable>
        </el-input>
        <el-button class="file_send" type="primary" icon="el-icon-document">파일추가</el-button>
        <el-button class="message_send" type="primary" icon="el-icon-circle-check-outline" @click="onSend()">전송</el-button>
        <!--</form>-->
    </el-main>

</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue';
    // import SidePage0 from "./SidePage0"; // @ is an alias to /src

    @Component({

        components: {}
    })
    export default class Home extends Vue {
        inputList: string[] = [];
        public input10= '';



        onSend() {
            this.inputList.push(this.input10);
            this.input10 = "";
        }

    }




</script>



<style scoped>
    .about{
        line-height: 30px;
    }
    #window > #main_textarea
    {
        height: 480px;
        width: 70%;
    }

    el-button{
        float:right;
    }
    #message{
        display: inline-block;
        width: 700px;
        float:right;
        height: 30px;
        padding: 30px;
        text-align: right;
    }



</style>