System.register(['angular2/core', './services/logger.service', './videoplayer-video.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logger_service_1, videoplayer_video_component_1;
    var VideoPlayerPlayer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (videoplayer_video_component_1_1) {
                videoplayer_video_component_1 = videoplayer_video_component_1_1;
            }],
        execute: function() {
            VideoPlayerPlayer = (function () {
                function VideoPlayerPlayer(logger) {
                    this.logger = logger;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VideoPlayerPlayer.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VideoPlayerPlayer.prototype, "currentId", void 0);
                VideoPlayerPlayer = __decorate([
                    core_1.Component({
                        selector: 'videoplayer-player',
                        templateUrl: 'app/views/videoplayer-player.view.html',
                        directives: [videoplayer_video_component_1.VideoPlayerVideo]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.Logger])
                ], VideoPlayerPlayer);
                return VideoPlayerPlayer;
            })();
            exports_1("VideoPlayerPlayer", VideoPlayerPlayer);
        }
    }
});
//# sourceMappingURL=videoplayer-player.component.js.map