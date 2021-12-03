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
- **GET** `/guitars/1` – получить квест c идентификатором `id`.
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
GET /posts?_sort=price
GET /posts?_sort=rating&_order=asc
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
