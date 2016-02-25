import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {LearnMoreButton} from './landing.learn-more.button'
import {Notifier} from './app.notifier'


@Component({
    selector: 'product-slide',
    templateUrl: 'app/views/product.selector.singleSlide.view.html',
    directives: [LearnMoreButton, Notifier]
})
export class ProductSlide {
    // This is where the animation code goes for each slide
    @Input() fridge
    @Input() fridgeTitle
    @Input() fridgeDescription
    @Input() fridgeUrl
    @Input() fridgeId
    @Input() selected
    
    ngOnChanges(changes) {
        if ("selected" in changes) {
            console.log(changes)
        }
    }
}