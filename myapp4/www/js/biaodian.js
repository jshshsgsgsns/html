const links = document.querySelectorAll('ul a');
const contents = document.querySelectorAll('#main-right div');
const homebut = document.getElementById('homebut')
let page = 1;

console.log(links)
console.log(contents)

// 为每个链接添加点击事件
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // 阻止默认跳转行为

        // 移除所有链接的 active 类
        links.forEach(lnk => lnk.classList.remove('active'));
        // 添加 active 类到当前链接
        link.classList.add('active');

        // 隐藏所有内容
        contents.forEach(content => content.classList.remove('active'));
        // 显示与链接对应的内容
        const target = link.getAttribute('href').substring(1); // 去掉 # 符号
        document.getElementById(target).classList.add('active');
    });
});

function createform(data){
  const divone = document.createElement('div')
  const divtwo = document.createElement('div')
  const img = document.createElement('img')
  const text = document.createElement('p')
  const time = document.createElement('p')
  const inform = document.querySelector('#home')
  img.src = data.img
  text.innerText = data.text
  time .innerText = data.time

  divtwo.appendChild(img)
  divtwo.appendChild(text)

  divone.appendChild(divtwo)
  divone.appendChild(time)

  inform.appendChild(divone)
  console.log("123")
}

function fetchData(page, pageSize) {
    // 构造查询字符串
    const url = `http://localhost:8080/diary/list?page=${page}&size=${pageSize}`;
  
    // 发起 GET 请求
    fetch(url)
      .then(response => response.json())  // 解析返回的 JSON 数据
      .then(data => {
        console.log('Page:', page);
        console.log('Fetched Data:', data);
        // 处理分页数据
        createform(data.data[0])
        // 你可以在这里更新 UI 或做其他处理
      })
      .catch(error => {
        console.error('Error:', error);  // 错误处理
      });
  }
  
  // 获取第一页，每页 10 条数据
  fetchData(page, 9);

  homebut.addEventListener('click',function fetchData(){
    page++;
    fetchData(page,9)
  })
  