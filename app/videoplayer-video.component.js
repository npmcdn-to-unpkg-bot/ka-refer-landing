System.register(['angular2/core', './services/logger.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, logger_service_1;
    var VideoPlayerVideo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            VideoPlayerVideo = (function () {
                function VideoPlayerVideo(logger) {
                    this.logger = logger;
                    this.ready = false;
                }
                VideoPlayerVideo.prototype.ngOnInit = function () {
                    var self = this;
                    this.player = new YT.Player(this.id, {
                        events: {
                            "onReady": function () {
                                self._onReady(self);
                            }
                        }
                    });
                };
                VideoPlayerVideo.prototype._onReady = function (self) {
                    //need to pass a ref to `this` since this is a callback on YT.Player
                    self.ready = true;
                    self.logger.log(this.id + " ready");
                    console.log(self.player);
                    self.play(self);
                    setTimeout(function () {
                        self.pause();
                    }, 5000);
                };
                VideoPlayerVideo.prototype.play = function (self) {
                    if (!self)
                        self = this;
                    if (!self.ready)
                        return;
                    self.player.playVideo();
                };
                VideoPlayerVideo.prototype.pause = function (self) {
                    if (!self)
                        self = this;
                    if (!self.ready)
                        return;
                    self.player.pauseVideo();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], VideoPlayerVideo.prototype, "id", void 0);
                VideoPlayerVideo = __decorate([
                    core_1.Component({
                        selector: 'videoplayer-video',
                        template: "\n    \t<iframe id=\"{{id}}\" src=\"http://www.youtube.com/embed/{{id}}?enablejsapi=1\" allowfullscreen frameborder=\"0\"></iframe>\n\t"
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.Logger])
                ], VideoPlayerVideo);
                return VideoPlayerVideo;
            })();
            exports_1("VideoPlayerVideo", VideoPlayerVideo);
        }
    }
});
//# sourceMappingURL=videoplayer-video.component.js.map