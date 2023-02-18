form1.shipmentSelect.addEventListener("change", function () {
    if (form1.shipmentSelect.value == "delivery") {
        let deliveryAddress = document.createElement("input");
        deliveryAddress.name = "deliveryAddress";
        deliveryAddress.type = "text";
        deliveryAddress.placeholder = "Введіть адресу доставки";
        shipmentData.append(deliveryAddress);

        form1.citiesSelect.addEventListener("change", function () {
            deliveryAddress.remove();
            form1.shipmentSelect.value = "pickup"
        });

        form1.shipmentSelect.addEventListener("change", function () {
            deliveryAddress.remove();
        });
    }

    if (form1.shipmentSelect.value == "novaPoshta") {
        let addressSelect = document.createElement("select");
        addressSelect.name = "addressSelect";
        shipmentData.append(addressSelect);
        if (form1.citiesSelect.value == "city1") {
            let address1 = document.createElement("option");
            address1.value = "address1";
            address1.innerText = "Відділення №1: вул. Пирогівський шлях, 135";
            let address2 = document.createElement("option");
            address2.value = "address1";
            address2.innerText = "Відділення №2: вул. Богатирська, 11";
            let address3 = document.createElement("option");
            address3.value = "address1";
            address3.innerText = "Відділення №3 (до 30 кг на одне місце): вул. Калачівська, 13 (Стара Дарниця)";
            let address4 = document.createElement("option");
            address4.value = "address1";
            address4.innerText = "Відділення №4: вул. Верховинна, 69";
            let address5 = document.createElement("option");
            address5.value = "address1";
            address5.innerText = "Відділення №5: вул. Федорова, 32 (м. Олімпійська)";
            let address6 = document.createElement("option");
            address6.value = "address1";
            address6.innerText = "Відділення №6: вул. Миколи Василенка, 2 (метро Берестейська)";

            addressSelect.append(address1);
            addressSelect.append(address2);
            addressSelect.append(address3);
            addressSelect.append(address4);
            addressSelect.append(address5);
            addressSelect.append(address6);
        }
        if (form1.citiesSelect.value == "city2") {
            let address1 = document.createElement("option");
            address1.value = "address1";
            address1.innerText = "Відділення №1: вул. Польова, 67";
            let address2 = document.createElement("option");
            address2.value = "address1";
            address2.innerText = "Відділення №2 (до 30 кг на одне місце): просп.Героїв Харкова (ран. Московський), 54а";
            let address3 = document.createElement("option");
            address3.value = "address1";
            address3.innerText = "Відділення №3: вул. Тюрінська (ран. Якіра), 124";
            let address4 = document.createElement("option");
            address4.value = "address1";
            address4.innerText = "Відділення №4: вул. Достоєвського, 5";
            let address5 = document.createElement("option");
            address5.value = "address1";
            address5.innerText = "Відділення №5: пл. Ю. Кононенка, 1а (Автобазар \"Лоск\", приміщення \"Приват Банку\")";
            let address6 = document.createElement("option");
            address6.value = "address1";
            address6.innerText = "Відділення №6: вул. Академіка Павлова, 120";

            addressSelect.append(address1);
            addressSelect.append(address2);
            addressSelect.append(address3);
            addressSelect.append(address4);
            addressSelect.append(address5);
            addressSelect.append(address6);
        }
        if (form1.citiesSelect.value == "city3") {
            let address1 = document.createElement("option");
            address1.value = "address1";
            address1.innerText = "Відділення №1: вул. Маршала Малиновського, 114";
            let address2 = document.createElement("option");
            address2.value = "address1";
            address2.innerText = "Відділення №2: вул. Академіка Янгеля, 40";
            let address3 = document.createElement("option");
            address3.value = "address1";
            address3.innerText = "Відділення №3 (до 150 кг): вул. Тверська, 1";
            let address4 = document.createElement("option");
            address4.value = "address1";
            address4.innerText = "Відділення №5: вул. Бориса Кротова, 38 (с. Дороге, провул. Тютіна, 15а)";
            let address5 = document.createElement("option");
            address5.value = "address1";
            address5.innerText = "Відділення №6: вул. Ударників, 27";
            let address6 = document.createElement("option");
            address6.value = "address1";
            address6.innerText = "Відділення №7 (до 30 кг): просп. Олександра Поля (ран. Кірова), 8а";

            addressSelect.append(address1);
            addressSelect.append(address2);
            addressSelect.append(address3);
            addressSelect.append(address4);
            addressSelect.append(address5);
            addressSelect.append(address6);
        }
        if (form1.citiesSelect.value == "city4") {
            let address1 = document.createElement("option");
            address1.value = "address1";
            address1.innerText = "Відділення №1: Київське шосе (ран. Ленінградське шосе), 27";
            let address2 = document.createElement("option");
            address2.value = "address1";
            address2.innerText = "Відділення №2: вул. Базова, 16 (Промринок, 7 км)";
            let address3 = document.createElement("option");
            address3.value = "address1";
            address3.innerText = "Відділення №3: вул. Дальницька, 23/4";
            let address4 = document.createElement("option");
            address4.value = "address1";
            address4.innerText = "Відділення №4: вул. Академіка Вільямса, 86";
            let address5 = document.createElement("option");
            address5.value = "address1";
            address5.innerText = "Відділення №5 (до 30 кг на одне місце): вул. Академіка Філатова, 24";
            let address6 = document.createElement("option");
            address6.value = "address1";
            address6.innerText = "Відділення №7 (до 30 кг): вул. Жуковського, 10";

            addressSelect.append(address1);
            addressSelect.append(address2);
            addressSelect.append(address3);
            addressSelect.append(address4);
            addressSelect.append(address5);
            addressSelect.append(address6);
        }
        if (form1.citiesSelect.value == "city5") {
            let address1 = document.createElement("option");
            address1.value = "address1";
            address1.innerText = "Відділення №1: вул. Городоцька, 359";
            let address2 = document.createElement("option");
            address2.value = "address1";
            address2.innerText = "Відділення №2: вул. Пластова, 7";
            let address3 = document.createElement("option");
            address3.value = "address1";
            address3.innerText = "Відділення №3: вул. Угорська, 22 (заїзд із вул. Луганської)";
            let address4 = document.createElement("option");
            address4.value = "address1";
            address4.innerText = "Відділення №4: Трускавецька, 15 (с.Сокільники, вул. Львівська бічна,11)";
            let address5 = document.createElement("option");
            address5.value = "address1";
            address5.innerText = "Відділення №5 (до 30 кг): вул. Данилишина, 6";
            let address6 = document.createElement("option");
            address6.value = "address1";
            address6.innerText = "Відділення №6 (до 30 кг): вул. Сихівська, 8";

            addressSelect.append(address1);
            addressSelect.append(address2);
            addressSelect.append(address3);
            addressSelect.append(address4);
            addressSelect.append(address5);
            addressSelect.append(address6);
        }

        form1.citiesSelect.addEventListener("change", function () {
            if (form1.deliveryAddress) {
                deliveryAddress.remove();
                form1.shipmentSelect.value = "pickup"
            } else if (form1.addressSelect) {
                addressSelect.remove();
                form1.shipmentSelect.value = "pickup"
            }
        });

        form1.shipmentSelect.addEventListener("change", function () {
            addressSelect.remove();
        });
    }
})