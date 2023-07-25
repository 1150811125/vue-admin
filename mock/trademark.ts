//createUserList:次函数执行会返回一个数组,数组里面包含两个用户信息
// function createTrademarkList() {
//     return [
//         {
//             createTime: "2021-12-1-1 01:31:41",
//             id:1,
//             logoUrl: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//             tmName:: '小米',
//             updateTime: '2023-07-15 15:48:02',
//         },
//         {
//             createTime: "2021-12-1-1 01:31:41",
//             id:1,
//             logoUrl: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//             tmName:: '华为',
//             updateTime: '2023-07-15 15:48:02',
//         },
//         {
//             createTime: "2021-12-1-1 01:31:41",
//             id:1,
//             logoUrl: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//             tmName:: '苹果',
//             updateTime: '2023-07-15 15:48:02',
//         },
//     ]
// }
// //对外暴露一个数组:数组里面包含两个接口
// export default [
//     // 获取品牌数据
//         {
//             url: '/api/trademark/getList',
//             method: 'get',
//             response: (request) => {
//                 const checkUser = createTrademarkList()
//                 //如果有返回成功信息
//                 return { code: 200, data: { checkUser } }
//             },
//         },
//     {
//         url: '/api/user/login',//请求地址
//         method: 'post',//请求方式
//         response: ({ body }) => {
//             //获取请求体携带过来的用户名与密码
//             const { username, password } = body;
//             //调用获取用户信息函数,用于判断是否有此用户
//             const checkUser = createUserList().find(
//                 (item) => item.username === username && item.password === password,
//             )
//             //没有用户返回失败信息
//             if (!checkUser) {
//                 return { code: 201, data: { message: '账号或者密码不正确' } }
//             }
//             //如果有返回成功信息
//             const { token } = checkUser
//             return { code: 200, data: { token } }
//         },
//     },
// ]
