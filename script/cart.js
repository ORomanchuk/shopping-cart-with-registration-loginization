class Good {
    constructor(id, photo, description, quantity, price, instock) {
        this.id = id;
        this.photo = photo;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.instock = instock;
        this.isDelated = false;
        this.div = null;
        this.orderItem = null;
    }

    createIn() {
        this.div = document.createElement("div");
        this.div.classList.add("cardDiv");

        this.orderItem = document.createElement("div");
        this.orderItem.classList.add("orderItem");

        let goodPhoto = document.createElement("div");
        goodPhoto.classList.add("goodPhoto");
        goodPhoto.style.backgroundImage = this.photo;

        let goodDescr = document.createElement("p");
        goodDescr.classList.add("goodDescr");
        goodDescr.innerText = this.description;
        let orderItemDescr = document.createElement("p");
        orderItemDescr.classList.add("goodDescr");
        orderItemDescr.innerText = this.description;

        let quantityDiv = document.createElement("div");
        let rem = document.createElement("button");
        let add = document.createElement("button");
        quantityDiv.classList.add("quantityDiv");
        rem.classList.add("qtyBtn");
        add.classList.add("qtyBtn");
        rem.innerText = "-";
        add.innerText = "+";

        let quantity = document.createElement("p");
        quantity.classList.add("goodQuantity");
        let memory = this.quantity;
        let left = this.instock;

        quantity.innerText = memory;
        let orderItemQuantity = document.createElement("p");
        orderItemQuantity.classList.add("goodQuantity");
        orderItemQuantity.innerText = memory;

        let price = document.createElement("p");
        price.classList.add("goodPrice");
        price.innerText = this.price + " грн.";
        let orderItemPrice = document.createElement("p");
        orderItemPrice.classList.add("goodPrice");
        orderItemPrice.innerText = this.price + " грн.";

        let summ = document.createElement("p");
        summ.classList.add("goodSumm");
        let orderItemSumm = document.createElement("p");
        orderItemSumm.classList.add("goodSumm");
        let a = this.price * this.quantity;
        summ.innerText = a + " грн.";
        orderItemSumm.innerText = a + " грн.";
        totalSumm = totalSumm + a;
        total.innerText = "Всього: " + totalSumm + " грн.";
        orderTotal.innerText = "До сплати: " + totalSumm + " грн.";

        var o = new Object({
            id: this.id,
            quantity: memory,
            price: this.price
        });

        rem.addEventListener("click", () => {
            price;
            totalSumm;
            if (memory > 1) {
                memory -= 1;
                totalSumm = totalSumm - Number(this.price);
            }
            o.quantity = memory;
            quantity.innerText = memory;
            orderItemQuantity.innerText = memory;
            summ.innerText = memory * this.price + " грн.";
            orderItemSumm.innerText = memory * this.price + " грн.";
            total.innerText = "Всього: " + totalSumm + " грн.";
            orderTotal.innerText = "До сплати: " + totalSumm + " грн.";
        });

        add.addEventListener("click", () => {
            price;
            totalSumm;
            if (memory < left) {
                memory += 1;
                totalSumm = totalSumm + Number(this.price);
            }
            else {
                alert("На складі є лише " + left + " шт.");
            }
            o.quantity = memory;
            quantity.innerText = memory;
            orderItemQuantity.innerText = memory;
            summ.innerText = memory * this.price + " грн.";
            orderItemSumm.innerText = memory * this.price + " грн.";
            total.innerText = "Всього: " + totalSumm + " грн.";
            orderTotal.innerText = "До сплати: " + totalSumm + " грн.";
        });

        quantityDiv.append(rem);
        quantityDiv.append(quantity);
        quantityDiv.append(add);

        let cardBin = document.createElement("div");
        cardBin.classList.add("cardBin");
        cardBin.addEventListener("click", () => this.delateState(this.div));
        cardBin.addEventListener("click", function () {
            o.quantity = "Delated";
        });

        this.div.append(goodPhoto);
        this.div.append(goodDescr);
        this.div.append(quantityDiv);
        this.div.append(price);
        this.div.append(summ);
        this.div.append(cardBin);
        listOfProducts.append(this.div);

        this.orderItem.append(orderItemDescr);
        this.orderItem.append(orderItemQuantity);
        this.orderItem.append(orderItemPrice);
        this.orderItem.append(orderItemSumm);
        orderDetail.append(this.orderItem);

        hiddenList.push(o)
    }

    delateState(element) {
        this.isDelated = !this.isDelated;
        element.classList.toggle("delated");
        let a = this.quantity * this.price;
        this.quantity = "delated"
        totalSumm -= a;
        total.innerText = "";
        total.innerText = "Всього: " + totalSumm + " грн.";
        orderTotal.innerText = "До сплати: " + totalSumm + " грн.";
        element.remove();
        this.orderItem.remove();
    }
}