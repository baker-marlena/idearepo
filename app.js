let tagsArray = [];

function acceptSubmission (){
  event.preventDefault();
  let submissionTitle = document.getElementById("submission-title").value;
  console.log(submissionTitle);
  let submissionTags = document.getElementById("submission-tags").value;
  console.log(submissionTags);
  let submissionText = document.getElementById("submission").value;
  console.log(submissionText);
  formatSubmissionTitle(submissionTitle);
  formatSubmissionTags(submissionTags);
  formatSubmissionText(submissionText);
}

function formatSubmissionTitle (title) {
    let listItem = document.createElement("h3")
    let results = document.getElementById("results")
    results.appendChild(listItem).innerHTML = title;
}

function formatSubmissionTags (tags) {
  let tagsP = document.createElement("small");
  let results = document.getElementById("results");
  results.appendChild(tagsP).innerHTML = tags;
  addTagsToArray(tags);
}

function formatSubmissionText (text) {
  let textItem = document.createElement("p");
  let results = document.getElementById("results");
  results.appendChild(textItem).innerHTML = text;
}

function addTagsToArray (tags) {
  if (tagsArray.length == 0) {
    tagsArray = tags.split(", ")
  }
  else{
    tagsArray = tagsArray.concat(tags.split(', '));
  }
  renderTagsList();
  }

function renderTagsList () {
  let tagList = document.getElementById("tag-list")
  tagsArray.forEach(tag =>{
    let tagHTML = document.createElement("li");
    tagList.appendChild(tagHTML).innerHTML = tag;
  })
}
