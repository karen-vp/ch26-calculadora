
class Display{
    constructor(displayLatestValue, displayActualValue){
        this.displayLatestValue = displayLatestValue;
        this.displayActualValue = displayActualValue;
        this.calculator = new Calculator();
        this.operator = undefined;
        this.actualValue = '';
        this.latestValue = '';
        this.signs = {
            sum: '+',
            substract: '-',
            divide: '/',
            multiply: '*',
            power: '**'
        }
        this.advancedsigns = {
            root: '√'
        }
    }

    addNumber(numero){
        if (numero === '.' && this.actualValue.includes('.')) return
        this.actualValue = this.actualValue.toString() + numero.toString();
        this.printValues();
    }

    printValues(){
        this.displayActualValue.textContent = this.actualValue;
        this.displayLatestValue.textContent = `${this.latestValue} ${this.signs[this.operator] || this.advancedsigns[this.operator] || ''}`;
    }

    deleteValue(){
        this.actualValue = this.actualValue.toString().slice(0, -1);
        this.printValues();
    }

    deleteAll(){
        this.actualValue = '';
        this.latestValue = '';
        this.operator = undefined;
        this.printValues();
    }
    compute(type){
        this.operator !== 'equal' && this.calculate(this.verify);
        this.operator = type;
        if (this.operator in this.signs){
            this.operation = this.signs[this.operator];
            this.verify = 'basic_operation';
        }
        if (this.operator in this.advancedsigns){
            this.operation = this.operator;
            this.verify = 'advanced_operation';
        }
        this.latestValue = this.actualValue || this.latestValue;
        this.actualValue='';
        this.printValues();
    }

    calculate(x){
        this.funcion = x;
        if((this.latestValue !== '')&&(this.actualValue !=='')){
            this.actualValue = this.calculator[this.funcion](this.latestValue, this.actualValue, this.operation);
        }
    }
}