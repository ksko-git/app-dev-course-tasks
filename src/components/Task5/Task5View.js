import React, { Component } from 'react';



class Task5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      N: '', // Количество элементов первого списка
      M: '', // Количество элементов второго списка
      NStr: '', // Элементы первого списка
      MStr: '', // Элементы первого списка
      isShow: '', // Переменная для скрытого блока
      showTxt: '', // Переменная для отображения сообщений
      alertType: 'primary' // Тип сообщения (цвет окошечка)
    };    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNChange = this.handleNChange.bind(this);
    this.handleMChange = this.handleMChange.bind(this);
    this.handleNStrChange = this.handleNStrChange.bind(this);
    this.handleMStrChange = this.handleMStrChange.bind(this);
  }

  

  // Функция обработки отправки формы
  handleSubmit(event) {
    event.preventDefault();
    console.log('form is submitted.');

    // Окно для сообщений теперь активно
    this.setState({isShow: 1});     

    // Флаг для отслеживания ошибок в форме
    let flag = 0; 

    // Убираем лишние пробелы из строк
    let n1 = this.state.N.replace(/\s+/g, ' ').replace(/^\s/,'').replace(/\s$/,''); 
    let m1 = this.state.M.replace(/\s+/g, ' ').replace(/^\s/,'').replace(/\s$/,''); 
    let str1 = this.state.NStr.replace(/\s+/g, ' ').replace(/^\s/,'').replace(/\s$/,''); 
    let str2 = this.state.MStr.replace(/\s+/g, ' ').replace(/^\s/,'').replace(/\s$/,''); 

    // // Убираем лишние пробелы из строк
    // let n1 = toNormalStr(this.state.N);
    // let m1 = toNormalStr(this.state.M);
    // let str1 = toNormalStr(this.state.NStr);
    // let str2 = toNormalStr(this.state.MStr);

    let arr1 = [];
    let arr2 = [];

    arr1 = str1.split(' '); // Массив для элементов первой строки
    arr2 = str2.split(' '); // Массив для элементов второй строки

    // Проверки формы
    // Проверка на сопоставление ореального и введенного количества элементов массива
    if (arr1.length != this.state.N || arr2.length != this.state.M) {   
        this.setState({alertType: 'danger'});
        this.setState({showTxt: 'Введенное вами количество элементов не совпадает с реальным!'}); 
        flag = 1;
      }   
   
     
    // Проверка на отрицательность
    if (+this.state.N <= 0 || +this.state.M <= 0) {
      this.setState({alertType: 'danger'});
      this.setState({showTxt: 'Количество элементов не может быть отрицательным или нулевым!'}); 
      flag = 1;
    } 
    // Проверка на НЕ число (Count)
    if (isNaN(this.state.N) || isNaN(this.state.M)){
      this.setState({alertType: 'danger'});
      this.setState({showTxt: 'Поле "Количество элементов" содержит НЕ число! Следует вводить числа во всех полях формы.'}); 
      flag = 1;
    }     
    // Проверка на пустую строку
    if (this.state.N === '' || this.state.M === '' || this.state.NStr === '' || this.state.MStr === '') {
      this.setState({alertType: 'danger'});
      this.setState({showTxt: 'Одно или более поле не заполнено!'}); 
      flag = 1;
    }   

    if (flag == 0) {
         
      let arrSolution = []; // Массив решений
      let fl = 0; // переменная для ослеживания повторений в массиве решений
      
      //  Проходим по всем элементам
      for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {

          // Если встречаются одинковые, проверяем
          if (arr1[i] == arr2[j]) {
            // Если массив решений пуст
            if (arrSolution.length == 0) {
                // Добавляем первый элемент
                arrSolution.push(arr1[i]);
            }
            // Если не пуст
            else {
                // Проверяем элемент arr1[i] на соответствие одному из элементов массива решений
                for (let k = 0; k < arrSolution.length; k++) {
                    if (arrSolution[k] == arr1[i]) {
                        fl += 1;
                    }
                }
                if (fl == 0) {
                    arrSolution.push(arr1[i]);
                }
            }
            fl = 0;
            j = arr2.length; // Выходим из второго цикла 
          }                           
        }
      }

      // Сортировка массива по возрастанию
      arrSolution.sort();
        
      this.setState({alertType: 'success'});
      this.setState({showTxt: arrSolution.join(' ')}); 
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
  handleNStrChange(event) {
    console.log('NStr was changed', event.target.value);
    this.setState({NStr: event.target.value});
  }
  handleMStrChange(event) {
    console.log('MStr was changed', event.target.value);
    this.setState({MStr: event.target.value});
  }

  render() {
    return (
        <div className="pb-4">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Задание №5</h1>
                    <p className="lead">Даны два списка чисел, которые могут содержать до 100000 чисел каждый.  Выведите все числа, которые входят как в первый, так и во второй список в порядке возрастания.</p>
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
                    <label>Количество элементов первого списка</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Введите количество элементов первого списка"
                        value={this.state.N}
                        onChange={this.handleNChange}
                    />
                </div>
                <div className="form-group">
                    <label>Элементов первого списка</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Введите элементы первого списка"
                        value={this.state.NStr}
                        onChange={this.handleNStrChange}
                    />
                </div>
                <div className="form-group">
                    <label>Количество элементов второго списка</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Введите количество элементов второго списка"
                        value={this.state.M}
                        onChange={this.handleMChange}
                    />
                </div>
                <div className="form-group">
                    <label>Элементов второго списка</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Введите элементы второго списка"
                        value={this.state.MStr}
                        onChange={this.handleMStrChange}
                    />
                </div>
                <button className="btn btn-outline-success">Выполнить</button>
            </form>
        </div>
        
    );
  }
}

export default Task5;