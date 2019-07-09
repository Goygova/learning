let fieldsCounter = 0;
function addField(){
  let fieldName = prompt('Enter field name:');
    if(fieldName){
      let inputEl = document.createElement('input');
      let div = document.createElement('div');
      div.innerHTML = fieldName + ':';
      div.appendChild(inputEl);
      let container = document.getElementById('container');
      let submitButton = document.getElementById('submit-button');
      if(submitButton){
        container.insertBefore(div, submitButton);
      } else {
        container.appendChild(div);
      }
      fieldsCounter++;
  }
  if(fieldsCounter > 0){
    if(!document.getElementById('submit-button')){
      renderSubmitButton();
    }
  }
}

function renderSubmitButton(){
  let submitButton = document.createElement('button');
  submitButton.innerHTML = 'Submit';
  submitButton.id = 'submit-button';
  let container = document.getElementById('container');
  container.appendChild(submitButton);
}
//TODO: add remove field button
