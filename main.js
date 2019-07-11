let fieldsCounter = 0;
const MAX_NUMBER_OF_FIELDS = 3;

/* Function that adds field on the page */
function addField(){
  let fieldName = prompt('Enter field name:');
  if(doesFieldExist(fieldName)){
    return;
  }
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

    /* if submit button exists then add field before button 
    otherwise add field at the end
    */
    if(submitButton){
      container.insertBefore(fieldContainer, submitButton);
    } else {
      container.appendChild(fieldContainer);
    }
    fieldsCounter++;

    /* if add button disabled add tooltip on hover with text*/
    if(shouldDisableAddFieldButton()){
      let addFieldButton = document.getElementById('add-field-button');
      addFieldButton.disabled = true;
      let tooltip = createTooltip();
      addFieldButton.appendChild(tooltip);
    }
  }
    /* if amount of fields more than 0 and submit button doesnt exist
    create submit button and insert it as a child into container */
  if(fieldsCounter > 0){
    if(!document.getElementById('submit-button')){
      let submitButton = createSubmitButton();
      let container = document.getElementById('container');
      container.appendChild(submitButton);
    }
  }
}
/* creating submit button function*/
function createSubmitButton(){
  let submitButton = document.createElement('button');
  submitButton.innerHTML = 'Submit';
  submitButton.id = 'submit-button';
  return submitButton;
}
/* function that removes submit button */
function removeSubmitButton(){
  let submitButtonParent = document.getElementById('container');
  let submitButton = document.getElementById('submit-button');
  submitButtonParent.removeChild(submitButton);
}
/* function that creats remove add field button*/
function createRemoveButton(){
  let removeButton = document.createElement('button');
  removeButton.innerHTML = 'Remove field';
  removeButton.onclick = removeField;
  return removeButton;
}

/* function that creates field name container with name that provided user */
function createFieldNameContainer(fieldName){
  let fieldNameContainer = document.createElement('div');
  fieldNameContainer.className = 'field-name-container';
  fieldNameContainer.innerHTML = fieldName + ':';
  return fieldNameContainer;
}

/* function that removes field */
function removeField(){
  this.parentElement.parentElement.removeChild(this.parentElement);
  fieldsCounter--;

  /* reversing disabled add field button if amount of fields is less than MAX*/
  if(!shouldDisableAddFieldButton()){
    let addFieldButton = document.getElementById('add-field-button');
    addFieldButton.disabled = false;
  }

  //if last field is removed then remove submit button
  if(fieldsCounter === 0){
    removeSubmitButton();
  }
}
/* function that checks if we need to disable add field button */
function shouldDisableAddFieldButton(){
  return fieldsCounter === MAX_NUMBER_OF_FIELDS;
}
/* creating tooltip for disabled button add field */
function createTooltip(){
  let tooltip = document.createElement('span');
  tooltip.className = 'tooltiptext';
  tooltip.innerHTML = `No more than ${MAX_NUMBER_OF_FIELDS} fields can be added`;
  return tooltip;
}
/* function that checks existing name fields and name from the input 
for duplicates */
function doesFieldExist(fieldName){
  let allFieldNames = document.getElementsByClassName('field-name-container');
  for(let i = 0; i < allFieldNames.length; i++){
    let existingFieldName = allFieldNames[i].innerHTML;
    if(fieldName === existingFieldName.slice(0, existingFieldName.length - 1)){
      return true;
    }
  }
  return false;
}
//TODO disable submit button until all fields are filled out.
//creat card after submit.