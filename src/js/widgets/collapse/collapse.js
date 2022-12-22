import './collapse.css';

const wrapper = document.getElementsByClassName('contentBx');
const label = document.getElementsByClassName('label');
console.log(wrapper);
for (let contentBx of wrapper) {
  contentBx.addEventListener('click', () => {
    contentBx.classList.toggle('active');
  });
}
