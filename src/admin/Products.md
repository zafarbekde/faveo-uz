[<- Go Back](./Documentation.md)

## Manage Products 

---

> Base url: `/api/v1/products`

> All routes required user or administrator role

<br>

**GET** `/`

**Authorization**: `Bearer <token>`

Response

```json
{
    "message": "Retrive all products",
    "products": [
        {
            "id": 1,
            "name": "Hamburger",
            "price" : 9.11,
            "image" : "images/hamburger-001.png",
            "category": {
                "id": 1,
                "name": "Foods",
                "icon": "foods-icon.png"
            }
        },
        {
            "id": 1,
            "name": "Coca-cola",
            "price" : 5.99,
            "image" : "images/coca-cola-001.png",
            "category": {
                "id": 2,
                "name": "Drinks",
                "icon": "drinks-icon.png"
            }
        }
    ]
}
```

---

**GET** `/?category_id=1`

**Authorization**: `Bearer <token>`

Response

```json
{
    "message": "Retrive products by category id 1",
    "products": [
        {
            "id": 1,
            "name": "Hamburger",
            "price" : 9.11,
            "image" : "images/hamburger-001.png",
            "category": {
                "id": 1,
                "name": "Foods",
                "icon": "foods-icon.png"
            }
        }
    ]
}
```

---

**GET** `/:id`

**Authorization**: `Bearer <token>`

Response

```json
{
    "message": "Retrive product by id 1",
    "product":  {
        "id": 1,
        "name": "Hamburger",
        "price" : 9.11,
        "image" : "images/hamburger-001.png",
        "category": {
            "id": 1,
            "name": "Foods",
            "icon": "foods-icon.png"
        }
    }
}
```

---

**POST** `/`

**Authorization**: `Bearer <token>`

> ! Required `Admin` role

Request
```js
formdata: name="image"
```

Body

```json
{
    "name": "Hamburger",
    "price" : 9.11,
    "category_id": 1
}
```
Response


```json
{
    "message": "Product created",
    "product":  {
        "id": 1,
        "name": "Hamburger",
        "price" : 9.11,
        "image" : "images/hamburger-001.png",
        "category": {
            "id": 1,
            "name": "Foods",
            "icon": "foods-icon.png"
        }
    }
}
```

---


**PUT** `/:id`

**Authorization**: `Bearer <token>`

> ! Required `Admin` role

Request
```js
formdata: name="image"
```

Body

```json
{
    "name": "Hamburger",
    "price" : 9.11,
    "category_id": 1
}
```
Response


```json
{
    "message": "Product updated",
    "product":  {
        "id": 1,
        "name": "Hamburger",
        "price" : 9.11,
        "image" : "images/hamburger-002.png",
        "category": {
            "id": 1,
            "name": "Foods",
            "icon": "foods-icon.png"
        }
    }
}
```

---


**DELETE** `/:id`

**Authorization**: `Bearer <token>`

> ! Required `Admin` role

Response


```json
{
    "message": "Product deleted",
    "product":  {
        "id": 1,
        "name": "Hamburger",
        "price" : 9.11,
        "image" : "images/hamburger-002.png",
        "category_id": 1
    }
}
```