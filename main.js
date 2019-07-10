let fieldsCounter = 0;
const MAX_NUMBER_OF_FIELDS = 3;

function addField(){
  let fieldName = prompt('Enter field name:');
    if(fieldName){
      let inputEl = document.createElement('input');

      let fieldContainer = document.createElement('div');
      fieldContainer.className = 'field-container';

      let removeButton = createRemoveButton();

      let fieldNameContainer = createFieldNameContainer(fieldName);

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

      if(shouldDisableAddFieldButton()){
        let addFieldButton = document.getElementById('add-field-button');
        addFieldButton.disabled = true;
        let tooltip = createTooltip();
        addFieldButton.appendChild(tooltip);
      }
  }
  if(fieldsCounter > 0){
    if(!document.getElementById('submit-button')){
      let submitButton = createSubmitButton();
      let container = document.getElementById('container');
      container.appendChild(submitButton);
    }
  }
}

function createSubmitButton(){
  let submitButton = document.createElement('button');
  submitButton.innerHTML = 'Submit';
  submitButton.id = 'submit-button';
  return submitButton;
}

function removeSubmitButton(){
  let submitButtonParent = document.getElementById('container');
  let submitButton = document.getElementById('submit-button');
  submitButtonParent.removeChild(submitButton);
}

function createRemoveButton(){
  let removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove field';
  removeButton.onclick = removeField;
  return removeButton;
}

function createFieldNameContainer(fieldName){
  let fieldNameContainer = document.createElement('div');
  fieldNameContainer.className = 'field-name-container';
  fieldNameContainer.innerHTML = fieldName + ':';
  return fieldNameContainer;
}

function removeField(){
  this.parentElement.parentElement.removeChild(this.parentElement);
  fieldsCounter--;

  if(!shouldDisableAddFieldButton()){
    let addFieldButton = document.getElementById('add-field-button');
    addFieldButton.disabled = false;
  }

  //if last field is removed then remove submit button
  if(fieldsCounter === 0){
    removeSubmitButton();
  }
}

function shouldDisableAddFieldButton(){
  return fieldsCounter === MAX_NUMBER_OF_FIELDS;
}

function createTooltip(){
  let tooltip = document.createElement('span');
  tooltip.className = 'tooltiptext';
  tooltip.innerHTML = `No more than ${MAX_NUMBER_OF_FIELDS} fields can be added`;
  return tooltip;
}
