class Calculator{
    basic_operation(num1, num2, operator){
        this.solution = (num1+operator+num2);
        this.numScreen = eval(this.solution);
        return this.numScreen;
    }
    advanced_operation(num1, num2, operator){
        this.num1 = parseFloat(num1);
        this.num2 = parseFloat(num2);

        switch (operator){
            case 'root':
                this.numScreen = Math.pow(this.num2, 1/this.num1);
                return this.numScreen;
                break;
        }
    }
}
