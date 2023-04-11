<template>
    <div class="container">
        {{ state.form }}
        <div class="item">
            <label class="lbl">아이디</label>
            <input type="text" v-model="state.form.id" />
        </div>
        <div class="item">
            <label class="lbl">성</label>
            <input type="text" v-model="state.form.lastName" />
        </div>
        <div class="item">
            <label class="lbl">이름</label>
            <input type="text" v-model="state.form.firstName" />
        </div>
        <div class="item">
            <label class="lbl">휴대폰번호</label>
            <input type="text" v-model="state.form.phone" />
        </div>
        <div class="item">
            <label class="lbl">주소</label>
            <input type="text" v-model="state.form.address" />
        </div>
        <div class="item">
            <label class="lbl">도시</label>
            <input type="text" v-model="state.form.city" />
        </div>
        <div class="item">
            <label class="lbl">상태</label>
            <input type="text" v-model="state.form.state" />
        </div>
        <div class="item">
            <label class="lbl">포인트</label>
            <input type="text" v-model="state.form.points" />
        </div>
        <div class="item">
            <label class="lbl"></label>
            <button @click="handleUpdate()">수정</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { reactive } from 'vue';

export default {
    setup () {
        const state = reactive({
            form : {
                id: Number(),
                lastName:"",                
                firstName:"",
                phone:"",
                address:"",
                city:"",
                state:"",
                points:""
            }
        })

        const handleUpdate = async() => {
            const url = `/api/put/customer/${state.form.id}`
            const headers = {"Content-Type":"application/json"}
            const body = state.form
            try {
                const { data } = await axios.put(url, body, headers);
                console.log(data);
                alert("수정 성공");
            } catch(error) {
                console.error(error);
            }
        }

        return {
            state,
            handleUpdate
        }
    }
}
</script>

<style lang="css" scoped>
    .container{
        width   : 600px;
        margin  : 0px auto;
        border  : 3px solid #e6ffef;
        padding : 20px;
    }
    .item {
        margin  : 10px;
    }
    .lbl {
        display : inline-block;
        width   : 100px;
    }
</style>