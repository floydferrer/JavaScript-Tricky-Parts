function createAccount(pin, amount = 0) {
    return {
        checkBalance(inputPin) {
            if (inputPin === pin) {
                return `$${amount}`;
            } else {
                return 'Invalid PIN.'
            }
        },
    
        deposit(inputPin, amt) {
            if (inputPin === pin) {
                amount += amt
                return `Successfully deposited $${amt}. Current balance: $${amount}.`;
            } else {
                return 'Invalid PIN.'
            }
        },
    
        withdraw(inputPin, amt) {
            if (inputPin === pin) {
                if (amt > amount) return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
                amount -= amt;
                return `Successfully withdrew $${amt}. Current balance: $${amount}.`;
            } else {
                return 'Invalid PIN.'
            }
        },
    
        changePin(inputPin, newPin) {
            if (inputPin === pin) {
                pin = newPin
                return `PIN successfully changed!`;
            } else {
                return 'Invalid PIN.'
            }
        }
    }
}



module.exports = { createAccount };
