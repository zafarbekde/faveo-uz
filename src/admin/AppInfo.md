[<- Go Back](./Documentation.md)

## Application info endpoints

---

> Base url: `/api/v1/info`

<br>


**GET** `/`

**Authorization**: `Bearer <token>`

Response

```json
{
    "message": "Application info retrived",
    "info": {
        "name": "Beautiful Foods",
        "location": {
            "geo": "12.66532:5.216653",
            "address": "New York, Broadway 14/B",
        },
        "phones": [
            "99891 123-45-67"
        ]
    }
}
```

---

**PUT** `/`

**Authorization**: `Bearer <token>`

> ! Required `Admin` role


```json
{
    "name": "Beautiful Foods",
    "location": {
        "geo": "12.66532:5.216653",
        "address": "New York, Broadway 14/B",
    },
    "phones": [
        "99891 123-45-67"
    ]
}
```

Response

```json
{
    "message": "Application info updated",
    "info": {
        "name": "Beautiful Foods",
        "location": {
            "geo": "12.66532:5.216653",
            "address": "New York, Broadway 14/B",
        },
        "phones": [
            "99891 123-45-67"
        ]
    }
}
```