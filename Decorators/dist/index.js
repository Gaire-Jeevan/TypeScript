"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function Component(constructor) {
    console.log("Component decorators called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log("Inserting the component in the DOM");
    };
}
let ProfileComponent = (() => {
    let _classDecorators = [Component];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ProfileComponent = _classThis = class {
    };
    __setFunctionName(_classThis, "ProfileComponent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProfileComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProfileComponent = _classThis;
})();
function Component1(options) {
    return (constructor) => {
        console.log("Component decorators called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("Inserting the component in the DOM");
        };
    };
}
function Pipe(constructor) {
    console.log("Pipe decorator called");
    constructor.prototype.pipe = true;
}
let ProfileComponent1 = (() => {
    let _classDecorators = [Component1({ selector: "#my-profile" }), Pipe];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ProfileComponent1 = _classThis = class {
    };
    __setFunctionName(_classThis, "ProfileComponent1");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProfileComponent1 = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProfileComponent1 = _classThis;
})();
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
    return descriptor;
}
class Person {
    say(message) {
        console.log("Person says: " + message);
    }
}
let person = new Person();
person.say("Hello");
//# sourceMappingURL=index.js.map