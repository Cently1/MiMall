import Mock from 'mockjs'

Mock.mock("/api/user/login", {
  "status": 0,
  "data": {
    "id|1-3": 0,
    "username": "admin",
    "email": "1511384361@qq.com",
    "phone": null,
    "role": 0
  }
});