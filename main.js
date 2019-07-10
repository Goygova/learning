let fieldsCounter = 0;
function addField(){
  let fieldName = prompt('Enter field name:');
    if(fieldName){
      let inputEl = document.createElement('input');

      let fieldContainer = document.createElement('div');
      fieldContainer.className = 'field-container';

      let removeButton = document.createElement('button');
      removeButton.innerHTML = 'Remove field';
      removeButton.onclick = removeField;

      let fieldNameContainer = document.createElement('div');
      fieldNameContainer.className = 'field-name-container';
      fieldNameContainer.innerHTML = fieldName + ':';

      fieldContainer.appendChild(fieldNameContainer);
      fieldContainer.appendChild(inputEl);
      fieldContainer.appendChild(removeButton);

      let container = document.getElementById('container');

      let submitButton = document.getElementById('submit-button');

      if(submitButton){
        container.insertBefore(fieldContainer, submitButton);
      } else {
        container.appendChild(fieldContainer);
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

function removeField(){
  this.parentElement.parentElement.removeChild(this.parentElement);
  fieldsCounter--;
  //if last field is removed then remove submit button
  if(fieldsCounter === 0){
    let submitButtonParent = document.getElementById('container');
    let submitButton = document.getElementById('submit-button');
    submitButtonParent.removeChild(submitButton);
  }
}


