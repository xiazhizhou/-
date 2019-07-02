<template>
  <div>
    <my-header :title="'收货地址'" :showBack="true"/>
    <div>
      <div class="my_address_box" v-show="mark==0">
        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          @add="onAdd"
          @edit="onEdit"
        />
      </div>
      <div class="my_address_add_box" v-show="mark==1">
        <van-cell-group style="margin-top: 10px;">
          <van-field
            v-model="editAddress.userName"
            label="收货人"
            icon="clear"
            placeholder="请填写收货人"
            @click-icon="editAddress.userName = ''"
          />

          <van-field
            v-model="editAddress.phone"
            label="联系电话"
            icon="clear"
            placeholder="请填写联系电话"
            @click-icon="editAddress.phone = ''"
          />

          <div class="van-cell van-field task_field van-hairline van-field--has-icon" @click="showAddressPopup">
            <div class="van-cell__title">
              <span class="van-cell__text">所在城市</span>
            </div>
            <div class="van-cell__value">
              <input type="text" disabled="disabled" v-model="editAddress.address" placeholder="请选择所在城市" class="van-field__control">
              <div class="van-field__icon">
                <!-- <i class="van-icon van-icon-arrow"></i> -->
              </div>
            </div>
          </div>
          <van-field
            v-model="editAddress.addressInfo"
            label="详细地址"
            type="textarea"
            icon="clear"
            rows="1"
            autosize
            placeholder="请填写详细地址"
            @click-icon="editAddress.addressInfo = ''"
          />
          <van-field
            v-model="editAddress.zipCode"
            label="邮政编码"
            icon="clear"
            placeholder="请填写邮政编码"
            @click-icon="editAddress.zipCode = ''"
          />
          <div class="van-cell van-cell--center van-switch-cell" style="">
            <div class="van-cell__title">
              <span>设为默认收货地址</span>
            </div>
            <div class="van-cell__value">
              <van-switch v-model="checked" />
            </div>
          </div>
        </van-cell-group>

        <div class="edit_address_btn">
          <van-button size="large">保存</van-button>
          <van-button size="large">删除地址</van-button>
        </div>
      </div>
      <van-popup class="address_popup_style"
        v-model="addressPopup"
        position="bottom" @click-overlay="goBack();">
        <choose-address @getAddress='getAddressData' @hideAddressPopup="goBack();addressPopup=false;"></choose-address>
      </van-popup>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/header.vue";
import chooseAddress from "@/components/chooseAddress.vue";
import { Toast, Dialog } from "vant";
export default {
  data() {
    return {
      mark: 0,
      checked : false,
      chosenAddressId: "",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],

      editAddress: {
        userName: "",
        phone: "",
        address: "",
        userName: "",
        userName: ""
      },
      addressPopup:false,
    };
  },
  created() {
    if (this.$route.fullPath.indexOf("?") != -1) {
      window.location.href = window.location.href.split('?')[0];
    }
  },
  watch: {
    $route(val, oldval) {
      if (val.fullPath.indexOf("?showEdit") != -1) {
        this.addressPopup = false;
      }
      if(val.fullPath.indexOf("?") == -1){
        this.mark = 0;
      }
    }
  },
  components: {
    "my-header": myHeader,
    'choose-address':chooseAddress, //注册子组件
  },
  methods: {
    showAddressPopup(){
      window.location.href = window.location.href.split('?')[0] + "?showAddressPopup";
      this.addressPopup=true;
    },
    getAddressData(){
      this.goBack();
      this.addressPopup=false;
    },
    onAdd() {
      Toast("新增收货地址");
    },
    onEdit(item, index) {
      if (window.location.href.indexOf("?showEdit") == -1) {
        window.location.href = window.location.href + "?showEdit";
      }
      this.mark = 1;
    }
  }
};
</script>
<style lang="less" scoped>
@mainColor: #f8e58c;
@auxiliaryColor: #fe6f6b;
.my_address_add_box {
  ul {
    border-top: 1px #eee solid;
    border-bottom: 1px #eee solid;
    margin-top: 10px;
    li {
      padding: 10px;
      background-color: #fff;
      display: flex;
      border-bottom: 1px #eee solid;
      line-height: 24px;
      label {
        flex: 1;
        max-width: 70px;
      }
      div {
        flex: 1;
        input {
          border: none;
          width: 100%;
          height: 22px;
        }
      }
    }
  }
}
.edit_address_btn{
  padding: 20px 10%;
  background-color: #fff;
  button{
    height: 40px;
    line-height: 40px;
  }
  button:first-child{
    margin-bottom: 10px;
    background: @mainColor;
    color: #666;
  }
}
</style>

