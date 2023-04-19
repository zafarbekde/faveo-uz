[<- Go Back](./Documentation.md)

## User managment routes

---

> Base url: `/api/v1/users`

> All routes required administrator role

<br>


**GET** `/`

**Authorization**: `Bearer <token>`
> ! Required `Admin` role

Response

```json
{
    "message": "Retrive all users",
    "users": [
        {
            "id": 5,
            "email": "johndoe@gmail.com",
            "name": "John",
            "surname": "Doe",
            "birthday": "10.01.1996",
            "phone": "99891 123-45-67",
            "role": "User"
        }
    ]
}
```

---

**PUT** `/:id/details`

Update user details

**Authorization**: `Bearer <token>`

> ! Required `Admin` role


```json
{
    "email": "johndoe@gmail.com",
    "name": "John",
    "surname": "Doe",
    "birthday": "10.01.1996",
    "phone": "99891 123-45-67",
}
```

Response

```json
{
    "message": "User info updated",
   {
        "id": 5,
        "email": "johndoe@gmail.com",
        "name": "John",
        "surname": "Doe",
        "birthday": "10.01.1996",
        "phone": "99891 123-45-67",
        "role": "User"
    }
}
```

---

**PUT** `/:id/access`

Update user access credentials

**Authorization**: `Bearer <token>`

> ! Required `Admin` role


```json
{
   "password": "newPassword",
   "role": "admin"
}
```

Response

```json
{
    "message": "User access credentials updated",
   {
        "id": 5,
        "email": "johndoe@gmail.com",
        "name": "John",
        "surname": "Doe",
        "birthday": "10.01.1996",
        "phone": "99891 123-45-67",
        "role": "User"
    }
}
```


---

**DELETE** `/:id`

Delete user with id

**Authorization**: `Bearer <token>`

> ! Required `Admin` role

Response

```json
{
    "message": "User with id 5 deleted",
   {
        "id": 5,
        "email": "johndoe@gmail.com",
        "name": "John",
        "surname": "Doe",
        "birthday": "10.01.1996",
        "phone": "99891 123-45-67",
        "role": "User"
    }
}
```