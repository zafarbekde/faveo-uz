[<- Go Back](./Documentation.md)

## Manage categories 

---

> Base url: `/api/v1/categories`

> All routes required user or administrator role

<br>


**GET** `/`

**Authorization**: `Bearer <token>`

Response

```json
{
    "message": "Retrive all categories",
    "categories": [
        {
            "id": 1,
            "name": "Foods",
            "icon": "foods-icon.png",
        },
        {
            "id": 2,
            "name": "Drinks",
            "icon": "drinks-icon.png",
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
    "message": "Retrive category",
    "category": {
        "id": 1,
        "name": "Foods",
        "icon": "foods-icon.png",
    }
}
```

---

**POST** `/`

**Authorization**: `Bearer <token>`

> ! Required `Admin` role

Request
```js
formdata: name="icon"
```

Body

```json
{
    "name": "Foods"
}
```
Response


```json
{
    "message": "Category created",
    "category": {
        "id": 3,
        "name": "Foods",
        "icon": "foods-icon.png",
    }
}
```

---


**PUT** `/:id`

**Authorization**: `Bearer <token>`

> ! Required `Admin` role

Request
```js
formdata: name="icon"
```

Body

```json
{
    "name": "Foods"
}
```
Response


```json
{
    "message": "Category updated",
    "category": {
        "id": 3,
        "name": "Foods",
        "icon": "foods-icon.png",
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
    "message": "Category deleted",
    "category": {
        "id": 3,
        "name": "Foods",
        "icon": "foods-icon.png",
    }
}
```