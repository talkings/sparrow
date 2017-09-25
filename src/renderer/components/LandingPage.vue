<template>
  <div class="layout">
        <Row type="flex">
            <Col span="5" class="layout-menu-left">
                <Menu active-name="1-1" theme="dark" width="auto" :open-names="['1']">
                    <div class="layout-logo-left"></div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            坐标系转换
                        </template>
                        <MenuItem name="1-1" @click.native.click="goPage('BaiduToGCJ02')">百度转火星</MenuItem>
                        <MenuItem name="1-2" @click.native.click="goPage('GCJ02ToBaidu')">火星转百度</MenuItem>
                        <MenuItem name="1-3" @click.native.click="goPage('Wgs84ToGCJ02')">WGS84转火星</MenuItem>
                        <MenuItem name="1-4" @click.native.click="goPage('GCJ02ToWgs84')">火星转换WGS84</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            瓦片数据导出
                        </template>
                        <!-- <MenuItem name="2-1">选项 1</MenuItem>
                        <MenuItem name="2-2">选项 2</MenuItem> -->
                    </Submenu>
                </Menu>
            </Col>
            <Col span="19">
                <div class="layout-content flex flex-align-center flex-pack-center">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
  export default {
    name: 'landing-page',
    components: {},
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      goPage (name) {
        this.$router.push({ 'name': name })
      }
    },
    mounted () {
        this.$router.push({ 'name': 'BaiduToGCJ02' })
    }
  }
</script>

<style>
    .layout .ivu-row-flex{
      height: 100%;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: absolute;
        height: 100%;
        width: 100%;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        height: calc(100% - 30px);
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 7px rgba(0,0,0,.15);
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
        height: 100%;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
</style>
