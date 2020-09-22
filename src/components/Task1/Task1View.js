import React, { Component } from 'react';

class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      N: '', // Длина бассейна
      M: '', // Ширина бассейна
      X: '', // Расстояние до длинного бортика
      Y: '', // Расстояние до короткого бортика
      isShow: '', // Переменная для скрытого блока
      showTxt: '', // Переменная для отображения сообщений
      alertType: 'primary' // Тип сообщения (цвет окошечка)
    };    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNChange = this.handleNChange.bind(this);
    this.handleMChange = this.handleMChange.bind(this);
    this.handleXChange = this.handleXChange.bind(this);
    this.handleYChange = this.handleYChange.bind(this);
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
    
    // Длина всгда больше или равна ширине
    if (+this.state.N < +this.state.M) {
        this.setState({alertType: 'danger'});
        this.setState({showTxt: 'Длина должна быть больше или равна ширине бассейна!'}); 
        flag = 1;
    }
    // Проверка на "все бассейна"
    if (this.state.N < this.state.X || this.state.M < this.state.Y) {
      this.setState({alertType: 'warning'});
      this.setState({showTxt: 'Кажется, Яша уже находится вне бассейна!'}); 
      flag = 1;
    }
    // Проверка на отрицательность
    if (+this.state.N <= 0 || +this.state.M <= 0 || +this.state.X <= 0 || +this.state.Y <= 0) {
      this.setState({alertType: 'danger'});
      this.setState({showTxt: 'Отрицательные и нулевые значения переменных не допускаются!'}); 
      flag = 1;
    } 
    // Проверка на НЕ число
    if (isNaN(this.state.N) || this.state.N === ''||
        isNaN(this.state.M) || this.state.M === ''||
        isNaN(this.state.X) || this.state.X === ''||
        isNaN(this.state.Y) || this.state.Y === ''
        ){
            this.setState({alertType: 'danger'});
            this.setState({showTxt: 'Одно или несколько полей содержит НЕ число! Следует вводить числа во всех полях формы.'}); 
            flag = 1;
        }   

    // Если все проверки пройдены успешно
    if (flag == 0) {
        // Находим минимальное расстояние - это наименьшее значение из:
        // 1) this.state.N - this.state.X 
        // 2) this.state.M - this.state.Y
        // 3) this.state.X
        // 4) this.state.Y        
        
        this.setState({alertType: 'success'});
        this.setState({showTxt: 
            'Яша должен проплыть ' 
            + Math.min(this.state.N - this.state.X, this.state.M - this.state.Y, this.state.X, this.state.Y)
            + ' м.'}); 
    }    
  }

  // Методы при изменении переменных в input
  handleNChange(event) {
    console.log('N was changed', event.target.value);
    this.setState({N: event.target.value});
  }
  handleMChange(event) {
    console.log('M was changed', event.target.value);
    this.setState({M: event.target.value});
  }
  handleXChange(event) {
    console.log('X was changed', event.target.value);
    this.setState({X: event.target.value});
  }
  handleYChange(event) {
    console.log('Y was changed', event.target.value);
    this.setState({Y: event.target.value});
  }

  render() {
    return (
        <div className="pb-4">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Задание №1</h1>
                    <p className="lead">Яша плавал в бассейне размером N×M метров и устал. В этот момент он обнаружил, что находится на расстоянии X метров от одного из длинных бортиков (не обязательно от ближайшего) и Y метров от одного из коротких бортиков. Какое минимальное расстояние должен проплыть Яша, чтобы выбраться из бассейна на бортик?</p>
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
                    <label>Длина бассейна</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Введите длину бассейна"
                        value={this.state.N}
                        onChange={this.handleNChange}
                    />
                </div>
                <div className="form-group">
                    <label>Ширина бассейна</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Введите ширину бассейна"
                        value={this.state.M}
                        onChange={this.handleMChange}
                    />
                </div>
                <div className="form-group">
                    <label>Расстояние до длинного бортика</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Введите расстояние до длинного бортика"
                        value={this.state.X}
                        onChange={this.handleXChange}
                    />
                </div>
                <div className="form-group">
                    <label>Расстояние до короткого бортика</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Введите расстояние до короткого бортика"
                        value={this.state.Y}
                        onChange={this.handleYChange}
                    />
                </div>
                <button className="btn btn-outline-success">Выполнить</button>
            </form>
        </div>
        
    );
  }
}

export default Task1;