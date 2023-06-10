import { LightningElement } from 'lwc';

export default class CounterApp extends LightningElement {
    counter = 0

    handleIncrement(){
        this.counter = this.counter + 1
    }

    handleDecrement(){
        this.counter = this.counter - 1
    }

    handleReset(){
        this.counter = 0
    }
}
