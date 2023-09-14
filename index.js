// Write your code here!
const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}
const newHeader = document.createElement('h1');
newHeader.textContent = 'New header';
newHeader.id = 'victory';
document.body.appendChild(newHeader);

const yourName = "Kevin Olongo"; 
newHeader.textContent = `${yourName} is the champion`;