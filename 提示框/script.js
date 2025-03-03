// 获取元素
const showBtn = document.getElementById('showBtn');
const customAlert = document.getElementById('customAlert');
const closeBtn = document.getElementById('closeBtn');

// 显示提示框
showBtn.addEventListener('click', () => {
  customAlert.style.display = 'flex';
});

// 关闭提示框
closeBtn.addEventListener('click', () => {
  customAlert.style.display = 'none';
});

// 点击提示框外部关闭提示框
window.addEventListener('click', (e) => {
  if (e.target === customAlert) {
    customAlert.style.display = 'none';
  }
});
