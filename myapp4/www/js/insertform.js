const insertform = document.querySelector('.upload-form')
insertform.addEventListener('submit',function(e){
    e.preventDefault();

    const formData = new FormData();

    const textInput = document.getElementById('text-upload').value;
    const fileInput = document.getElementById('image-upload').files[0];

    formData.append('textInput', textInput);  // 添加文字数据
    formData.append('fileInput', fileInput); //wenjian

    fetch('http://localhost:8080/diary/insert', {
        method: 'POST',
        body: formData  // 使用 FormData 作为请求体
    })
    .then(response => response.json())
    .then(data => {
        if(data.success == 200){
            console.log("发送成功")
        }
    })
    .catch(error => {
        console.error('Error submitting form:', error);
    });
});



