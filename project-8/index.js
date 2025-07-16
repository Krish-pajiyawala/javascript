  let addproduct = document.querySelector("#addproduct-form");

  let ImgUrl = document.querySelector("#img-url");
  let title = document.querySelector("#title");
  let description = document.querySelector("#description");
  let price = document.querySelector("#price");
  let showproduct = document.querySelector("#showproduct");

  // edit

  let editproduct = document.querySelector("#editproduct-form");

  let editImgUrl = document.querySelector("#editimg-url");
  let edittitle = document.querySelector("#edittitle");
  let editdescription = document.querySelector("#editdescription");
  let editprice = document.querySelector("#editprice");
  let editindex = null;

  // add operation

  addproduct.addEventListener("submit", (e) => {
    e.preventDefault();
    
    
    if (ImgUrl.value == "") {
      let url_err = document.querySelector("#url-err") = "Enter image path";;
    }
    
    if (title.value == "") {
      let title_err = document.querySelector("#title-err") = "Enter title";
    }
    
    if (description.value == "") {
      let description_err = document.querySelector("#description-err") = "Enter description";
    }
    
    if (price.value == "") {
      let price_err = document.querySelector("#price-err") = "Enter price";
    }
else {
      let product = JSON.parse(localStorage.getItem("products")) || [];
      let id = Math.floor(Math.random * 90000) + 10000
      let item = {
        id: id,
        url: ImgUrl.value,
        title: title.value,
        description: description.value,
        price: price.value,
      };
      product.push(item);
      localStorage.setItem("products", JSON.stringify(product));
      addproduct.reset();
      showproductpage();
    }
  });

  let showproductpage = () => {
    let product = JSON.parse(localStorage.getItem("products")) || [];
    let data = "";
    product.forEach((element, index) => {
      let page = `
        <div class=" col-6 col-md-4 col-lg-3 mb-3">
          <div class="card">
            <img src="${element.url}" class="card-img-top" alt="..." height="200px">
            <div class="card-body">
              <h5 class="card-title text-center">${element.title}</h5>
              <p class="card-text overflow-y-scroll" style="height:100px">${element.description}</p>
              <h3 class="text-center mb-3">${element.price}</h3>
              <div class="d-flex justify-content-around">
                <a href="#" class="btn btn-primary" onclick="edtiitem(${index})">edit</a>
                <a href="#" class="btn btn-danger" onclick="deleteitem(${index})">Delete</a>
                <a href="#" class="btn btn-primary" onclick="addtocart(${index})">Cart</a>
              </div>
            </div>
          </div>
        </div>`;
      data += page;
    });

    showproduct.innerHTML = data;
  };

  showproductpage();

  let deleteitem = (id) => {
    let product = JSON.parse(localStorage.getItem("products")) || [];
    product.splice(id, 1);
    localStorage.setItem("products", JSON.stringify(product));
    showproductpage();
  };

  let edtiitem = (id) => {
    editindex = id;
    document.querySelector("#edit-section").style.display = "block";
    showproduct.style.display = "none";
    let product = JSON.parse(localStorage.getItem("products"));
    product = product[id];
    editImgUrl.value = product.url;
    edittitle.value = product.title;
    editdescription.value = product.description;
    editprice.value = product.price;
  };

  editproduct.addEventListener("submit", (e) => {
    e.preventDefault();
    let product = JSON.parse(localStorage.getItem("products"));
    product[editindex] = {
      url: editImgUrl.value,
      title: edittitle.value,
      description: editdescription.value,
      price: editprice.value,
    };

    localStorage.setItem("products", JSON.stringify(product));
    document.querySelector("#edit-section").style.display = "none";
    showproduct.style.display = "flex";
    showproductpage();
    editindex = null;
  });

  // addtocart

  let addtocartpage = document.querySelector("#addtocart");

  let addtocart = (id) => {
    let product = JSON.parse(localStorage.getItem("products"));
    let addcard = JSON.parse(localStorage.getItem("addcart")) || [];

    let exist = false;

    addcard.forEach((item) => {
      if (item.id === product[id].id) {
        item.qty += 1;
        exist = true;
      }
    });

    if (!exist) {
      let newItem = {
        ...product[id],
        qty: 1
      };
      addcard.push(newItem);
    }

    localStorage.setItem("addcart", JSON.stringify(addcard));
    showaddtocart();
  };

  let showaddtocart = () => {
    let addcard = JSON.parse(localStorage.getItem("addcart")) || [];
    let data = "";
    let grandTotal = 0;

    addcard.forEach((item, index) => {
      let itemTotal = item.qty * parseFloat(item.price);
      grandTotal += itemTotal;

      let page = `
        <div class="col-6 col-md-4 col-lg-3 mb-3">
          <div class="card">
            <img src="${item.url}" class="card-img-top" alt="..." height="200px">
            <div class="card-body">
              <h5 class="card-title text-center">${item.title}</h5>
              <p class="card-text overflow-y-scroll" style="height:100px">${item.description}</p>
              <h6 class="text-center">Price: ₹${item.price}</h6>
              <div class="d-flex justify-content-center align-items-center mb-2">
                <button class="btn btn-sm btn-outline-primary" onclick="decreaseQty(${index})">−</button>
                <span class="mx-3">${item.qty}</span>
                <button class="btn btn-sm btn-outline-primary" onclick="increaseQty(${index})">+</button>
              </div>
              <h6 class="text-center">Total: ₹${itemTotal.toFixed(2)}</h6>
              <div class="d-flex justify-content-around mt-2">
                <a href="#" class="btn btn-success" onclick="removeaddtocart(${index})">Buy Now</a>
                <a href="#" class="btn btn-outline-danger" onclick="removeaddtocart(${index})">Remove</a>
              </div>
            </div>
          </div>
        </div>`;
      data += page;
    });

    data += `
  <div class="col-12 mt-4">
    <div class="p-4 rounded-4 shadow-lg bg-white border border-success-subtle text-center" style="max-width: 400px; margin: 0 auto;">
      <h4 class="fw-bold text-success mb-2"> Grand Total</h4>
      <h2 class="text-dark">₹${grandTotal.toFixed(2)}</h2>
    </div>
  </div>`;


    addtocartpage.innerHTML = data;
  };

  let increaseQty = (index) => {
    let addcard = JSON.parse(localStorage.getItem("addcart"));
    addcard[index].qty += 1;
    localStorage.setItem("addcart", JSON.stringify(addcard));
    showaddtocart();
  };

  let decreaseQty = (index) => {
    let addcard = JSON.parse(localStorage.getItem("addcart"));
    if (addcard[index].qty > 1) {
      addcard[index].qty -= 1;
    } else {
      addcard.splice(index, 1); 
    }
    localStorage.setItem("addcart", JSON.stringify(addcard));
    showaddtocart();
  };

  let removeaddtocart = (index) => {
    let addcard = JSON.parse(localStorage.getItem("addcart"));
    addcard.splice(index, 1);
    localStorage.setItem("addcart", JSON.stringify(addcard));
    showaddtocart();
  };

  showaddtocart();
