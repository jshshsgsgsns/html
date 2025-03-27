const from = document.querySelector('form')
from.addEventListener('submit',function(e){
    e.preventDefault();
})


const sub = document.querySelector('button')

function subfunction(){

    // 获取表单内容
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    //直接获取的是元素对象，要对对象的值取值

    data={
        "username" : username,
        "password" : password
    }

    fetch('http://192.168.137.1:8080/login/test',{
        method: 'POST',
        // credentials: 'include', // 确保发送 Cookie
        headers:{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
            if(data.code == 200){
            alert("登录成功")
            //接收token并且存入本地
            localStorage.setItem("token",data.data)
            console.log(data.data)
            setCookie(data.data,7)

            window.location.href='./html/biaodan.html'
            }
            else{
                alert("登录失败"+data.message)
            }
        }
    )
    

}


sub.addEventListener('click',subfunction)
//屏蔽了自动提交，要对按钮点击进行监听