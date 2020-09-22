import React, { Component } from 'react';

class Task4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Str: '', // Принимаемая строка
      isShow: '', // Переменная для скрытого блока
      showTxt: '', // Переменная для отображения сообщений
      alertType: 'primary' // Тип сообщения (цвет окошечка)
    };    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStrChange = this.handleStrChange.bind(this);
  }

  // Функция обработки отправки формы
  handleSubmit(event) {
    event.preventDefault();
    console.log('form is submitted.');

    // Окно для сообщений теперь активно
    this.setState({isShow: 1});

    // let arrN = []; // Массив для элементов первой строки
    // let arrM = []; // Массив для элементов второй строки
    let arr = []; // Массив для элементов строки

    let flag = 0; // Счетчик количества подходящих для IP элементов
    if (flag == 0) {
        // Если символы разделены тремя точками
        if (this.state.Str.split('.').length - 1 === 3) {
            flag = 0;
            // Тогда добавляем символы в массив
            arr = this.state.Str.split('.');
            // И проверяем их на принадлежность к IP
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] >= 0 && arr[i] <= 255 && arr[i] !== '') {
                    flag += 1;
                }
            }
            // Если чисел, разделенных точками, было 4 шт., тогда выводим результат
            if (flag === 4) {
                this.setState({alertType: 'success'});
                this.setState({showTxt: 'YES!'});
            }
            else {
                this.setState({alertType: 'danger'});
                this.setState({showTxt: 'NO!'}); 
            }
        }
        else {
            this.setState({alertType: 'danger'});
            this.setState({showTxt: 'NO!'}); 
        }
    }
  }

  // Методы при изменении переменных в input
  handleStrChange(event) {
    console.log('Str was changed', event.target.value);
    this.setState({Str: event.target.value});
  }

  render() {
    return (
        <div className="pb-4 home">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Задание №4</h1>
                    <p className="lead">В сети интернет каждому компьютеру присваивается четырехбайтовый код, который принято записывать в виде четырех чисел, каждое из которых может принимать значения от 0 до 255, разделенных точками. Напишите программу, которая определяет, является ли заданная строка правильным IP-адресом.</p>
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
                    <label>Строка</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Введите строку"
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

export default Task4;