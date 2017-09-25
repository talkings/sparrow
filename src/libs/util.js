

export default {
    /**
     * 读取文件实例
     * @param { object } file对象
     */
    readFileText(file) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.readAsText(file, ["utf-8"]);
            reader.onload = function () {
                try {
                    let data = JSON.parse(this.result.trim());
                    resolve(data);
                } catch (e) {
                    reject(e);
                }
            }
        })

        //console.log(file);
    },
    /**
     * 文件内容转换数据
     * @param { object } data
     * @return { array }
     */
    convertFileData(data, fn) {
        if(!Array.isArray(data)){
            return [];
        }
        let len = data.length;
        while(len--){
            let { lng, lat } = data[len];
            let arr = fn(lng, lat);
            data[len].lng = arr[0];
            data[len].lat = arr[1];
        }
        return data;
    },
    /**
     * 创建自定义事件
     */
    createEvent (eventname, dom) {
        let me = document.createEvent('HTMLEvents');
        me.initEvent(eventname, true, true);
        dom.dispatchEvent(me);
    }
}