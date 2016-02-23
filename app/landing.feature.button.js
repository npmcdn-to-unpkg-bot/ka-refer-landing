System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var FeatureButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FeatureButton = (function () {
                function FeatureButton(elementRef) {
                    this.elementRef = elementRef;
                    this.rootElement = this.elementRef.nativeElement;
                }
                FeatureButton.prototype.ngAfterViewInit = function () {
                    console.log(jQuery(this.rootElement).find('rl-ka-lnding-feature-icon'));
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnIcon", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnTitle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FeatureButton.prototype, "btnRollOverCopy", void 0);
                FeatureButton = __decorate([
                    core_1.Component({
                        selector: 'feature-button',
                        templateUrl: 'app/views/landing.feature.button.view.html',
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], FeatureButton);
                return FeatureButton;
            }());
            exports_1("FeatureButton", FeatureButton);
        }
    }
});
//# sourceMappingURL=landing.feature.button.js.map