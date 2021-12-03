# Accelerator Guitar Shop API

## Структуры данных

### Guitar

```json
{
  "id": 1,
  "name": "Честер Bass",
  "vendorCode": "SO757575",
  "type": "electric",
  "previewImg": "img/guitar-1.jpg",
  "stringCount": 7,
  "rating": 4,
  "price": 17500
}
```

### Comment

```json
{
    "id": "a7c267d0-a72d-41bd-8b8e-e7f67800d58a",
    "userName": "Саша",
    "advantages": "Хорошо. Очень хорошо.",
    "disadvantages": "Плохо. Очень плохо.",
    "comment": "Неплохо, но дорого.",
    "rating": 3,
    "createAt": "2021-10-28T12:32:16.934Z",
    "guitarId": 1
}
```

### CommentPost

```json
{
    "guitarId": 1,
    "userName": "Артём",
    "advantage": "Рекомендую!",
    "disadvantage": "Покрытие.",
    "comment": "Хорошая гитара для начинающих, сделана качественно. Лучше за эти деньги не найти.",
    "rating": 3,
}
```

### CouponPost

```json
{
  "coupon": "light-333"
}
```

Значение **`coupon`** одно из следуюих значений: `light-333`, `medium-444` или `height-555`.

### OrderPost

```json
{
  "guitarsIds": [1, 4],
  "coupon": "light-333"
}
```

Значение **`coupon`** должно быть одно из валидных значений **`CouponPost`**.


## Список роутов

- **GET** `/guitars` – получить список гитар.
- **GET** `/guitars/1` – получить гитару по идентификатору `id`.
- **GET** `/guitars/1/comments`– получить коментарии гитары по идентификатору `id`.
- **POST** `/comments` – отправить новый комментарий.
- **POST** `/coupons` – отправить купон. Если купон валидный, роут возвращает процент скидки.
- **POST** `/orders` – отправить новый заказ.

## Query-параметры

### Фильтр

```
GET /guitars?name=СURT
GET /guitars?type=electric
GET /guitars?name=СURT&type=electric
```

### Сортировка

`_sort` и `_order` (`desc` или `asc`. `asc` по-умолчанию)

```
GET /guitars?_sort=price
GET /guitars?_sort=rating&_order=asc
```

### Диапазон

`_start`, `_end` или `_limit` (`X-Total-Count` заголовок включен в ответ)

```
GET /guitars?_start=10&_end=20
GET /guitars?_start=20&_end=30
GET /guitars?_start=20&_limit=10
```

*Работает в точности как [Array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)*

### Операторы

`_gte` или `_lte` для получения в диапазоне

```
GET /guitars?price_gte=20000&price_lte=30000
```

`_like` для частичной схожести

```
GET /guitars?name_like=Bass
```

### Связи


`_embed` для добавления связей

```
GET /guitars?_embed=comments
GET /guitars/1?_embed=comments
```

Получить вложенные связи

```
GET  /guitars/1/comments
```
