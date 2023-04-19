[<- Go Back](./Documentation.md)

## Orders

> Base url: `/api/v1/orders`

**POST** `/`

**Authorization**: `Bearer <token>`

Request

```json
{
    "products": [
        {
            "productId": 13,
            "quantity": 3
        },
        {
            "productId": 14,
            "quantity": 2
        }
    ],
    "address": "Darital, 33",
    "phone": "998918273",
    "name": "Alisher Shamuratov",
    "purchaseType": "   "
}
```

Response

```json
{
    "message": "Order created",
    "order": {
        "id": 2341,
        "products": [
            {
                "id": 13,
                "name": "Hamburger",
                "price" : 9.11,
                "image" : "images/hamburger-001.png",
                "categoryId": 2,
                "quantity": 3,
            },
            {
                "id": 13,
                "name": "Cheezeburger",
                "price" : 8.00,
                "image" : "images/cheezeburger-001.png",
                "categoryId": 1,
                "quantity": 2
            }
        ],
        "date": "2023-03-24",
        "total": {
            "price": 33.33,
            "quantity": 5
        },
        "address": "Darital, 33",
        "phone": "998918273",
        "name": "Alisher Shamuratov",
        "purchaseType": "payme",
        // only for payment systems, if payment method is cash paymentUrl = null
        "paymentUrl": "https://fakepayment.faveo.uz/billing/uavko6Pryp7z648w",
        "status": "pending", // pending for payment. statuses = ['pending', 'success', 'errored', 'declined']
        "comment": ""
    }
}
```

---

**GET** `/?page=1&limit=10&status=`

**Authorization**: `Bearer <token>`

Response

```json
{
    "message": "All orders",
    "orders": [
        {
            "id": 2932,
            "products": [
                {
                    "id": 13,
                    "quantity": 3,
                },
                {
                    "id": 13,
                    "quantity": 2
                }
            ],
            "date": "2023-03-24",
            "address": "Darital, 33",
            "phone": "998918273",
            "name": "Alisher Shamuratov",
            "purchaseType": "payme",
            // only for payment systems, if payment method is cash paymentUrl = null
            "paymentUrl": null,
            "status": "declined", // pending for payment. statuses = ['pending', 'success', 'errored', 'declined', 'completed']
            "comment": "Biz uzoqqa buyurtma olmaymiz"
        },
        {
            "id": 2933,
            "products": [
                {
                    "id": 16,
                    "quantity": 2,
                },
                {
                    "id": 13,
                    "quantity": 1
                }
            ],
            "date": "2023-03-24",
            "address": "Darital, 24",
            "phone": "998918273",
            "name": "Alisher Shamuratov",
            "purchaseType": "cash",
            // only for payment systems, if payment method is cash paymentUrl = null
            "paymentUrl": null,
            "status": "success", // pending for payment. statuses = ['pending', 'success', 'errored', 'declined', 'completed']
            "comment": ""
        }
    ],
    "page": 1,
    "limit": 10
}
```

---

**GET** `/user/:userId?page=1&limit=10&status=`

**Authorization**: `Bearer <token>`

Response

```json
{
    "message": "User 14 orders",
    "orders": [
        {
            "id": 2932,
            "products": [
                {
                    "id": 13,
                    "quantity": 3,
                },
                {
                    "id": 13,
                    "quantity": 2
                }
            ],
            "date": "2023-03-24",
            "address": "Darital, 33",
            "phone": "998918273",
            "name": "Alisher Shamuratov",
            "purchaseType": "payme",
            // only for payment systems, if payment method is cash paymentUrl = null
            "paymentUrl": null,
            "status": "declined", // pending for payment. statuses = ['pending', 'success', 'errored', 'declined', 'completed']
            "comment": "Biz uzoqqa buyurtma olmaymiz"
        },
        {
            "id": 2933,
            "products": [
                {
                    "id": 16,
                    "quantity": 2,
                },
                {
                    "id": 13,
                    "quantity": 1
                }
            ],
            "date": "2023-03-24",
            "address": "Darital, 24",
            "phone": "998918273",
            "name": "Alisher Shamuratov",
            "purchaseType": "cash",
            // only for payment systems, if payment method is cash paymentUrl = null
            "paymentUrl": null,
            "status": "success", // pending for payment. statuses = ['pending', 'success', 'errored', 'declined', 'completed']
            "comment": ""
        }
    ],
    "page": 1,
    "limit": 10
}
```

---

**GET** `/:id`

**Authorization**: `Bearer <token>`

Response

```json
{
    "message": "Order by id 2932",
    "order": {
        "id": 2932,
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
                },
                "quantity": 3,
            },
            {
                "id": 1,
                "name": "Hamburger",
                "price" : 9.11,
                "image" : "images/hamburger-001.png",
                "category": {
                    "id": 1,
                    "name": "Foods",
                    "icon": "foods-icon.png"
                },
                "quantity": 2
            }
        ],
        "date": "2023-03-24",
        "address": "Darital, 33",
        "phone": "998918273",
        "name": "Alisher Shamuratov",
        "purchaseType": "payme",
        // only for payment systems, if payment method is cash paymentUrl = null
        "paymentUrl": null,
        "status": "completed", // pending for payment. statuses = ['pending', 'success', 'errored', 'declined', 'completed']
        "comment": "Buyurtma yetkazildi"
    }
}
```

---

**PATCH** `/:id/status`

**Authorization**: `Bearer <token>`

> Decline order

Request

```json
{
    "comment": "Biz uzoqqa buyurtma olmaymiz"
}
```

Response

```json
{
    "message": "Order declined",
    "order": {
        "id": 2341,
        "products": [
            {
                "id": 13,
                "quantity": 3,
            },
            {
                "id": 13,
                "quantity": 2
            }
        ],
        "date": "2023-03-24",
        "address": "Darital, 33",
        "phone": "998918273",
        "name": "Alisher Shamuratov",
        "purchaseType": "payme",
        // only for payment systems, if payment method is cash paymentUrl = null
        "paymentUrl": null,
        "status": "declined", // pending for payment. statuses = ['pending', 'success', 'errored', 'declined', 'completed']
        "comment": "Biz uzoqqa buyurtma olmaymiz"
   }
}
```