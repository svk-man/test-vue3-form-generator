# test-vue3-form-generator

## Стэк

Vue 3 (Composition API) + TypeScript + SASS (SCSS)

## Установка зависимостей
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Проверка работоспособности

### Примеры JSON

#### JSON 1
```
[
  {
    "type": "container",
    "code": "k1",
    "parent": null
  },
  {
    "type": "input",
    "code": "c1",
    "parent": "k1",
    "value": null
  },
  {
    "type": "datepicker",
    "code": "c2",
    "parent": "k1",
    "value": "2020-01-01"
  },
  {
    "type": "container",
    "code": "k2",
    "parent": "k1"
  },
  {
    "type": "list",
    "code": "с3",
    "parent": "k2",
    "listdata": [
      {
        "key": 1,
        "value": "мужской"
      },
      {
        "key": 2,
        "value": "женский"
      }
    ],
    "value": 1
  },
  {
    "type": "input",
    "code": "c4",
    "parent": "k2",
    "value": "тест"
  }
]
```

#### JSON 2

```
[
  {
    "type": "container",
    "code": "k1",
    "parent": null
  },
  {
    "type": "container",
    "code": "k3",
    "parent": "k1"
  },
  {
    "type": "container",
    "code": "k4",
    "parent": "k3"
  },
  {
    "type": "list",
    "code": "list1",
    "parent": "k4",
    "listdata": [
      {
        "key": 1,
        "value": "мужской"
      },
      {
        "key": 2,
        "value": "женский"
      }
    ],
    "value": 1
  },
  {
    "type": "datepicker",
    "code": "datepicker1",
    "parent": "k4",
    "value": "2020-01-01"
  },
  {
    "type": "input",
    "code": "in1",
    "parent": "k3",
    "value": null
  },
  {
    "type": "input",
    "code": "in2",
    "parent": "k3",
    "value": null
  },
  {
    "type": "input",
    "code": "c1",
    "parent": "k1",
    "value": null
  },
  {
    "type": "datepicker",
    "code": "c2",
    "parent": "k1",
    "value": "2020-01-01"
  },
  {
    "type": "container",
    "code": "k2",
    "parent": "k1"
  },
  {
    "type": "list",
    "code": "c3",
    "parent": "k2",
    "listdata": [
      {
        "key": 1,
        "value": "мужской"
      },
      {
        "key": 2,
        "value": "женский"
      }
    ],
    "value": 1
  },
  {
    "type": "input",
    "code": "c4",
    "parent": "k2",
    "value": "тест"
  }
]
```

### Ввод JSON в поле ввода

Вводим в поле ввода один из примеров JSON, представленных выше.

![Ввод JSON в поле ввода](docs/1.PNG?raw=true)

Нажимаем кнопку "Сгенерировать форму".

### Отображение модальной формы с сгенерированной формой

Отображается модальная форма, которая содержит сгенерированную по JSON форму.

![Модальная форма с сгенерированной формой](docs/2.PNG?raw=true)

В этой форме можно изменить значения полей.

### Вывод значений полей формы

Нажимаем на X в правом верхнем углу модальной формы, тем самым закрываем форму и видим сообщение, содержащее значения полей формы.

![Вывод значений полей формы](docs/3.PNG?raw=true)
