




const getOption = () => {
  let selectElement = document.querySelector('#testid')
  let output = selectElement.value;
  // document.querySelector('.output').textContent = output
  document.querySelector('.output2').textContent = output

  axios.get(`http://localhost:5005/api/${tableparse[output]}`)
  .then(dat =>{
    console.log(dat)
  })
  .catch(err=>console.log(err))
  
}

