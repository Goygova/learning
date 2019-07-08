function renderReset() {
    let container = document.getElementById('container');
    let newDiv = createElement('div', 'text-class', 'Hello');
    let existingDivs = container.getElementsByClassName('text-class');
    if(existingDivs.length > 0){
      reset();
      renameButton('render-reset-button','Render');
    } else {
      renameButton('render-reset-button','Reset');
      container.appendChild(newDiv);
    }
}

function renameButton(id,name){
  let button = document.getElementById(id);
  button.innerHTML = name;
}

function createElement(tagName, className, text){
  let newEl = document.createElement(tagName);
  newEl.className = className;
  newEl.innerHTML = text;
  return newEl;
}

function reset(){
  let oldDiv = document.getElementById('container')
  let bodyArr = document.getElementsByTagName('body');
  bodyArr[0].removeChild(oldDiv);
  let newDiv = document.createElement('div');
  newDiv.id = 'container';
  bodyArr[0].appendChild(newDiv);

}