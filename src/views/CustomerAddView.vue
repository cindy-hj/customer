<template>
    <div class="container">
        <div class="item">
            <label class="lbl">성</label>
            <input type="text" v-model="state.form.lastName" />
        </div>
        <div class="item">
            <label class="lbl">이름</label>
            <input type="text" v-model="state.form.firstName" />
        </div>
        <div class="item">
            <label class="lbl">생년월일</label>
            <input type="text" v-model="state.form.birthDate" />
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
            <button @click="handleInsert()">저장</button>
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
                lastName:"",                
                firstName:"",
                birthDate:"",
                phone:"",
                address:"",
                city:"",
                state:"",
                points:""
            }
        })

        const handleInsert = async() => {
            const url = '/api/add/customer' ;
            const headers = {"Content-Type":"application/json"};
            const body = state.form; // form이 객체 형태라서 여기서 따로 {} 안해줘도 된다!
            try {
                const { data } = await axios.post(url, body, headers); // headers도... 위에서 이미 {}해줬으니... 안해도 되는거였음!
                console.log(data);
                alert("등록 성공!");
            } catch (error) {
                console.error(error);
            }
        }

        return {
            state,
            handleInsert
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