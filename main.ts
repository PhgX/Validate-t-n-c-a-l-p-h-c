class ValidateNameClass {
    private validate_Name_class : RegExp = /^[CAP]+[0-9]{4}[GHIKLM]$/;

    public validate(value: string): boolean {
        return this.validate_Name_class.test(value)
    }
}

let className = new ValidateNameClass();
let validClassName : string [] = ['C0422I'];
let invalidClassName : string[] = ['$CA0522I2'];

for(let value of validClassName){
    let isvalid : boolean = className.validate(value);
    console.log('Tên lớp: ' + value + 'so với biểu mẫu là ' + isvalid)
    
}

for(let value of invalidClassName){
    let isvalid : boolean = className.validate(value);
    console.log('Tên lớp: ' + value + 'so với biểu mẫu là ' + isvalid)
    
}
