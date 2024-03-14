import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Calc() {
    const [value, setValue] = useState('');

    const handleButtonClick = (buttonValue) => {
        switch (buttonValue) {
            case 'AC':
                setValue('');
                break;
            case 'DE':
                setValue(value.slice(0, -1));
                break;
            case '.':
            case '/':
            case '*':
            case '+':
            case '-':
                setValue(value + buttonValue);
                break;
            case '=':
                try {
                    setValue(calculate(value).toString());
                } catch (error) {
                    setValue('Error');
                }
                break;
            default:
                setValue(value + buttonValue);
                break;
        }
    };

    const calculate = (expression) => {
        return new Function('return ' + expression)();
    };

    const renderButtons = (buttons) => {
        return buttons.map((button) => (
            <input
                key={button}
                type="button"
                value={button}
                className={button === '=' ? 'equal' : ''}
                onClick={() => handleButtonClick(button)}
            />
        ));
    };
    
      
    return (
        <div>
            <div className="container">
            
                <div className="calculator">
                <h3 className='top-1'>Calculator</h3>
                    <form action="">
                        <div className='display'>
                            <input className='result' type="text" value={value} readOnly />
                        </div>

                        <div>
                            {renderButtons(['AC', 'DE', '.', '/'])}
                        </div>
                        <div>
                            {renderButtons(['7', '8', '9', '*'])}
                        </div>
                        <div>
                            {renderButtons(['4', '5', '6', '+'])}
                        </div>
                        <div>
                            {renderButtons(['1', '2', '3', '-'])}
                        </div>
                        <div>
                            {renderButtons(['00', '0', ])}
                            {renderButtons (['='])}

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Calc;


























