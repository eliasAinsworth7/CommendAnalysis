let waters;
let issues;
let frequentIssues;
fetch('Datas/datas.json')
  .then(response => response.json())
  .then(data => {
    // Process the JSON data here
    waters=data;
    console.log(waters);
  })
  .catch(error => {
    console.error('Error loading JSON file:', error);
  });
  fetch('Datas/frequentIssuesOfOceanOrSea.json')
  .then(response => response.json())
  .then(data => {
    // Process the JSON data here
    frequentIssues=data;
    console.log(frequentIssues);
  })
  .catch(error => {
    console.error('Error loading JSON file:', error);
  });
  fetch('Datas/issues.json')
  .then(response => response.json())
  .then(data => {
    // Process the JSON data here
    issues=data;
    console.log(issues);
  })
  .catch(error => {
    console.error('Error loading JSON file:', error);
  });