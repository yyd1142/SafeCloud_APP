<template>
    <div>
        <form class="form form-login" @submit.prevent="login(account)">
            <div class="form-group" :class="{'has-error': errors.has('邮箱')}">
                <input type="text" name="邮箱" class="form-control" placeholder="邮箱" v-model="account.email" v-validate data-vv-rules="required|email"
                />
                <p class="help-block">{{errors.first('邮箱')}}</p>
            </div>
            <div class="form-group" :class="{'has-error': errors.has('password')}">
                <input type="password" class="form-control" name="password" placeholder="password" v-model="account.password" v-validate
                    data-vv-rules="required" />
                <p class="help-block">{{errors.first('password')}}</p>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">登录</button>
            </div>
        </form>
    </div>
</template>

<script>
    import Api from 'api'

    export default {
        data() {
            return {
                account: {},
                form: {
                    account: '',
                    password: ''
                }
            }
        },
        mounted() {

        },
        methods: {

            login() {
                this.$validator.validateAll()
                if (this.errors.any()) return
                this.$router.push('/enter');
                // let self = this;
                // let params = {

                // };
                // Api.login(params).then(result => {
                //     if (!result) return false
                //     if (result.code == 0) {

                //     }
                // })
            }
        },
        components: {}
    }

</script>

<style lang="less" rel="stylesheet/less" src="./login.less" scoped></style>