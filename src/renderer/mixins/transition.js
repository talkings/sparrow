import fs from 'fs';
import { ipcRenderer } from 'electron';
export default {
    data : function(){
        return {
            filename: '',
            modal3: false,
            savePath : '',
            fileContent : [],
            loading : true
        }
    },
    methods: {
        /**
         * 保存文件
         */
        saveFile (filepath){
            return new Promise((resolve, reject)=>{
                let path = `${filepath}/json.${(Math.random()).toString().split('.')[1]}.json`;
                fs.writeFile(path, JSON.stringify(this.fileContent), (err) => {
                    if(err){
                        reject(err);
                        throw err;
                    }
                    resolve();
                })
            })
            
        },
        /**
         * 弹框提交
         */
        dialogConfirm(){
            if( this.savePath.trim() === '' || /.js|.json|.txt|.zip|.rar/.test(this.savePath.trim())){
                this.$Message.error('请选择保存目录');
                this.loading = false;
                return false;
            }
            this.saveFile(this.savePath).then(()=>{
                this.$Message.success('保存成功');
                this.dialogCancel();
            }).catch((err)=>{
                 this.$Message.error('保存失败');
                 this.dialogCancel();
            });
        },
        dialogCancel(){
            setTimeout(()=>{
                window.location.reload();
            }, 1000)
        },
        getSaveFile() {
            ipcRenderer.send('open-file-dialog');
            ipcRenderer.on('selected-directory', (event, path)=> {
                this.savePath = path[0];
            })
        }
    }
}