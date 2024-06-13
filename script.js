function get() {
    event.preventDefault()
    const fname = document.getElementById("first-name").value
    const lname = document.getElementById("last-name").value
    const Age = document.getElementById("age-range").value
    const Date = document.getElementById("date").value
    const interests = document.querySelectorAll(`input[name = 'interests']:checked`)
    const Gender = document.querySelectorAll(`input[name = 'gender']:checked`)
    const Country = document.querySelectorAll(`option[name = 'country']:checked`)

    const genderselect = []

    const Select = []

    const selecteditems = []

    // result //

    const result = document.getElementById("result")
 
    interests.forEach((chakoxes) => {
        selecteditems.push(chakoxes.value)
    })

    Gender.forEach((chakoxes) => {
        genderselect.push(chakoxes.value)
    })

    Country.forEach((chakoxes) => {
        Select.push(chakoxes.value)
    })


    result.innerHTML =
    `

    <p>First Name :- ${fname}</p>
    <p>Last Name :- ${lname}</p>
    <p>Age :- ${Age}</p>    
    <p>Date :- ${Date}</p>    
    <p>Interests :- ${selecteditems}</p>
    <p>Gender :- ${genderselect}</p>
    <p>Country :- ${Select}</p>

    `
}

