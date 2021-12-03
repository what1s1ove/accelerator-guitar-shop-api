# Accelerator Guitar Shop API

## Ресурсы

```
/guitars
```

```
/guitars/1
```

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
