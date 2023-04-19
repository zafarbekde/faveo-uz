[<- Go Back](./Documentation.md)

## User authorization endpoints

---

Planning on Draw.io: [show](./auth.drawio)

> Base url: `/api/v1/auth`

<br>

**POST** `/login`

```json
{
    "email": "johndoe@gmail.com",
    "password": "password"
}
```

Response

```json
{
    "message": "Successfuly login",
    "user": {
        "id": 5,
        "email": "johndoe@gmail.com",
        "name": "John",
        "surname": "Doe",
        "birthday": "10.01.1996",
        "phone": "99891 123-45-67",
        "role": "User"
    },
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4c"
}
```

---

**POST** `/register`

```json
{
    "email": "johndoe@gmail.com",
    "password": "password",
    "name": "John",
    "surname": "Doe",
    "birthday": "10.01.1996",
    "phone": "99891 123-45-67",
}
```

Response

```json
{
    "message": "Verification code sended to email",
    "email": "johndoe@gmail.com",
    "timeOut": 300, 
    "verificationId": "aade4420-533c-45bc-8103-cf6632abb342"
}
```
---

**GET** `/status?id=<verificationId>`

Response

```json
{
    "message": "Verification code sended to email",
    "email": "johndoe@gmail.com",
    "timeOut": 70, 
}
```

or

```json
{
    "message": "Email successfuly verified",
    "email": "johndoe@gmail.com"
}
```

---


**POST** `/resend`

```json
{
    "email": "johndoe@gmail.com"
}
```

Response

```json
{
    "message": "Verification code sended to email",
    "email": "johndoe@gmail.com",
    "timeOut": 300, 
    "verificationId": "aade4420-533c-45bc-8103-cf6632abb342"
}
```


---

**POST** `/verify`

```json
{
    "code": "21391",
    "verificationId": "aade4420-533c-45bc-8103-cf6632abb342"
}
```

Response


```json
{
    "message": "Successfuly register",
    "user": {
        "id": 5,
        "email": "johndoe@gmail.com",
        "name": "John",
        "surname": "Doe",
        "birthday": "10.01.1996",
        "phone": "99891 123-45-67",
        "role": "User"
    },
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4c"
}
```
