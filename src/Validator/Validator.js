/*
 * @Author: your name
 * @Date: 2019-12-06 11:55:35
 * @LastEditTime: 2019-12-06 12:45:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \form-validator\src\Validator\Validator.js
 */
import messages from './Messages';

class Validator {
    constructor(data, rules, customMessages = {}, customNames = {}) {
        this.setData(data);
        this.rules = this.parseRules(rules);
        this.failedRules = [];
        this.errors = null;
        this.customRules = {};
        this.customMessages = customMessages;
        this.customNames = customNames;
        this.customValues = {};
    }

    get numericRules() {
        return ['Numeric', 'Integer'];
    }

   
    validateEmail(name, value) {
        return this.validateMatch(name, value, /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,8}$/i);
    }

   
}

export default Validator;
