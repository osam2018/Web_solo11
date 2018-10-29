import Model from "@/model/Model";
import Vue from 'vue';

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue;


}

declare module 'vue/types/vue' {
    interface VueConstructor {
        $http: any;
    }
}

declare global {
interface Window {

    $globalBus:Vue;
    $model:Model;
}

}