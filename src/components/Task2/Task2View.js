import React, { Component } from 'react';

class Task2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      V: '', // Скорость
      T: '', // Время
      isShow: '', // Переменная для скрытого блока
      showTxt: '', // Переменная для отображения сообщений
      alertType: 'primary' // Тип сообщения (цвет окошечка)
    };    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVChange = this.handleVChange.bind(this);
    this.handleTChange = this.handleTChange.bind(this);
  }

  // Функция обработки отправки формы
  handleSubmit(event) {
    event.preventDefault();
    console.log('form is submitted.');

    // Окно для сообщений теперь активно
    this.setState({isShow: 1});

    // Флаг для отслеживания ошибок в форме
    let flag = 0; 

    // Проверки формы
    // Проверка на отрицательность времени
    if (+this.state.T <= 0) {
        this.setState({alertType: 'danger'});
        this.setState({showTxt: 'Время не может быть отрицательным или равным нулю!'}); 
        flag = 1;
      } 
    // Проверка на НЕ число
    if (isNaN(this.state.V) || this.state.V === ''||
        isNaN(this.state.T) || this.state.T === ''
        ){
            this.setState({alertType: 'danger'});
            this.setState({showTxt: 'Одно или несколько полей содержит НЕ число! Следует вводить числа во всех полях формы.'}); 
            flag = 1;
        }    

    // Если все проверки пройдены успешно
    if (flag == 0) {
        const MKAD = 108; 
        // Местоположение мотоциклиста (км)
        let km = this.state.V * this.state.T;

        
        // Если мотоциклист едет вперед
        if (km > 0) {
            km -= 1;
            // km - 1, т.к. счет идет от 0 до 108, а не от 1 до 109
            while (km - 1 > MKAD) {
                // Убираем круг
                km -= MKAD;
            }
        }
        // Если мотоциклист едет назад
        else {
            // km + 1, т.к. счет идет от 0 до 108, а не от 1 до 109
            km = MKAD + km + 1;            
            while (km + 1 < 0) {
                // Если заезжает за отметку нулевого километра, убираем лишний круг
                km += MKAD
            }
        }

      

        
        this.setState({alertType: 'success'});
        this.setState({showTxt: km}); 
    }    
  }

  // Методы при изменении переменных в input
  handleVChange(event) {
    console.log('V was changed', event.target.value);
    this.setState({V: event.target.value});
  }
  handleTChange(event) {
    console.log('T was changed', event.target.value);
    this.setState({T: event.target.value});
  }

  render() {
    return (
        <div className="pb-4 home">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Задание №2</h1>
                    <p className="lead">Длина Московской кольцевой автомобильной дороги —109 километров. Байкер Вася стартует с нулевого километра МКАД и едет со скоростью V километров в час. На какой отметке он остановится через T часов?</p>
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
                    <label>Скорость мотоциклиста</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Введите скорость мотоциклиста"
                        value={this.state.V}
                        onChange={this.handleVChange}
                    />
                </div>
                <div className="form-group">
                    <label>Время в часах</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Введите время в часах"
                        value={this.state.T}
                        onChange={this.handleTChange}
                    />
                </div>
                <button className="btn btn-outline-success">Выполнить</button>
            </form>
        </div>
        
    );
  }
}

export default Task2;