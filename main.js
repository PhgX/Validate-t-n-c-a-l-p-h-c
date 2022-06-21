var ValidateNameClass = /** @class */ (function () {
    function ValidateNameClass() {
        this.validate_Name_class = /^[CAP]+[0-9]{4}[GHIKLM]$/;
    }
    ValidateNameClass.prototype.validate = function (value) {
        return this.validate_Name_class.test(value);
    };
    return ValidateNameClass;
}());
var className = new ValidateNameClass();
var validClassName = ['C0422I'];
var invalidClassName = ['$CA0522I2'];
for (var _i = 0, validClassName_1 = validClassName; _i < validClassName_1.length; _i++) {
    var value = validClassName_1[_i];
    var isvalid = className.validate(value);
    console.log('Tên lớp: ' + value + 'so với biểu mẫu là ' + isvalid);
}
for (var _a = 0, invalidClassName_1 = invalidClassName; _a < invalidClassName_1.length; _a++) {
    var value = invalidClassName_1[_a];
    var isvalid = className.validate(value);
    console.log('Tên lớp: ' + value + 'so với biểu mẫu là ' + isvalid);
}
