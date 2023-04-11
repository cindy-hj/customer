<template>
    <div>
        <ul>
            <li v-for="(item,idx) in state.items" :key="idx">
                <span>firstName: {{ item.firstName }}&nbsp;</span>
                <span>lastName: {{ item.lastName }}&nbsp;</span>
                <span>birthDate: {{ item.birthDate }}&nbsp;</span>
                <span>phone: {{ item.phone }}&nbsp;</span>
                <span>address: {{ item.address }}&nbsp;</span>
                <span>city: {{ item.city }}&nbsp;</span>
                <span>state: {{ item.state }}&nbsp;</span>
                <span>points: {{ item.points }}&nbsp;</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";
export default {
    setup () {
        const state = reactive({
            items: [],
        })

        const load = () => {
            axios.get("/api/get/customer")
                .then(({ data })=> {
                    console.log(data);
                    state.items = data;
                }).catch(()=>{
                    alert("입력 실패");
                })
        }

        onMounted(()=>{
            load();
        })

        return {
            state
        }
    }
}
</script>

<style lang="scss" scoped>

</style>