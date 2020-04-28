let navbtn = document.querySelector('.navbar-burger');
let navmenu = document.querySelector('.navbar-menu');

navbtn.addEventListener("click", function(){
  navbtn.classList.toggle("is-active");
  navmenu.classList.toggle("is-active");
})

let search = document.querySelector('.button');
let job_res
search.addEventListener("click", function(e) {
    e.preventDefault()
    let description = document.getElementById('description').value;
    let locate = document.getElementById('locate').value;
    let full_time = document.getElementById('full_time').checked;
    
    let search_url = `https://still-spire-37210.herokuapp.com/positions.json?description=${description}&location=${locate}&full_time=${full_time}`;
    // let search_url = "https://still-spire-37210.herokuapp.com/positions.json?description="+ description + "&location=" + locate + "&full_time=" + full_time
    console.log(search_url)

    fetch(search_url)
    .then(res => {
        return res.json();
        // console.log(res.json());
    })
    .then(function(json) {
        // console.log(json)
        let result = json.map(toPostHtml).join('')
        // console.log(result)
        document.getElementById("column").innerHTML = result
    })
})

  

function toPostHtml(jsn) {
    return `
    <table class="table is-fullwidth positionlist is-loading">
        <tbody id="job-pannel">
            <tr>
            <td>
                <h4><a href="https://jobs.github.com/positions/${jsn.id}">${jsn.title}</a></h4>
                <p class="source">
                <a class="company" href="https://jobs.github.com/companies/${jsn.company_url}">${jsn.company}</a>
                –
                <strong class="fulltime">${jsn.type}</strong>
                </p>
            </td>
            <td class="meta">
                <span class="location">${jsn.location}</span>
            </td>
            </tr>
        </tbody>
    </table>
    `
}




// let url = new URL('https://jobs.github.com/positions?.json');
// let qs = new URLSearchParams();
// let description = document.getElementById('description').value
// let locate = document.getElementById('locate').value
// let full_time = document.getElementById('full_time').on
// let search = document.querySelector('.control');
// search.addEventListener("click", function() {
//     qs.append('description', `${description}`);
//     qs.append('location', `${locate}`);
//     qs.append('full_time',`${full_time}`);
//     url.search = qs;
//     url.href;
//     console.log(url.href)
// })

// xhr
// var xhr = new XMLHttpRequest();
// let job_arr
// xhr.open("GET", "https://still-spire-37210.herokuapp.com/positions.json");
// xhr.onload = function() {
//     // if (xhr.status >= 200 && xhr.status < 400) {
//     job_arr = JSON.parse(xhr.responseText);
//     console.log(job_arr)
//     // }
// };
// xhr.send();