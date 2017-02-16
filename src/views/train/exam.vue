<template>
    <div>
        <mt-header fixed title="冬季电器防火须知专项考试">
            <router-link to="/train" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="page-wrap" v-if="examShow == 1">
            <div class="exam-rule">请先认真学习以下相关资料后再开始答题，答题成绩将直接影响到您所在单位的安全管理评分</div>
            <div class="exam-main">
                <div class="exam-title">冬季用电用煤防火安全须知</div>
                <div class="rule-content">
                    1、在使用家用电器时，请注意安全，不要违章用电，特别是不要 私接电源电线，增加用电负荷，严禁使用电炉等大功率电器。<br> 2、为您和他人的安全着想，请不要将纸箱、废品等杂物占用楼道 <br> 3、请不要在到处乱吸烟，不乱扔烟头，吸烟后请务必将烟头熄灭
                    <br> 4、如发现室内有火情、火苗的，应及时拨打119。如有紧急情况，切勿惊慌，请听从指挥，有序撤离。 <br> 5、夜间请关好门窗，将防盗门进行反锁，夜间睡眠时请将皮包、 手机、相机、笔记本等价值高体积小便于携带的物品放入寝室内，
                    便于看管。 <br> 6、各住户煤炭应有序放置，每次购买煤炭量要少，勤买勤用，以免占用过多公共通道； <br> 7、各住户晚上封炉后应注意炉子周围无明火，火筒应经常清理，以免积灰；且应当保证房间内火筒无破损漏烟之处
                </div>
            </div>
            <div class="footer-bar">
                <div class="test-btn left">模拟考试</div>
                <div class="test-btn right" @click="examShow = 2;">开始考试</div>
            </div>
        </div>
        <div class="page-wrap" v-if="examShow == 2">
            <div class="exam-main">
                <mt-radio title="1、冬季在室内能否适用电炉取暖？" v-model="form.value1" :options="['能', '不能']"></mt-radio>
                <mt-radio title="2、家用安全用电的标准电压是多少？" v-model="form.value2" :options="['180W', '200W', '220W', '240W']"></mt-radio>
                <mt-radio title="3、儿童燃放烟花爆竹时，正确的做法是？" v-model="form.value3" :options="['由大人看护，到指定的燃放地点燃放', '只要有大人看护就行，不必到指定的燃放地点燃放']"></mt-radio>
                <mt-radio title="4、电脑着火了，正确做法是？" v-model="form.value4" :options="['迅速往电脑上泼水灭火', '拔掉电源后用湿棉被盖住电脑', '用泡沫灭火器扑救']"></mt-radio>
                <mt-radio title="5、火灾致人死亡的最主要原因是？" v-model="form.value5" :options="['吸入有毒烟气窒息死亡', '直接被火烧死', '人员拥挤致死', '跳楼或惊吓致死']"></mt-radio>
            </div>
            <div class="footer-bar">
                <div class="test-btn left">剩余时间：00:59:00</div>
                <div class="test-btn right" @click="examShow = 3;">完成答题</div>
            </div>
        </div>
        <div class="page-wrap" v-if="examShow == 3">
            <div class="score-wrap">
                <span class="benci">本次考试得分</span>
                <span class="score-value">89</span>
            </div>
            <div class="tips">您对以下消防知识还不太熟悉，再看一遍吧！</div>
            <mt-radio title="4、电脑着火了，正确做法是？" v-model="form.value4" :options="options4"></mt-radio>
            <mt-button size="large" type="primary" style="margin-top: 10px;">知道了</mt-button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                examShow: 1,
                form: {
                    value1: '',
                    value2: '',
                    value3: '',
                    value4: '',
                    value5: ''
                },
                options4: [
                    {
                        label: '迅速往电脑上泼水灭火',
                        value: 'A',
                        disabled: true
                    },
                    {
                        label: '拔掉电源后用湿棉被盖住电脑',
                        value: 'B'
                    },
                    {
                        label: '用泡沫灭火器扑救',
                        value: 'C'
                    }
                ]
            }
        },
        methods: {

        }
    }

</script>

<style lang="less" scoped>
    .page-wrap {
        box-sizing: border-box;
        padding: 0 10px;
    }
    
    .exam-rule {
        text-align: center;
        font-size: 14px;
        padding: 5px 0;
        line-height: 24px;
    }
    
    .exam-main {
        width: 100%;
        box-sizing: border-box;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 12px;
        margin-bottom: 55px;
        .exam-title {
            width: 100%;
            text-align: CENTER;
            padding-bottom: 15px;
            font-size: 16px;
        }
        .rule-content {
            line-height: 24px;
            font-size: 14px;
        }
    }
    
    .footer-bar {
        width: 100%;
        height: 45px;
        position: fixed;
        bottom: 0;
        background-color: #fff;
        z-index: 10;
        left: 0;
        right: 0;
        margin: auto;
        .test-btn {
            width: 50%;
            height: 45px;
            line-height: 45px;
            text-align: CENTER;
        }
        .left {
            float: left;
        }
        .right {
            float: right;
        }
    }
    
    .score-wrap {
        width: 100%;
        margin: 0 auto 20px auto;
        .benci {
            text-align: center;
            display: block;
            width: 100%;
            padding: 20px 0;
        }
        .score-value {
            border-radius: 50%;
            display: block;
            margin: 0 auto;
            width: 100px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            background-color: #ccc;
            color: #5a5a5a;
            font-size: 30px;
        }
    }
    
    .tips {
        width: 100%;
        text-align: center;
        padding-bottom: 10px;
    }
</style>