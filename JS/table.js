// generates the table based on the number of rows and columns

function table(noOfRows,noOfcolumns){  
  return `<table> <thead> ${headers(noOfcolumns)}</thead> <tbody>${rows(noOfRows,noOfcolumns)}</tbody> </table>`; 
}

function headers(noOfcolumns){
  let header = '';
  for(let i=1;i <= noOfcolumns;i++){
    header += `<th>Head${i}</th>`;
  }
  return `<tr">${header}</tr>`;  
}

function rows(noOfRows,noOfcolumns){
  return  `<tr> ${cells(noOfcolumns)}</tr>`.repeat(Number(noOfRows)); 
}

function cells(noOfcolumns){
  return `<td>value</td>`.repeat(Number(noOfcolumns)); 
}