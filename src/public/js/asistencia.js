let url = "http://localhost:3030/api/usuario"
let body = ''

fetch(url)
.then(response => response.json())
.then(data => insertTable(data))
.catch(error => {console.error('Error fetching data:', error)
                document.getElementById('err').innerHTML = `
                <section class="blog-posts ">
                    <div>
                      <h1 class="title post-title">Error</h1>
                      <p class="post-excerpt">Error de comunicacion con la API </p>
                    </div>
                </section>`})

const insertTable = (data) =>{
  data = data.msg
  
  for (let i = 0; i < data.length; i++) {
    body += `<tr>
            <td>${data[i].idStudent}</td>
            <td>${data[i].id}</td>
            <td>${data[i].first_name}</td>
            <td>${data[i].last_name}</td>
            <td>${data[i].tel}</td>
            <td>${data[i].email}</td>
            <td>${data[i].state}</td>
            </tr>`
  }
  document.getElementById('data').innerHTML = body
}