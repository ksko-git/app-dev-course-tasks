import React, { Component } from 'react';

class Task3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Count: '', // количество элементов массива
      Str: '', // Сами элементы
      isShow: '', // Переменная для скрытого блока
      showTxt: '', // Переменная для отображения сообщений
      alertType: 'primary' // Тип сообщения (цвет окошечка)
    };    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleStrChange = this.handleStrChange.bind(this);
  }

  // Функция обработки отправки формы
  handleSubmit(event) {
    event.preventDefault();
    console.log('form is submitted.');

    // Окно для сообщений теперь активно
    this.setState({isShow: 1});

    // Флаг для отслеживания ошибок в форме
    let flag = 0; 

    // Убираем лишние пробелы из строки
    let newStr = this.state.Str.replace(/\s+/g, ' ') // длинные заменяем одним
                               .replace(/^\s/,'') // убираем в начале строки
                               .replace(/\s$/,''); // и в конце
    // То же самое для Count
    let newCou = this.state.Count.replace(/\s+/g, ' ') // длинные заменяем одним
                               .replace(/^\s/,'') // убираем в начале строки
                               .replace(/\s$/,''); // и в конце
    // Массив введенных пользователем элементов
    let arr = newStr.split(' ');

    // Проверки формы
    // Проверка на сопоставление ореального и введенного количества элементов массива
    if (arr.length != this.state.Count) {      
      this.setState({alertType: 'danger'});
      this.setState({showTxt: 'Введенное вами количество элементов не совпадает с реальным!'}); 
      flag = 1;
    }    
    // Проверка на отрицательность
    if (+this.state.Count <= 0) {
      this.setState({alertType: 'danger'});
      this.setState({showTxt: 'Количество элементов не может быть отрицательным или нулевым!'}); 
      flag = 1;
    } 
    // Проверка на НЕ число (Count)
    if (isNaN(this.state.Count)){
      this.setState({alertType: 'danger'});
      this.setState({showTxt: 'Поле "Количество элементов" содержит НЕ число! Следует вводить числа во всех полях формы.'}); 
      flag = 1;
    }     
    // Проверка на пустую строку
    if (this.state.Str === '' || this.state.Count === '') {
      this.setState({alertType: 'danger'});
      this.setState({showTxt: 'Одно или более поле не заполнено!'}); 
      flag = 1;
    }    

    // Если все проверки пройдены успешно
    if (flag == 0) {      
      let elCount = 0; // Счетчик для количества повторений      
      let arrSolution = []; // Массив решений

      //  Проходим по всем элементам
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
            // Фиксируем количество повторений
            elCount += 1;
          }                  
        }
        // Если элемент встретился всего один раз
        if (elCount == 1) {
          // Записываем его
          arrSolution.push(arr[i]);          
        }
        // Обнуляем переменную для следующего элемента массива
        elCount = 0;  
      }
        
      this.setState({alertType: 'success'});
      this.setState({showTxt: arrSolution.join(' ')}); 
    }    
  }

  // Методы при изменении переменных в input
  handleCountChange(event) {
    console.log('Count was changed', event.target.value);
    this.setState({Count: event.target.value});
  }
  handleStrChange(event) {
    console.log('Str was changed', event.target.value);
    this.setState({Str: event.target.value});
  }

  render() {
    return (
        <div className="pb-4 home">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Задание №3</h1>
                    <p className="lead">Дан массив. Выведите те его элементы, которые встречаются в массиве только один раз. Элементы нужно выводить в том порядке, в котором они встречаются в списке.</p>
                </div>
            </div>

            {/* Окно для сообщений (решение или ошибка) */}
            {this.state.isShow === 1 
                ? <div className={`alert alert-${this.state.alertType}`} role="alert">
                    {this.state.showTxt}
                  </div>
                : <div></div>}
                
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Количество элементов массива</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Введите количество элементов массива"
                        value={this.state.Count}
                        onChange={this.handleCountChange}
                    />
                </div>
                <div className="form-group">
                    <label>Элементы массива</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Введите элементы массива через пробел"
                        value={this.state.Str}
                        onChange={this.handleStrChange}
                    />
                </div>
                <button className="btn btn-outline-success">Выполнить</button>
            </form>
        </div>
        
    );
  }
}

export default Task3;