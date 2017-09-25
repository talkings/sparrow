<template>
    <div>
        <div class="local-content flex-pack-center flex flex-v">
            <div class="uploadfile">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>点击或将文件拖拽到这里上传</p>
                    <input type="file" @change="uploadfileEvent">
                </div>
                <p>{{ filename }}</p>
            </div>
            <Modal 
                v-model="modal3"
                width="360"
                @on-ok="dialogConfirm"
                :loading="loading"
                @on-cancel="dialogCancel">
                <div class="uploadfile">
                    <div style="padding: 20px 0" @click="getSaveFile">
                        <Icon type="android-download" size="52" style="color: #3399ff"></Icon>
                        <p>点击选择文件保存路径</p>
                        {{ savePath }}
                    </div>
                </div>
            </Modal>
            <div class="local-content-footer flex flex-pack-center">
                <Button type="warning" shape="circle">
                    WGS84坐标转火星坐标
                    <Icon type="android-upload"></Icon>
                </Button>
            </div>
        </div>

    </div>
</template>

<script>
import util from '../../../libs/util';
import MixinsHandler from '../../mixins/transition';
//坐标转换
import { wgs84togcj02 } from '../../../libs/coordtransform';
export default {
    mixins: [ MixinsHandler ],
    name: 'BaiduToGCJ02',
    data: function() {
        return {
            // filename: '',
            // modal3: false,
            // savePath : '',
            // fileContent : [],
            // loading : true
        }
    },
    methods: {
        
        /**
         * 上传文件事件
         */
        async uploadfileEvent(event) {
            let files = event.target.files[0];
            try {
                let data = await util.readFileText(files);
                data = await util.convertFileData(data, wgs84togcj02);
                this.fileContent = data;
                this.modal3 = true;
            } catch (error) {
                this.$Message.error('转换异常！请按照规范检查数据格式');
            }

        }
    },
    mounted() {

    }
}
</script>

<style>
/* CSS */
</style>
