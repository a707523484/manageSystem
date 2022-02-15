import Mock from "mockjs";

Mock.mock('/getData', {
    "tableData": {
        "table|5": [{
            "date": "@date",
            "name": "@cname",
            "address": "@county(true)"
        }]
    },
    "orderData":{
        "xData|4":[{
            "city":"@city",
            "number2015|80-100":80,
            "number2016|80-100":80,
            "number2017|80-100":80
        }]
    }
})



let List=[]
Mock.mock('/addUser','post',(config)=>{
    const{name,addr,age,birth,sex}=JSON.parse(config.body)
    console.log(JSON.parse(config.body));
    List.unshift({
        id:Mock.Random.guid(),
        name:name,
        addr:addr,
        age:age,
        birth:birth,
        sex:sex
    })
    return{
        code:200,
        addUserData:JSON.parse(config.body),
        data:{
            message:'添加成功',
        }
    }
})


Mock.mock('/getUserList',{
    "userData":{
        "userList|30":[{
            "id":"@id",
            "name":"@cname",
            "age|20-30":20,
            "sex":'@string("男女",1)',
            "birth": "@date",
            "addr": "@county(true)"
        }]
    }
})
