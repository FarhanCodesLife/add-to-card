

let users = document.querySelector('#users');


const products = [
    {
        name: "Carlia Hoodie",
        price: 19.99,
        stock: 100,
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

,        image:"https://f.nooncdn.com/p/v1634670414/N51390434V_1.jpg?format=avif&width=240"
    },
    {
        name: "Swoosh Hoodie",
        price: 29.99,
        stock: 50,
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
,
        image:"https://f.nooncdn.com/p/pzsku/Z1A867D4781A6FEAA181BZ/45/_/1705321036/3c88dd97-b2ef-4a3e-8196-7bd4c629e3de.jpg?format=avif&width=240"

    },
    {
        name: "Therma Fit",
        price: 39.99,
        stock: 80,
        image:"https://f.nooncdn.com/p/pzsku/Z107F13410AC9B8232B86Z/45/_/1704457072/49367465-f408-46ff-9ffd-ba5ef65857bd.jpg?format=avif&width=240",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    },
    {
        name: "Identity French ",
        price: 99.99,
        stock: 60,
        image:"https://f.nooncdn.com/p/pzsku/Z11E07DB8505790F0FA48Z/45/_/1694808087/7bcc4f48-278d-4bd1-a4d1-cdbf2ecdecdb.jpg?format=avif&width=240",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    },
    {
        name: " Fit Swoosh Hoodie",
        price: 49.99,
        stock: 20,
        image:"https://f.nooncdn.com/p/pzsku/Z623824ADD642FAFC0FA2Z/45/_/1698979173/10ff1e94-898c-45b0-83ca-28fa056d9db7.jpg?format=avif&width=240",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    },
    {
        name: " Vector Swoosh",
        price: 59.99,
        stock: 120,
        image:"https://f.nooncdn.com/p/pzsku/ZE3F46AFC28E63925C377Z/45/_/1696700556/9b43f328-2a46-4905-a510-2aff217f633b.jpg?format=avif&width=240",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    },
    {
        name: "Hooded Neck",
        price: 69.99,
        stock: 70,
        image:"https://f.nooncdn.com/p/v1644475628/N51062618V_1.jpg?format=avif&width=240",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    },
    {
        name: " Fit Swoosh Hoodie",
        price: 79.99,
        stock: 90,
        image:"https://f.nooncdn.com/p/pzsku/Z8DAE7086CBE13A92306DZ/45/_/1694808165/834659d1-e150-4200-9315-f108fb8e6bb5.jpg?format=avif&width=240",

        // image:"/https://f.nooncdn.com/p/pzsku/Z11E07DB8505790F0FA48Z/45/_/1694808087/7bcc4f48-278d-4bd1-a4d1-cdbf2ecdecdb.jpg?format=avif&width=240",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    },
    {
        name: "Terry Vector Hoodie",
        price: 89.99,
        stock: 10,
        image:"https://f.nooncdn.com/p/pzsku/Z1C8CD169329555057059Z/45/_/1698980786/955bf01f-b156-495b-a6a1-69e7237f4537.jpg?format=avif&width=240",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    },
    {
        name: "Identity French ",
        price: 29.99,
        stock: 50,
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
,
        image:"https://f.nooncdn.com/p/pzsku/Z1A867D4781A6FEAA181BZ/45/_/1705321036/3c88dd97-b2ef-4a3e-8196-7bd4c629e3de.jpg?format=avif&width=240"

    },
    {
        name: "ProduT herma Fit ",
        price: 99.99,
        stock: 60,
        image:"https://f.nooncdn.com/p/pzsku/Z11E07DB8505790F0FA48Z/45/_/1694808087/7bcc4f48-278d-4bd1-a4d1-cdbf2ecdecdb.jpg?format=avif&width=240",

        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        name: "Terry Vector Hoodie",
        price: 69.99,
        stock: 70,
        image:"https://f.nooncdn.com/p/v1644475628/N51062618V_1.jpg?format=avif&width=240",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    },
    
];




function additems() {
    let box = document.querySelector('#inputbox')
    
        // inputbox.innerHTML =''
        box.innerHTML += `
        <div class="card text-center">
        <div class="card-header">
          Add Product
        </div>
        <div class="card-body">
        <input type="text" id="inputname" placeholder="name" required>
        <input type="number" id="inputage" placeholder="Price" required
        ></hr>
        <input type="number" id="inputcity" placeholder="Stock" required
        >
        <input type="email" id="inputemail" placeholder="Discription" required>

          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <button type="submit" class="btn btn-primary" onclick="add()">submint</button>
        </div>
        </div>
        <div class="card-footer text-body-secondary">
          2 days ago
        </div>
      </div>






    
        
        
        
        
        `
    
        
    }

  
function add() {

const username = document.querySelector('#inputname');
const email = document.querySelector('#inputemail');
const age = document.querySelector('#inputage');
const city = document.querySelector('#inputcity');



    let obj = {
        name: username.value,
        price: age.value,
        stock: city.value,
        description: email.value,
        image:"https://f.nooncdn.com/p/pzsku/Z908E77AF8FDB86AA2B47Z/45/_/1710519633/4c43daae-259a-47c7-ab9a-8353101f94d7.jpg?format=avif&width=240",
        
    };
    
    // reader.readAsDataURL(file);

    products.push(obj);

    // Clear the input fields after submission
    username.value = '';
    email.value = '';
    age.value = '';
    city.value = '';

    // Display the users as cards
    addbox();
}



function addbox() {
    users.innerHTML = ''; // Clear previous content

    users.innerHTML = ''; // Clear previous content
    for (let i = 0; i <= products.length; i++) {
        let user = products[i];
        users.innerHTML += `
            <div class="card" style="width: 14rem; margin:1%;">
            
                <img src="${user.image}" alt="...">
                <div class="card-body">
                    <h5 class="card-title">ID: blk${i}000${i}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-warning"><h3>${user.name}</h3></li>
                    <li class="list-group-item"><h4>Price: $${user.price}</h4></li>
                    <li class="list-group-item"><h6>Stock: ${user.stock}</h6></li>
                    <li class="list-group-item"><h6>Discription </h6>${user.description}</li>
                </ul>
                <button type="submit" onclick="delet(${i}) ">submint</button>
            </div>

            
        `;
    }

}


    users.innerHTML = ''; // Clear previous content
    for (let i = 0; i <= products.length; i++) {
        let user = products[i];
        users.innerHTML += `
            <div class="card" style="width: 18rem; margin:1%;">
            
                <img src="${user.image}" alt="...">
                <div class="card-body">
                    <h5 class="card-title">ID: blk${i}000${i}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-warning"><h3>${user.name}</h3></li>
                    <li class="list-group-item"><h4>Price: $${user.price}</h4></li>
                    <li class="list-group-item"><h6>Stock: ${user.stock}</h6></li>
                    <li class="list-group-item"><h6>Discription </h6>${user.description}</li>
                </ul>
                <button type="submit" onclick="delet(${i})">Add to Cart</button>
            </div>

            
        `;
    }

function delet(index) {
    console.log(`
    
    Product name :  ${products[index].name}
    Price:  ${products[index].price}
    Stock :  ${products[index].stock}
    Disceiption :  
    ${products[index].description}
    `);

// console.log(index.i);


    // const updatedVal = prompt('enter updated value');
    // products.splice(index , 1 ,'ok');


    // submit()
}

