/* class Car {
    constructor(name , color, topSpeed){
        this.name = name
        this.color = color
        this.topSpeed = topSpeed
        this.currentSpeed = 0
    }
    drive(){
        this.currentSpeed += 10
        console.log(`car is driving at ${this.currentSpeed} mph`)
    }
    break(){
        this.currentSpeed -= 10
        console.log(`Hit the BREAK! now car speed is ${this.currentSpeed}`)
    }
    stop(){
        this.currentSpeed = 0
        console.log(`stop the car! now speed is ${this.currentSpeed}`)
    }
    time = setTimeout(() => {
        console.log('pHEW! that was so fast')
    }, 3000);

}
 const myObj = new Car ('Porsche' , 'Yellow' , '240')
 console.log(`car name is ${myObj.name} car color is ${myObj.color} car speed is ${myObj.topSpeed} mph`)
 const num = [1 , 2, 3, 4 , 5]
 num.forEach( _ =>  myObj.drive() )
 myObj.break()
 myObj.stop()
 myObj.time */


class bank{
    constructor(){
       console.log(this.balance = 0)
    }
    deposit(dp){
       this.balance += dp
        console.log(`after deposit amount is ${this.balance}`)
    }
    withdraw(wt){
        this.balance -= wt
        console.log(`after withdraw amount is ${this.balance}`)
    }
}
 const totalBalance = new bank()
 
 const Balance = document.getElementById('balance')
 const Amount = document.getElementById('amount')

const Deposit = () => {
    const Bill = Number(Amount.value)
    totalBalance.deposit(Bill)
    Balance.innerText = totalBalance.balance
}
const Withdraw = () => {
    const Bill = Number(Amount.value)
    totalBalance.withdraw(Bill)
    Balance.innerText = totalBalance.balance
} 
