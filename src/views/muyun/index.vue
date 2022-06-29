<template>
    <div class='muyun' id='building'>
        <div class="content">
            <p class="p1">商场</p>
            <transition name="el-zoom-in-top">
                <div style="padding: 50px" v-show="index">
                    <el-form :label-position="labelPosition" label-width="70px" :model="form">
                        <el-form-item label="手机号:">
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="密码:">
                            <el-input type="password" v-model="form.pwd"></el-input>
                        </el-form-item>
                        <el-form-item label="区间(k)">
                            <el-col :span="11">
                                <el-input v-model="form.sta"></el-input>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-input v-model="form.end"></el-input>
                            </el-col>
                        </el-form-item>
                    </el-form>
                    <el-button style="margin-top: 10px;width: 100px;" @click="qianggou" :loading="loading1"
                        :disabled="loading1">
                        {{ text1 }}
                    </el-button>
                    <el-button style="margin-top: 10px;width: 100px;" @click="start" :loading="loading"
                        :disabled="loading">
                        {{ text }}
                    </el-button>
                </div>
            </transition>
            <transition name="el-fade-in-linear">
                <div v-show="index2">
                    <div style="float:left;font-size: 16px;text-align: left;padding: 30px 0 0 30px">已提交!<br>请等待微信推送抢购结果...</div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            success: '',
            index: true,
            index2: false,
            text1: '抢购',
            text: '捡漏',
            loading1: false,
            loading: false,
            labelPosition: 'left',
            form: {
                phone: '',
                pwd: '',
                sta: '',
                end: ''
            }
        }
    },
    methods: {
        start() {
            // this.$message({
            //     message: '已提交,正在捡漏中~~~',
            //     type: 'success'
            // });
            this.index = false;
            // this.text = 'Wait'
            // this.loading = true;
            const _this = this
            setInterval(() => {
                _this.index2 = true
            }, 600 )
            this.$http({
                url: 'muyun/repair',
                method: 'post',
                data: this.form
            }).then((res) => {

            });
        },
        qianggou() {
            // this.$message({
            //     message: '已提交,正在抢购中~~~',
            //     type: 'success'
            // });
            // this.text1 = 'Wait'
            // this.loading1 = true;
            this.index = false;
            const _this = this
            setInterval(() => {
                _this.index2 = true
            }, 600 )
            this.$http({
                url: 'muyun/seckill',
                method: 'post',
                data: this.form
            }).then((res) => {

            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1,
h2 {
    font-weight: normal;
    font-size: 15px;
}

ul {
    list-style-type: none;
    padding: 0;

    li {
        display: inline-block;
        margin: 0 10px;
    }
}

a {
    color: #42b983;
}

.transition-box {
    margin-bottom: 20px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}

.muyun {
    .content {
        background-color: rgba(255, 255, 255, 0.7);
        width: 85%;
        height: 450px;
        margin: 50px auto;
        border-radius: 50px;
        max-width: 400px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

        .p1 {
            margin-top: 40px;
            font-size: 20px;
        }
    }
}

#building {
    background: url("../../assets/background.png");
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>
