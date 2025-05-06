const Btn = document.getElementById('btn');
const parentList = document.getElementById('text');

Btn.addEventListener('click', () => {
  parentList.textContent = 'ボタンをクリックしました';
});