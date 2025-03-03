const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
})

function submitForm() {
    // 获取用户名和密码的输入框元素
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");



    // 检查用户名和密码是否为空
    if (username.trim() === "" || password.trim() === "") {
        // 如果为空，显示错误消息
        errorMessage.style.display = "block";
        return;
    } else {
        // 如果都填写了，隐藏错误消息
        errorMessage.style.display = "none";
    }

    // 创建要发送的数据对象
    var data = {
        "username": username,
        "password": password
    };

    console.log(data)
    // 使用 fetch 方法提交数据
    fetch('http://localhost:8080/api/login/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'  // 发送 JSON 数据
        },
        body: JSON.stringify(data)  // 将对象转化为 JSON 字符串
    })
    .then(response => response.json())  // 假设服务器返回 JSON 格式的响应
    .then(data => {
        console.log(data)
        if (data.code == 200) {
            alert("登录成功！");
            // 在这里可以跳转到其他页面或者执行其他操作
            window.location.href='../test.html'
            console.log(data)
        } else {
            alert("登录失败：" + data.message);
        }
    })
    .catch(error => {
        console.error("错误：", error);
        alert("请求失败，请稍后再试！");
    });
}
