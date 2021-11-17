var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Really this only stores all the color objects into one
import * as colors from './variableColors';
export var predefinedColors = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, colors.black), colors.blue), colors.brown), colors.cyan), colors.green), colors.orange), colors.pink), colors.purple), colors.red), colors.white), colors.yellow);
