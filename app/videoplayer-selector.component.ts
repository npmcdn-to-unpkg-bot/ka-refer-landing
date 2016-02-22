import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {Logger} from './services/logger.service'
import {GoogleApi} from './services/googleapi.service'
import {VideoPlayer} from './videoplayer.component'

@Component({
	selector: 'videoplayer-selector',
    template: 'app/views/videoplayer-selector.view.html'
})
export class VideoPlayerSelector {
	@Input() data
	@Input() id
	@Output() selectedVideo = new EventEmitter()
	ready: boolean

	constructor(private logger: Logger, private api: GoogleApi) {
		this.ready = false
	}

	ngOnInit() {
		let self = this

		this.api.video(this.data.id, function(data, err) {
			if (data && !err) {
				self.initialize(data)
			} else {
				self.logger.error(err)
			}
		})
	}

	initialize(data) {
		//assumes 1 result
		data = data.items[0];
		this.data.desc = data.snippet.description.replace(/\\n/g, '');
		this.ready = true
	}

	select() {
		this.selectedVideo.emit(this.id)
	}
}