/*
 * @Author: MrAlenZhong
 * @Date: 2022-05-30 17:18:51
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-06-06 19:41:45
 * @Description:
 */
const { faker } = require("@faker-js/faker");
const _ = require("lodash");
faker.setLocale("zh_CN");
module.exports = () => ({
  orgTree: _.times(40, function (n) {
    return {
      createBy: faker.name.firstName(),
      updateBy: "admin",
      createTime: faker.date.between("2019-01-01", "2019-12-31"),
      updateTime: faker.date.between("2022-01-01", "2022-12-31"),
      id: n + 1,
      name: faker.address.city(),
      deptCode: "A0002",
      districtCode: "440300",
      enabled: true,
      deptSort: 2,
      pid: null,
      pcode: null,
      subCount: 0,
      deptType: "1",
      deptLevel: "2",
      deptSource: null,
      remark: null,
      tifDeptId: null,
      label: faker.address.city(),
      hasChildren: false,
      leaf: false,
    };
  }),
  userRela: _.times(1000, function (n) {
    const pageNum = 30;
    return {
      deptId: n % pageNum === pageNum ? n : Math.ceil(n / pageNum),
      enabled: faker.datatype.boolean(),
      nickName: faker.name.findName(),
      id: n,
      source: faker.system.directoryPath(),
      userId: n,
      userName: faker.name.findName(),
    };
  }),
  user: _.times(1000, function (n) {
    return {
      id: n,
      depts: {},
      dept: {},
      username: faker.name.findName(),
      nickName: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      enabled: faker.datatype.boolean(),
      identityType: faker.system.directoryPath(),
      identityNo: faker.system.directoryPath(),
      source: faker.system.directoryPath(),
    };
  }),
});
